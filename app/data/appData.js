// app/data/appData.js
export const apps = [
  {
    id: '1',
    name: 'Sales Tracker',
    description: 'Track monthly sales performance and targets',
    createdAt: '2025-01-15T12:00:00Z',
    updatedAt: '2025-02-10T15:30:00Z'
  },
  {
    id: '2',
    name: 'Project Planner',
    description: 'Manage project tasks, timelines and resources',
    createdAt: '2025-01-20T09:15:00Z',
    updatedAt: '2025-02-15T11:45:00Z'
  },
  {
    id: '3',
    name: 'Budget Calculator',
    description: 'Plan and track expenses across categories',
    createdAt: '2025-02-01T14:20:00Z',
    updatedAt: '2025-02-20T10:00:00Z'
  }
];

// Mock spreadsheet data
export const spreadsheetData = {
  '1': [
    ['January', '10000', '8500', '85%'],
    ['February', '12000', '10800', '90%'],
    ['March', '15000', '12750', '85%'],
    ['April', '13000', '11700', '90%']
  ],
  '2': [
    ['Task 1', 'Planning', 'John', '2025-03-01', '2025-03-15'],
    ['Task 2', 'Design', 'Sarah', '2025-03-10', '2025-03-25'],
    ['Task 3', 'Development', 'Mike', '2025-03-20', '2025-04-10'],
    ['Task 4', 'Testing', 'Lisa', '2025-04-05', '2025-04-15']
  ],
  '3': [
    ['Rent', '1500', 'Monthly', 'Housing'],
    ['Groceries', '400', 'Monthly', 'Food'],
    ['Utilities', '200', 'Monthly', 'Housing'],
    ['Entertainment', '150', 'Monthly', 'Leisure']
  ]
};

// Convert app name to URL-friendly slug
export function getSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

// Find app by ID
export function getAppById(id) {
  return apps.find(app => app.id === id);
}

// Find app by slug
export function getAppBySlug(slug) {
  return apps.find(app => getSlug(app.name) === slug);
}

// Get ID from slug
export function getIdFromSlug(slug) {
  const app = getAppBySlug(slug);
  return app ? app.id : null;
}

// Map between IDs and slugs
export const idToSlugMap = apps.reduce((map, app) => {
  map[app.id] = getSlug(app.name);
  return map;
}, {});

export const slugToIdMap = apps.reduce((map, app) => {
  map[getSlug(app.name)] = app.id;
  return map;
}, {});