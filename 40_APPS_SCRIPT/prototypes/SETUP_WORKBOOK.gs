/**
 * Electrical Trades Program OS
 * Workbook setup prototype
 *
 * Purpose:
 * Creates the first Google Sheet tabs and header rows for the teacher-facing MVP.
 */

function setupElectricalTradesOsWorkbook() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var sheets = [
    {
      name: 'Dashboard',
      headers: ['Section', 'Value', 'Notes']
    },
    {
      name: 'Courses',
      headers: ['Course ID', 'Course Title', 'Course Type', 'Active', 'Priority', 'Course Notes', 'Next Build Action']
    },
    {
      name: 'Assignments',
      headers: ['Assignment ID', 'Title', 'Course ID', 'Unit or Topic', 'Technical Skill', 'Assignment Type', 'Safety Lens', 'Leadership Lens', 'Executive-Function Lens', 'Documentation Habit', 'Reflection Prompt', 'Review Status', 'Teacher Approved', 'Google Doc Link', 'Next Action']
    },
    {
      name: 'Lens Library',
      headers: ['Lens ID', 'Lens Type', 'Lens Name', 'Best Used For', 'Student Prompt', 'Instructor Note', 'Active']
    },
    {
      name: 'Review Queue',
      headers: ['Item ID', 'Item Type', 'Course', 'Title', 'Review Status', 'Next Action', 'Last Updated']
    },
    {
      name: 'Program Tracker',
      headers: ['Item ID', 'Item Type', 'Course', 'Unit or Topic', 'Title', 'Safety Lens Included', 'Leadership Lens Included', 'Executive-Function Lens Included', 'Review Status', 'Governance Status', 'Source Status', 'Last Updated', 'Next Action']
    },
    {
      name: 'Audit Log',
      headers: ['Audit ID', 'Timestamp', 'Action', 'Item ID', 'Item Title', 'Course', 'Tool Used', 'Review Status', 'Teacher Approved', 'Sharing Category', 'Notes']
    },
    {
      name: 'Source Registry',
      headers: ['Source ID', 'Title', 'Source Type', 'Related Course', 'Summary', 'Source Status', 'Use Level', 'Approved Uses', 'Tags', 'Last Reviewed', 'Notes']
    },
    {
      name: 'Tool Registry',
      headers: ['Tool Name', 'Tool Category', 'Approved Use', 'Not Approved For', 'Data Allowed', 'Data Not Allowed', 'Review Status', 'Notes']
    },
    {
      name: 'Settings',
      headers: ['Setting Key', 'Setting Value', 'Notes']
    }
  ];

  sheets.forEach(function(definition) {
    ensureSheetWithHeaders_(ss, definition.name, definition.headers);
  });

  seedDashboard_(ss);
  seedSettings_(ss);
  seedCourses_(ss);
  seedLensLibrary_(ss);

  SpreadsheetApp.getUi().alert('Electrical Trades OS', 'Workbook setup complete.', SpreadsheetApp.getUi().ButtonSet.OK);
}

function ensureSheetWithHeaders_(ss, sheetName, headers) {
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function seedDashboard_(ss) {
  var sheet = ss.getSheetByName('Dashboard');
  var rows = [
    ['Current Phase', 'Week 2-3 Vertical Slice', 'Teacher dashboard and assignment compiler skeleton'],
    ['Next Action', 'Review proof assignment packs', 'Conduit Bending and DC Theory'],
    ['Teacher-Facing AI Boundary', 'Locked', 'Generated materials are drafts until reviewed'],
    ['Default Sharing', 'Teacher-only', 'Move broader only after review']
  ];
  sheet.getRange(2, 1, rows.length, 3).setValues(rows);
}

function seedSettings_(ss) {
  var sheet = ss.getSheetByName('Settings');
  var rows = [
    ['active_phase', 'week_2_3_vertical_slice', 'Current build phase'],
    ['default_review_status', 'draft', 'New assignments start as drafts'],
    ['teacher_facing_ai_only', 'true', 'Boundary for current build'],
    ['require_teacher_approval', 'true', 'No draft is ready until reviewed'],
    ['default_sharing_category', 'teacher-only', 'Drafts stay private by default']
  ];
  sheet.getRange(2, 1, rows.length, 3).setValues(rows);
}

function seedCourses_(ss) {
  var sheet = ss.getSheetByName('Courses');
  var rows = [
    ['DC_THEORY', 'DC Theory', 'Theory', 'TRUE', 1, 'Electrical reasoning, measurement, relationships, and troubleshooting logic.', 'Review Ohm\'s Law assignment pack'],
    ['CONDUIT_BENDING', 'Conduit Bending', 'Lab', 'TRUE', 2, 'Measurement, sequencing, tool use, and visible workmanship.', 'Review basic 90-degree bend assignment pack'],
    ['WIRE_APPLICATIONS', 'Wire Applications', 'Lab', 'TRUE', 3, 'Conductor handling, terminations, neatness, and procedural accuracy.', 'Create first course slice'],
    ['CODE_PRACTICES', 'Code and Practices', 'Code / Standards', 'TRUE', 4, 'Standards, inspection thinking, and professional reasoning.', 'Create first course slice'],
    ['OSHA_10', 'OSHA-10hr', 'Safety / Compliance', 'TRUE', 5, 'Hazard recognition, worker rights, reporting, and safe conduct.', 'Map to safety lens library'],
    ['PRINT_READING', 'Print Reading', 'Print / Interpretation', 'TRUE', 6, 'Symbol literacy, spatial reasoning, and planning from drawings.', 'Create first course slice'],
    ['STUDIO_5000_EMULATE_3D', 'Studio 5000 / Emulate 3D', 'Controls / Automation', 'TRUE', 7, 'PLC logic, sequencing, simulation, and troubleshooting.', 'Create first course slice']
  ];
  sheet.getRange(2, 1, rows.length, 7).setValues(rows);
}

function seedLensLibrary_(ss) {
  var sheet = ss.getSheetByName('Lens Library');
  var rows = [
    ['SAFETY_PRE_TASK_HAZARD', 'Safety', 'Pre-Task Hazard Prediction', 'Lab and hands-on tasks', 'Identify one thing that could go wrong and one action that prevents it.', 'Use before task start.', 'TRUE'],
    ['SAFETY_ENERGY_AWARENESS', 'Safety', 'Energy Awareness', 'Theory, controls, and circuit work', 'Identify what would need to be verified before this became real work.', 'Useful for theory-to-field connection.', 'TRUE'],
    ['LEADERSHIP_PEER_EXPLANATION', 'Leadership', 'Peer Explanation', 'Theory, code, and reasoning tasks', 'Explain your reasoning to a partner before submitting.', 'Build communication and confidence.', 'TRUE'],
    ['LEADERSHIP_QUALITY_CHECK', 'Leadership', 'Quality Check Partner', 'Lab and installation tasks', 'Ask a partner to check one measurement, connection, or decision.', 'Build shared accountability.', 'TRUE'],
    ['EF_START_PLAN', 'Executive Function', 'Start Plan', 'Any assignment', 'List the first three steps before starting.', 'Helps students begin with intention.', 'TRUE'],
    ['EF_EVIDENCE_CHECK', 'Executive Function', 'Evidence Check', 'Theory, code, and troubleshooting', 'Point to the evidence that supports your answer or decision.', 'Builds reasoning discipline.', 'TRUE']
  ];
  sheet.getRange(2, 1, rows.length, 7).setValues(rows);
}
