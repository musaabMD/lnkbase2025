// app/data/appData.js
export const apps = [
  {
    id: '1',
    name: 'Sales Tracker',
    description: 'Track monthly sales performance and targets',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="white">
      <rect x="2" y="13" width="4" height="8" rx="1" />
      <rect x="8" y="9" width="4" height="12" rx="1" />
      <rect x="14" y="5" width="4" height="16" rx="1" />
      <path d="M4 8l5-5 5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>`,
    bgColor: '#FF6B6B',
    category: 'Business',
    createdAt: '2025-01-15T12:00:00Z',
    updatedAt: '2025-02-10T15:30:00Z'
  },
  {
    id: '2',
    name: 'Project Planner',
    description: 'Manage project tasks, timelines and resources',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>`,
    bgColor: '#4ECDC4',
    category: 'Productivity',
    createdAt: '2025-01-20T09:15:00Z',
    updatedAt: '2025-02-15T11:45:00Z'
  },
  {
    id: '3',
    name: 'Budget Calculator',
    description: 'Plan and track expenses across categories',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 6v2m0 8v2" />
    </svg>`,
    bgColor: '#FFBE0B',
    category: 'Finance',
    createdAt: '2025-02-01T14:20:00Z',
    updatedAt: '2025-02-20T10:00:00Z'
  },
  {
    id: '4',
    name: 'Time Manager',
    description: 'Track your time and improve productivity',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>`,
    bgColor: '#2A9D8F',
    category: 'Productivity',
    createdAt: '2025-02-05T10:30:00Z', 
    updatedAt: '2025-02-22T09:15:00Z'
  },
  {
    id: '5',
    name: 'Invoice Generator',
    description: 'Create professional invoices instantly',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>`,
    bgColor: '#E76F51',
    category: 'Business',
    createdAt: '2025-02-10T13:45:00Z',
    updatedAt: '2025-02-24T14:30:00Z'
  },
  {
    id: '6',
    name: 'Expense Tracker',
    description: 'Track personal and business expenses',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M12 11v6" />
      <path d="M9 13h6" />
    </svg>`,
    bgColor: '#264653',
    category: 'Finance',
    createdAt: '2025-02-15T16:20:00Z',
    updatedAt: '2025-02-26T11:00:00Z'
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
  ],
  '4': [
    ['Monday', '8', '5', '3'],
    ['Tuesday', '7', '6', '1'],
    ['Wednesday', '9', '7', '2'],
    ['Thursday', '8', '6', '2']
  ],
  '5': [
    ['Invoice #', 'Client', 'Amount', 'Status'],
    ['001', 'Acme Inc', '$1,500', 'Paid'],
    ['002', 'Globex Corp', '$2,300', 'Pending'],
    ['003', 'Stark Industries', '$3,400', 'Overdue']
  ],
  '6': [
    ['Category', 'January', 'February', 'March'],
    ['Food', '$450', '$420', '$480'],
    ['Transport', '$200', '$220', '$180'],
    ['Utilities', '$300', '$300', '$320']
  ]
};

// Get all categories with icons
export const categories = [
  { 
    name: 'All', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" />
    </svg>` 
  },
  { 
    name: 'Business', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
    </svg>` 
  },
  { 
    name: 'Productivity', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
    </svg>` 
  },
  { 
    name: 'Finance', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
      <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd" />
      <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
    </svg>` 
  },
  { 
    name: 'Education', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
    </svg>` 
  },
  { 
    name: 'Entertainment', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path fill-rule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clip-rule="evenodd" />
    </svg>` 
  }
];

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

// Get apps by category
export function getAppsByCategory(categoryName) {
  if (categoryName === 'All') {
    return apps;
  }
  return apps.filter(app => app.category === categoryName);
}