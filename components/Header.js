"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAppBySlug } from '@/app/data/appData';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);
  
  // Find current app if we're on an app page
  useEffect(() => {
    if (!pathname) return;
    
    // Check if we're on a direct app page (excluding /app/ prefix)
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0 && pathSegments[0] !== 'category') {
      const slug = pathSegments[0]; // First part of the path
      const app = getAppBySlug(slug);
      setCurrentApp(app || null);
    } else {
      setCurrentApp(null);
    }
  }, [pathname]);

  return (
    <header className="py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">SpreadApp Store</span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search button - would open search in a real app */}
            <button className="text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Account button - would open account menu in a real app */}
            <button className="text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}