/**
 * Electrical Trades Program OS
 * Review queue and program tracker prototype
 *
 * Purpose:
 * Builds simple teacher-facing views from assignment rows.
 */

function rebuildReviewQueue() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var assignments = ss.getSheetByName('Assignments');
  var queue = ss.getSheetByName('Review Queue');

  if (!assignments || !queue) {
    SpreadsheetApp.getUi().alert('Missing Sheet', 'Assignments or Review Queue sheet is missing.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  var data = assignments.getDataRange().getValues();
  if (data.length < 2) {
    clearSheetRows_(queue);
    SpreadsheetApp.getUi().alert('Review Queue', 'No assignments found.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  var headers = data[0];
  var rows = data.slice(1);
  var output = [];

  rows.forEach(function(row) {
    var item = rowToObject_(headers, row);
    var status = String(item['Review Status'] || '').toLowerCase();
    if (status === 'draft' || status === 'needs_review' || status === 'needs revision' || status === 'needs_revision') {
      output.push([
        item['Assignment ID'],
        'Assignment',
        item['Course ID'],
        item['Title'],
        item['Review Status'],
        item['Next Action'] || 'Teacher review',
        new Date().toISOString()
      ]);
    }
  });

  clearSheetRows_(queue);
  if (output.length > 0) {
    queue.getRange(2, 1, output.length, output[0].length).setValues(output);
  }

  SpreadsheetApp.getUi().alert('Review Queue', 'Review queue rebuilt. Items: ' + output.length, SpreadsheetApp.getUi().ButtonSet.OK);
}

function rebuildProgramTracker() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var assignments = ss.getSheetByName('Assignments');
  var tracker = ss.getSheetByName('Program Tracker');

  if (!assignments || !tracker) {
    SpreadsheetApp.getUi().alert('Missing Sheet', 'Assignments or Program Tracker sheet is missing.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  var data = assignments.getDataRange().getValues();
  if (data.length < 2) {
    clearSheetRows_(tracker);
    SpreadsheetApp.getUi().alert('Program Tracker', 'No assignments found.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  var headers = data[0];
  var rows = data.slice(1);
  var output = [];

  rows.forEach(function(row) {
    var item = rowToObject_(headers, row);
    output.push([
      item['Assignment ID'],
      'Assignment',
      item['Course ID'],
      item['Unit or Topic'],
      item['Title'],
      hasValue_(item['Safety Lens']) ? 'Yes' : 'No',
      hasValue_(item['Leadership Lens']) ? 'Yes' : 'No',
      hasValue_(item['Executive-Function Lens']) ? 'Yes' : 'No',
      item['Review Status'] || 'draft',
      'clear',
      'program-defined',
      new Date().toISOString(),
      item['Next Action'] || 'Teacher review'
    ]);
  });

  clearSheetRows_(tracker);
  if (output.length > 0) {
    tracker.getRange(2, 1, output.length, output[0].length).setValues(output);
  }

  SpreadsheetApp.getUi().alert('Program Tracker', 'Program tracker rebuilt. Items: ' + output.length, SpreadsheetApp.getUi().ButtonSet.OK);
}

function clearSheetRows_(sheet) {
  var lastRow = sheet.getLastRow();
  var lastCol = sheet.getLastColumn();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, lastCol).clearContent();
  }
}

function hasValue_(value) {
  return String(value || '').trim().length > 0;
}
