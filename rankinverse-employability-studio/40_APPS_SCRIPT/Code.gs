/**
 * RankinVerse Employability Studio
 * Starter Apps Script runtime
 * Version: 0.1.0
 */
function doGet(e) {
  try {
    const request = normalizeRequest_(e);
    logEvent_('REQUEST_RECEIVED', request);
    let result;
    switch (request.action) {
      case APP_CONFIG.ACTIONS.START:
        result = handleStart_(request);
        break;
      case APP_CONFIG.ACTIONS.CONTINUE:
        result = handleContinue_(request);
        break;
      case APP_CONFIG.ACTIONS.OPEN_MODULE:
        result = handleOpenModule_(request);
        break;
      case APP_CONFIG.ACTIONS.MARK_COMPLETE:
        result = handleMarkComplete_(request);
        break;
      case APP_CONFIG.ACTIONS.HEALTHCHECK:
        result = handleHealthcheck_();
        break;
      default:
        result = errorResult_('INVALID_ACTION', 'Unsupported action.', { action: request.action });
    }
    if (result.ok && result.redirectUrl) {
      return HtmlService.createHtmlOutput(buildRedirectHtml_(result.redirectUrl, result.message || 'Redirecting...'));
    }
    return ContentService.createTextOutput(JSON.stringify(result, null, 2)).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    const failure = errorResult_('UNHANDLED_ERROR', err.message, { stack: String(err.stack || '') });
    return ContentService.createTextOutput(JSON.stringify(failure, null, 2)).setMimeType(ContentService.MimeType.JSON);
  }
}
function doPost(e) {
  try {
    const payload = e && e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
    const request = normalizePostRequest_(payload);
    let result;
    switch (request.action) {
      case APP_CONFIG.ACTIONS.MARK_COMPLETE:
        result = handleMarkComplete_(request);
        break;
      default:
        result = errorResult_('INVALID_POST_ACTION', 'Unsupported POST action.', { action: request.action });
    }
    return ContentService.createTextOutput(JSON.stringify(result, null, 2)).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    const failure = errorResult_('UNHANDLED_POST_ERROR', err.message, { stack: String(err.stack || '') });
    return ContentService.createTextOutput(JSON.stringify(failure, null, 2)).setMimeType(ContentService.MimeType.JSON);
  }
}
function handleStart_(request) {
  const user = getCurrentUserContext_(request.studentEmail);
  if (!user.ok) return user;
  const rosterRecord = getOrCreateStudentRecord(user.data);
  if (!rosterRecord.ok) return rosterRecord;
  const progressRecord = getOrCreateProgressRecord(user.data);
  if (!progressRecord.ok) return progressRecord;
  let finalRoster = rosterRecord.data;
  if (!finalRoster.folder_id) {
    const provisioned = provisionStudentWorkspace(user.data);
    if (!provisioned.ok) return provisioned;
    finalRoster = provisioned.data;
  }
  updateLastLaunchTimestamp(user.data.email);
  const nextModule = getNextModuleForStudent(user.data.email);
  if (!nextModule.ok) return nextModule;
  return okResult_({ action: APP_CONFIG.ACTIONS.START, student_email: user.data.email, student_name: user.data.name, student_exists: !!rosterRecord.data.student_email, provisioned: !rosterRecord.data.folder_id, destination_type: 'module_page', destination_id: nextModule.data.id, destination_url: getModulePageUrl_(nextModule.data.id), redirectUrl: getModulePageUrl_(nextModule.data.id) }, 'Student launched successfully.');
}
function handleContinue_(request) {
  const user = getCurrentUserContext_(request.studentEmail);
  if (!user.ok) return user;
  const roster = getStudentByEmail(user.data.email);
  if (!roster.ok) return roster;
  const nextModule = getNextModuleForStudent(user.data.email);
  if (!nextModule.ok) return nextModule;
  updateLastLaunchTimestamp(user.data.email);
  return okResult_({ action: APP_CONFIG.ACTIONS.CONTINUE, student_email: user.data.email, destination_type: 'module_page', destination_id: nextModule.data.id, destination_url: getModulePageUrl_(nextModule.data.id), redirectUrl: getModulePageUrl_(nextModule.data.id) }, 'Continue route resolved.');
}
function handleOpenModule_(request) { const moduleId = sanitizeModuleId_(request.moduleId); if (!moduleId) return errorResult_('INVALID_MODULE_ID', 'A valid module_id is required.'); if (!isModuleEnabled(moduleId)) return errorResult_('MODULE_DISABLED', 'This module is not currently enabled.', { module_id: moduleId }); return okResult_({ action: APP_CONFIG.ACTIONS.OPEN_MODULE, destination_type: 'module_page', destination_id: moduleId, destination_url: getModulePageUrl_(moduleId), redirectUrl: getModulePageUrl_(moduleId) }, 'Module route resolved.'); }
function handleMarkComplete_(request) { const moduleId = sanitizeModuleId_(request.moduleId); const studentEmail = sanitizeEmail_(request.studentEmail); if (!moduleId) return errorResult_('INVALID_MODULE_ID', 'A valid module_id is required.'); if (!studentEmail) return errorResult_('INVALID_STUDENT_EMAIL', 'A valid student_email is required.'); const updated = markModuleComplete(studentEmail, moduleId); if (!updated.ok) return updated; const nextModule = getNextModuleForStudent(studentEmail); if (!nextModule.ok) return nextModule; return okResult_({ action: APP_CONFIG.ACTIONS.MARK_COMPLETE, student_email: studentEmail, completed_module_id: moduleId, next_module_id: nextModule.data.id, next_module_url: getModulePageUrl_(nextModule.data.id) }, 'Module marked complete.'); }
function handleHealthcheck_() { const workspaceChecks = ensureWorkspaceDependencies(); const checks = { version: APP_CONFIG.APP_VERSION, roster_sheet: sheetExists_(APP_CONFIG.SHEETS.ROSTER.SPREADSHEET_ID, APP_CONFIG.SHEETS.ROSTER.SHEET_NAME), progress_sheet: sheetExists_(APP_CONFIG.SHEETS.PROGRESS.SPREADSHEET_ID, APP_CONFIG.SHEETS.PROGRESS.SHEET_NAME), settings_sheet: sheetExists_(APP_CONFIG.SHEETS.SETTINGS.SPREADSHEET_ID, APP_CONFIG.SHEETS.SETTINGS.SHEET_NAME), students_root_folder: folderExists_(APP_CONFIG.DRIVE.STUDENTS_FOLDER_ID), workspace_dependencies: workspaceChecks.ok === true }; const allOk = Object.keys(checks).filter(function(key) { return key !== 'version'; }).every(function(key) { return checks[key] === true; }); return allOk ? okResult_(checks, 'Healthcheck passed.') : errorResult_('HEALTHCHECK_FAILED', 'One or more dependencies are unavailable.', checks); }
function normalizeRequest_(e) { const params = (e && e.parameter) || {}; return { action: String(params.action || APP_CONFIG.ACTIONS.START).trim(), moduleId: String(params.module_id || '').trim(), studentEmail: String(params.student_email || '').trim() }; }
function normalizePostRequest_(payload) { return { action: String(payload.action || '').trim(), moduleId: String(payload.module_id || '').trim(), studentEmail: String(payload.student_email || '').trim() }; }
function getCurrentUserContext_(overrideEmail) { const activeEmail = sanitizeEmail_(overrideEmail) || sanitizeEmail_(Session.getActiveUser().getEmail()); if (!activeEmail) return errorResult_('NO_ACTIVE_EMAIL', 'Could not determine the active user email. Use a domain deployment or pass student_email explicitly.'); const namePart = activeEmail.split('@')[0].replace(/[._-]+/g, ' '); const displayName = toTitleCase_(namePart); return okResult_({ email: activeEmail, name: displayName }); }
function openSheet_(spreadsheetId, sheetName) { try { const ss = SpreadsheetApp.openById(spreadsheetId); const sheet = ss.getSheetByName(sheetName); if (!sheet) return errorResult_('SHEET_NOT_FOUND', 'Sheet was not found.', { spreadsheet_id: spreadsheetId, sheet_name: sheetName }); return okResult_(sheet); } catch (err) { return errorResult_('SHEET_OPEN_FAILED', err.message, { spreadsheet_id: spreadsheetId, sheet_name: sheetName }); } }
function getSheetObjects_(sheet) { const values = sheet.getDataRange().getValues(); if (!values || values.length < 2) return []; const headers = values[0]; return values.slice(1).map(function(row) { const obj = {}; headers.forEach(function(header, idx) { obj[String(header)] = row[idx]; }); return obj; }); }
function setCellByHeader_(sheet, headers, rowIndex, headerName, value) { const colIndex = headers.indexOf(headerName); if (colIndex === -1) throw new Error('Missing header: ' + headerName); sheet.getRange(rowIndex, colIndex + 1).setValue(value); }
function findRowIndexByValue_(values, headers, headerName, targetValue) { const colIndex = headers.indexOf(headerName); if (colIndex === -1) return -1; for (var i = 1; i < values.length; i++) { if (sanitizeEmail_(values[i][colIndex]) === targetValue) return i + 1; } return -1; }
function sheetExists_(spreadsheetId, sheetName) { try { const ss = SpreadsheetApp.openById(spreadsheetId); return !!ss.getSheetByName(sheetName); } catch (err) { return false; } }
function folderExists_(folderId) { try { return !!DriveApp.getFolderById(folderId); } catch (err) { return false; } }
function sanitizeEmail_(value) { const text = String(value || '').trim().toLowerCase(); return text && text.indexOf('@') > 0 ? text : ''; }
function sanitizeModuleId_(value) { const text = String(value || '').trim().toUpperCase(); return /^M\d{2}$/.test(text) ? text : ''; }
function nowIso_() { return new Date().toISOString(); }
function toTitleCase_(text) { return String(text || '').split(/\s+/).map(function(part) { return part ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() : ''; }).join(' ').trim(); }
function okResult_(data, message) { return { ok: true, code: 'SUCCESS', message: message || 'Success.', data: data || {}, redirectUrl: data && data.redirectUrl ? data.redirectUrl : null, timestamp: nowIso_() }; }
function errorResult_(code, message, details) { return { ok: false, code: code || 'ERROR', message: message || 'An error occurred.', details: details || {}, timestamp: nowIso_() }; }
function logEvent_(eventName, payload) { console.log(JSON.stringify({ timestamp: nowIso_(), event: eventName, payload: payload })); }
function buildRedirectHtml_(url, message) { const safeUrl = String(url || '').replace(/"/g, '&quot;'); const safeMessage = String(message || 'Redirecting...').replace(/</g, '&lt;'); return '<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=' + safeUrl + '"><script>window.location.replace("' + safeUrl + '");</script><title>RankinVerse Employability Studio</title></head><body><p>' + safeMessage + '</p></body></html>'; }
function getModulePageUrl_(moduleId) { return getModulePageUrl(moduleId); }
