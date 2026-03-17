/**
 * module-config.gs
 * RankinVerse Employability Studio
 */
const MODULE_CONFIG = Object.freeze([
  { id: 'M01', title: 'Worker Rights and Employer Responsibilities', pageId: 'module-m01', sitePath: '/modules/m01', phase: 'phase-1', enabledByDefault: true, sourceStatus: 'SOURCE_GROUNDED', moduleType: 'compliance', noHumor: true, restrictedVisualTreatment: false },
  { id: 'M02', title: 'Reporting Hazards, Complaints, and Non-Retaliation', pageId: 'module-m02', sitePath: '/modules/m02', phase: 'phase-1', enabledByDefault: true, sourceStatus: 'SOURCE_GROUNDED', moduleType: 'compliance', noHumor: true, restrictedVisualTreatment: false },
  { id: 'M03', title: 'Workplace Harassment and Sexual Harassment', pageId: 'module-m03', sitePath: '/modules/m03', phase: 'phase-1', enabledByDefault: true, sourceStatus: 'SOURCE_GROUNDED', moduleType: 'compliance', noHumor: true, restrictedVisualTreatment: true },
  { id: 'M04', title: 'Emergency Action, Fire Protection, and Prepared Response', pageId: 'module-m04', sitePath: '/modules/m04', phase: 'phase-1', enabledByDefault: true, sourceStatus: 'SOURCE_GROUNDED', moduleType: 'safety', noHumor: true, restrictedVisualTreatment: false },
  { id: 'M05', title: 'Worksite Awareness, Hazards, and Safe Conduct', pageId: 'module-m05', sitePath: '/modules/m05', phase: 'phase-1', enabledByDefault: true, sourceStatus: 'SOURCE_GROUNDED', moduleType: 'safety', noHumor: true, restrictedVisualTreatment: false },
  { id: 'M06', title: 'Attendance, Reliability, and Work Readiness', pageId: 'module-m06', sitePath: '/modules/m06', phase: 'phase-2', enabledByDefault: false, sourceStatus: 'NEEDS_SOURCE_UPLOAD', moduleType: 'employability', noHumor: false, restrictedVisualTreatment: false },
  { id: 'M07', title: 'Conflict in the Workplace', pageId: 'module-m07', sitePath: '/modules/m07', phase: 'phase-2', enabledByDefault: false, sourceStatus: 'PROGRAM_DEFINED', moduleType: 'employability', noHumor: false, restrictedVisualTreatment: false },
  { id: 'M08', title: 'Teamwork and Shared Responsibility', pageId: 'module-m08', sitePath: '/modules/m08', phase: 'phase-2', enabledByDefault: false, sourceStatus: 'PROGRAM_DEFINED', moduleType: 'employability', noHumor: false, restrictedVisualTreatment: false },
  { id: 'M09', title: 'Cost of Labor, Time, and Materials', pageId: 'module-m09', sitePath: '/modules/m09', phase: 'phase-2', enabledByDefault: false, sourceStatus: 'NEEDS_SOURCE_UPLOAD', moduleType: 'employability', noHumor: false, restrictedVisualTreatment: false },
  { id: 'M10', title: 'Professional Conduct and Workplace Standards', pageId: 'module-m10', sitePath: '/modules/m10', phase: 'phase-2', enabledByDefault: false, sourceStatus: 'PROGRAM_DEFINED', moduleType: 'employability', noHumor: false, restrictedVisualTreatment: false },
  { id: 'M11', title: 'Leadership and Initiative', pageId: 'module-m11', sitePath: '/modules/m11', phase: 'phase-3', enabledByDefault: false, sourceStatus: 'PROGRAM_DEFINED', moduleType: 'leadership', noHumor: false, restrictedVisualTreatment: false },
  { id: 'M12', title: 'Digital Citizenship and Reputation', pageId: 'module-m12', sitePath: '/modules/m12', phase: 'phase-3', enabledByDefault: false, sourceStatus: 'PROGRAM_DEFINED', moduleType: 'career_readiness', noHumor: false, restrictedVisualTreatment: false },
  { id: 'M13', title: 'Career Readiness and Interview Practice', pageId: 'module-m13', sitePath: '/modules/m13', phase: 'phase-3', enabledByDefault: false, sourceStatus: 'PROGRAM_DEFINED', moduleType: 'career_readiness', noHumor: false, restrictedVisualTreatment: false }
]);
function getAllModules() { return MODULE_CONFIG.slice(); }
function getModuleById(moduleId) { const id = String(moduleId || '').trim().toUpperCase(); return MODULE_CONFIG.find(function(module) { return module.id === id; }) || null; }
function getEnabledModules() { return getEnabledModulesFromSettings(); }
function isModuleEnabled(moduleId) { return !!getEnabledModules().find(function(module) { return module.id === String(moduleId || '').trim().toUpperCase(); }); }
function getNextModuleAfter(moduleId) { const id = String(moduleId || '').trim().toUpperCase(); const enabled = getEnabledModules(); const index = enabled.findIndex(function(module) { return module.id === id; }); if (index === -1 || index + 1 >= enabled.length) { return null; } return enabled[index + 1]; }
function getModulePageUrl(moduleId) { const module = getModuleById(moduleId); const baseUrl = getSiteBaseUrlFromSettings(); if (!module) { return baseUrl + APP_CONFIG.SITE.FALLBACK_PATH; } return baseUrl + module.sitePath; }
