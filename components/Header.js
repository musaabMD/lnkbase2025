"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAppBySlug } from '@/app/data/appData';
import config from '@/config';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Removed currentApp since it was unused (fixed the ESLint warning)
  
  // Find current app if we're on an app page
  useEffect(() => {
    if (!pathname) return;
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0 && pathSegments[0] !== 'category') {
      const slug = pathSegments[0];
      const app = getAppBySlug(slug);
      // Not storing the result anywhere since we're not using it
    }
  }, [pathname]);

  return (
    <header className="py-4 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">{config.appName}</span>
          </Link>

          {/* Right Side Navigation */}
          <div className="flex items-center">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href={config.auth.loginUrl}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="text-gray-900 hover:text-gray-700 text-sm font-medium transition-colors"
              >
                Sign up
              </Link>
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-150 shadow-sm inline-flex items-center"
              >
                Upgrade now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-4 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                href={config.auth.loginUrl}
                className="px-2 py-1 text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="px-2 py-1 text-gray-900 hover:text-gray-700 text-sm font-medium"
              >
                Sign up
              </Link>
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-150 shadow-sm text-center mx-2"
              >
                Upgrade now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}