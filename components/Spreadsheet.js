"use client";

import { useEffect, useRef } from 'react';

export default function Spreadsheet({ data }) {
  const containerRef = useRef(null);
  const spreadsheetRef = useRef(null);

  useEffect(() => {
    // Dynamically import jspreadsheet since it's a client-side library
    const loadSpreadsheet = async () => {
      try {
        // First add required jspreadsheet stylesheet if not already present
        if (!document.querySelector('link[href*="jspreadsheet"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://cdnjs.cloudflare.com/ajax/libs/jspreadsheet/4.10.2/jspreadsheet.css';
          document.head.appendChild(link);
        }

        // Dynamically import jspreadsheet
        const jspreadsheet = (await import('jspreadsheet-ce')).default;
        
        if (containerRef.current && !spreadsheetRef.current) {
          // Initialize the spreadsheet
          spreadsheetRef.current = jspreadsheet(containerRef.current, {
            data: data || [],
            columns: [
              { type: 'text', title: 'A', width: 120 },
              { type: 'text', title: 'B', width: 120 },
              { type: 'text', title: 'C', width: 120 },
              { type: 'text', title: 'D', width: 120 },
              { type: 'text', title: 'E', width: 120 },
            ],
            minDimensions: [10, 50],
            tableOverflow: true,
            tableWidth: '100%',
            tableHeight: '400px',
          });
        }
      } catch (error) {
        console.error('Error loading spreadsheet:', error);
      }
    };

    loadSpreadsheet();

    // Cleanup on unmount
    return () => {
      if (spreadsheetRef.current) {
        // Any cleanup would go here
        spreadsheetRef.current = null;
      }
    };
  }, [data]);

  return (
    <div className="spreadsheet-container bg-white p-4 border rounded">
      <div ref={containerRef}></div>
      
      <div className="mt-4 flex justify-end">
        <button 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => alert('Save functionality would be implemented with a backend')}
        >
          Save
        </button>
      </div>
    </div>
  );
}