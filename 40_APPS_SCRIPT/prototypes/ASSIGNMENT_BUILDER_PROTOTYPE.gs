/**
 * Electrical Trades Program OS
 * Assignment builder prototype
 *
 * Purpose:
 * Creates a teacher-reviewed assignment draft record in the Google Sheet MVP.
 */

function createSampleConduitBendingDraft() {
  var draft = {
    assignmentId: makeAssignmentId_('CONDUIT_BENDING'),
    title: 'Basic 90-Degree Bend Layout and Execution',
    courseId: 'CONDUIT_BENDING',
    unitOrTopic: 'Basic bends',
    technicalSkill: 'Plan, mark, bend, and check a basic 90-degree conduit bend.',
    assignmentType: 'Lab',
    safetyLens: 'Pre-Task Hazard Prediction',
    leadershipLens: 'Quality Check Partner',
    executiveFunctionLens: 'Start Plan',
    documentationHabit: 'Record assigned measurement, mark location, final result, correction, and quality check.',
    reflectionPrompt: 'What part of the bend required the most attention? What would you check sooner next time?',
    reviewStatus: 'draft',
    teacherApproved: 'No',
    googleDocLink: '',
    nextAction: 'Teacher review'
  };

  appendAssignmentDraft_(draft);
  appendAuditEvent_('created', draft);
  SpreadsheetApp.getUi().alert('Assignment Draft Created', 'Created draft: ' + draft.title, SpreadsheetApp.getUi().ButtonSet.OK);
}

function createSampleDcTheoryDraft() {
  var draft = {
    assignmentId: makeAssignmentId_('DC_THEORY'),
    title: 'Ohm\'s Law Relationship and Circuit Reasoning',
    courseId: 'DC_THEORY',
    unitOrTopic: 'Voltage, current, resistance, and circuit relationships',
    technicalSkill: 'Identify known values, select the correct relationship, solve for a missing value, and explain the reasoning.',
    assignmentType: 'Theory / Reasoning',
    safetyLens: 'Energy Awareness',
    leadershipLens: 'Peer Explanation',
    executiveFunctionLens: 'Evidence Check',
    documentationHabit: 'Record known values, missing value, relationship, calculation steps, final answer, unit, and reasonableness check.',
    reflectionPrompt: 'What part of the problem helped you know which relationship to use? What mistake would you watch for next time?',
    reviewStatus: 'draft',
    teacherApproved: 'No',
    googleDocLink: '',
    nextAction: 'Teacher review'
  };

  appendAssignmentDraft_(draft);
  appendAuditEvent_('created', draft);
  SpreadsheetApp.getUi().alert('Assignment Draft Created', 'Created draft: ' + draft.title, SpreadsheetApp.getUi().ButtonSet.OK);
}

function appendAssignmentDraft_(draft) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Assignments');
  if (!sheet) {
    SpreadsheetApp.getUi().alert('Missing Sheet', 'Assignments sheet does not exist. Run workbook setup first.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  sheet.appendRow([
    draft.assignmentId,
    draft.title,
    draft.courseId,
    draft.unitOrTopic,
    draft.technicalSkill,
    draft.assignmentType,
    draft.safetyLens,
    draft.leadershipLens,
    draft.executiveFunctionLens,
    draft.documentationHabit,
    draft.reflectionPrompt,
    draft.reviewStatus,
    draft.teacherApproved,
    draft.googleDocLink,
    draft.nextAction
  ]);
}

function appendAuditEvent_(action, draft) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Audit Log');
  if (!sheet) {
    return;
  }

  sheet.appendRow([
    makeAuditId_(),
    new Date().toISOString(),
    action,
    draft.assignmentId,
    draft.title,
    draft.courseId,
    'Apps Script prototype',
    draft.reviewStatus,
    draft.teacherApproved,
    'Teacher-only',
    'Draft created for teacher review.'
  ]);
}

function makeAssignmentId_(courseId) {
  return courseId + '_' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd_HHmmss');
}

function makeAuditId_() {
  return 'AUDIT_' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd_HHmmss');
}
