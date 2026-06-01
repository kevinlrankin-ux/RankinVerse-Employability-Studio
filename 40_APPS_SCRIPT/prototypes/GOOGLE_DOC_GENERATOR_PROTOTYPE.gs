/**
 * Electrical Trades Program OS
 * Google Doc generator prototype
 *
 * Purpose:
 * Creates a teacher-reviewable Google Doc from the active assignment row.
 */

function generateGoogleDocFromActiveAssignmentRow() {
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

  var doc = DocumentApp.create(assignment['Title'] || 'Electrical Trades Assignment Draft');
  var body = doc.getBody();

  body.appendParagraph(assignment['Title'] || 'Assignment Draft').setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph('Course: ' + safeValue_(assignment['Course ID']));
  body.appendParagraph('Unit or Topic: ' + safeValue_(assignment['Unit or Topic']));
  body.appendParagraph('Assignment Type: ' + safeValue_(assignment['Assignment Type']));

  body.appendParagraph('Technical Skill').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph(safeValue_(assignment['Technical Skill']));

  body.appendParagraph('Student Task').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph('Complete the task described by the instructor. Follow the safety, planning, documentation, and reflection expectations below.');

  body.appendParagraph('Materials and Tools').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph('Teacher to complete before classroom use.');

  body.appendParagraph('Safety Lens').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph(safeValue_(assignment['Safety Lens']));

  body.appendParagraph('Leadership Lens').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph(safeValue_(assignment['Leadership Lens']));

  body.appendParagraph('Executive-Function Scaffold').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph(safeValue_(assignment['Executive-Function Lens']));

  body.appendParagraph('Documentation Habit').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph(safeValue_(assignment['Documentation Habit']));

  body.appendParagraph('Rubric Placeholder').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph('Teacher to complete or revise before classroom use.');

  body.appendParagraph('Reflection Prompt').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph(safeValue_(assignment['Reflection Prompt']));

  body.appendParagraph('Teacher Notes').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph('Draft generated for teacher review.');

  body.appendParagraph('Governance Notes').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph('Teacher-facing draft. Review before classroom use. No student personal data required to generate this document.');

  doc.saveAndClose();

  var docUrl = doc.getUrl();
  writeValueToColumn_(sheet, row, headers, 'Google Doc Link', docUrl);

  appendAuditEvent_('google_doc_created', {
    assignmentId: assignment['Assignment ID'],
    title: assignment['Title'],
    courseId: assignment['Course ID'],
    reviewStatus: assignment['Review Status'] || 'draft',
    teacherApproved: assignment['Teacher Approved'] || 'No'
  });

  SpreadsheetApp.getUi().alert('Google Doc Created', docUrl, SpreadsheetApp.getUi().ButtonSet.OK);
}

function rowToObject_(headers, values) {
  var obj = {};
  headers.forEach(function(header, index) {
    obj[String(header)] = values[index];
  });
  return obj;
}

function safeValue_(value) {
  return String(value || '').trim() || 'Teacher to complete.';
}

function writeValueToColumn_(sheet, row, headers, columnName, value) {
  var index = headers.indexOf(columnName);
  if (index === -1) {
    return;
  }
  sheet.getRange(row, index + 1).setValue(value);
}
