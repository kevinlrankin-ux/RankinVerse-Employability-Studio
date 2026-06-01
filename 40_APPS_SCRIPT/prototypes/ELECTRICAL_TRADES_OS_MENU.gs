/**
 * Electrical Trades Program OS
 * Teacher-facing custom menu prototype
 *
 * Purpose:
 * Adds a simple instructor-facing menu to a Google Sheet MVP.
 * This is a prototype only. Generated materials remain drafts until reviewed.
 */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Electrical Trades OS')
    .addItem('Setup Workbook', 'setupElectricalTradesOsWorkbook')
    .addSeparator()
    .addItem('Open Teacher Dashboard', 'openTeacherDashboard')
    .addItem('Build Assignment Draft', 'openAssignmentBuilderSidebar')
    .addItem('Create Sample Conduit Draft', 'createSampleConduitBendingDraft')
    .addItem('Create Sample DC Theory Draft', 'createSampleDcTheoryDraft')
    .addSeparator()
    .addItem('Open Review Queue', 'openReviewQueue')
    .addItem('Open Program Tracker', 'openProgramTracker')
    .addItem('Open Audit Log', 'openAuditLog')
    .addSeparator()
    .addItem('Run Health Check', 'runHealthCheck')
    .addToUi();
}

function openTeacherDashboard() {
  activateSheetByName_('Dashboard');
}

function openReviewQueue() {
  activateSheetByName_('Review Queue');
}

function openProgramTracker() {
  activateSheetByName_('Program Tracker');
}

function openAuditLog() {
  activateSheetByName_('Audit Log');
}

function runHealthCheck() {
  var requiredSheets = [
    'Dashboard',
    'Courses',
    'Assignments',
    'Lens Library',
    'Review Queue',
    'Program Tracker',
    'Audit Log',
    'Source Registry',
    'Tool Registry',
    'Settings'
  ];

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var missing = requiredSheets.filter(function(name) {
    return !ss.getSheetByName(name);
  });

  var message = missing.length === 0
    ? 'Health check passed. All MVP sheets exist.'
    : 'Missing sheets: ' + missing.join(', ');

  SpreadsheetApp.getUi().alert('Electrical Trades OS Health Check', message, SpreadsheetApp.getUi().ButtonSet.OK);
}

function activateSheetByName_(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    SpreadsheetApp.getUi().alert('Missing Sheet', 'The sheet "' + sheetName + '" does not exist yet.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  ss.setActiveSheet(sheet);
}
