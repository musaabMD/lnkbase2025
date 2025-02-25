"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

export default function Layout({ children, title = 'Lnkbase.com' }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-2xl mr-2 shadow-sm">
                L
              </div>
              <span className="font-bold text-xl text-gray-900">Lnkbase.com</span>
            </Link>
            
            {/* Desktop Navigation & Search */}
            <div className="hidden md:flex items-center flex-1 justify-end">
              {/* Search Bar */}
              <div className={`relative mx-8 flex-1 max-w-md transition-all duration-200 ${searchFocused ? 'scale-105' : ''}`}>
                <input
                  type="text"
                  placeholder="Search apps..."
                  className="w-full py-2 px-4 pl-10 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <Search size={18} />
                </div>
                {searchTerm && (
                  <button 
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchTerm('')}
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              
              {/* Nav Links */}
              <div className="flex items-center space-x-6">
                <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">
                  Pricing
                </Link>
                <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
                  Log in
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  Sign up
                </Link>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Search - Always visible */}
          <div className="md:hidden mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search apps..."
                className="w-full py-2 px-4 pl-10 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <Search size={18} />
              </div>
              {searchTerm && (
                <button 
                  className="absolute right-3 top-2.5 text-gray-400"
                  onClick={() => setSearchTerm('')}
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="/pricing" 
                  className="text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/login" 
                  className="text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Log in
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium my-2"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Sign up
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
      
      <main className="container mx-auto p-4 max-w-6xl">
        {children}
      </main>
    </div>
  );
}