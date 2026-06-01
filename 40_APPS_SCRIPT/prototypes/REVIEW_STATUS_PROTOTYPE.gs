/**
 * Electrical Trades Program OS
 * Review status prototype
 *
 * Purpose:
 * Allows the instructor to update the selected assignment review status.
 */

function markSelectedAssignmentReady() {
  updateSelectedAssignmentStatus_('ready for classroom use', 'Yes', 'ready_for_classroom_use');
}

function markSelectedAssignmentNeedsRevision() {
  updateSelectedAssignmentStatus_('needs revision', 'No', 'needs_revision');
}

function archiveSelectedAssignment() {
  updateSelectedAssignmentStatus_('archived', 'No', 'archived');
}

function updateSelectedAssignmentStatus_(status, teacherApproved, auditAction) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Assignments');

  if (!sheet) {
    SpreadsheetApp.getUi().alert('Missing Sheet', 'Assignments sheet does not exist.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  var row = sheet.getActiveRange().getRow();

  if (row < 2) {
    SpreadsheetApp.getUi().alert('Select Assignment', 'Select an assignment row first.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];
  var assignment = rowToObject_(headers, values);

  writeValueToColumn_(sheet, row, headers, 'Review Status', status);
  writeValueToColumn_(sheet, row, headers, 'Teacher Approved', teacherApproved);
  writeValueToColumn_(sheet, row, headers, 'Next Action', nextActionForStatus_(status));

  appendAuditEvent_(auditAction, {
    assignmentId: assignment['Assignment ID'],
    title: assignment['Title'],
    courseId: assignment['Course ID'],
    reviewStatus: status,
    teacherApproved: teacherApproved
  });

  SpreadsheetApp.getUi().alert('Review Status Updated', 'Assignment marked: ' + status, SpreadsheetApp.getUi().ButtonSet.OK);
}

function nextActionForStatus_(status) {
  if (status === 'ready for classroom use') return 'Use in class or export final material';
  if (status === 'needs revision') return 'Revise assignment draft';
  if (status === 'archived') return 'No action';
  return 'Teacher review';
}
