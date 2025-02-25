"use client";

import React from 'react';
import Header from './Header';

export default function Layout({ children, title = 'Spreadsheet Apps' }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="border-t mt-8 py-4 text-center text-gray-500">
        <p>© 2025 Spreadsheet App</p>
      </footer>
    </div>
  );
}