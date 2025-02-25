"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { apps, getSlug, getAppBySlug } from '@/app/data/appData';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);
  
  // Find current app if we're on an app page
  useEffect(() => {
    if (!pathname) return;
    
    // Check if we're on a direct app page (excluding /app/ prefix)
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const slug = pathSegments[0]; // First part of the path
      const app = getAppBySlug(slug);
      setCurrentApp(app || null);
    } else {
      setCurrentApp(null);
    }
  }, [pathname]);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Spreadsheet Apps
          </Link>
          
          {currentApp && (
            <div className="ml-8 relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span className="mr-1">{currentApp.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showDropdown && (
                <div className="absolute z-10 mt-2 w-64 bg-white rounded shadow-lg py-1">
                  {apps.map(app => (
                    <Link 
                      href={`/${getSlug(app.name)}`} 
                      key={app.id}
                      className={`block px-4 py-2 hover:bg-gray-100 ${currentApp && app.id === currentApp.id ? 'font-semibold' : ''}`}
                      onClick={() => setShowDropdown(false)}
                    >
                      {app.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        
        <nav>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            All Apps
          </Link>
        </nav>
      </div>
    </header>
  );
}