/**
 * Electrical Trades Program OS
 * Sidebar server prototype
 */

function openAssignmentBuilderSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('ASSIGNMENT_BUILDER_SIDEBAR').setTitle('Build Assignment Draft');
  SpreadsheetApp.getUi().showSidebar(html);
}

function createDraftFromSidebar(formData) {
  var draft = {
    assignmentId: makeAssignmentId_(formData.courseId),
    title: String(formData.title || '').trim(),
    courseId: String(formData.courseId || '').trim(),
    unitOrTopic: String(formData.unitOrTopic || '').trim(),
    technicalSkill: String(formData.technicalSkill || '').trim(),
    assignmentType: 'Assignment',
    safetyLens: String(formData.safetyLens || '').trim(),
    leadershipLens: String(formData.leadershipLens || '').trim(),
    executiveFunctionLens: String(formData.executiveFunctionLens || '').trim(),
    documentationHabit: String(formData.documentationHabit || '').trim(),
    reflectionPrompt: String(formData.reflectionPrompt || '').trim(),
    reviewStatus: 'draft',
    teacherApproved: 'No',
    googleDocLink: '',
    nextAction: 'Teacher review'
  };

  if (!draft.courseId || !draft.title || !draft.unitOrTopic || !draft.technicalSkill) {
    throw new Error('Course, title, unit/topic, and technical skill are required.');
  }

  appendAssignmentDraft_(draft);
  appendAuditEvent_('created_from_sidebar', draft);

  return 'Draft created for teacher review: ' + draft.title;
}
