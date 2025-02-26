"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { apps, categories } from '@/app/data/appData';
import Layout from '@/components/Layout';
import AppIcon from '@/components/AppIcon';

export default function Home() {
  const [filteredApps, setFilteredApps] = useState(apps);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter apps based on category
  useEffect(() => {
    let result = [...apps];
    
    if (selectedCategory !== 'All') {
      result = result.filter(app => app.category === selectedCategory);
    }
    
    setFilteredApps(result);
  }, [selectedCategory]);

  return (
    <Layout>
      {/* Minimal Hero Section */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Your Ultimate App Store
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Discover the best tools and apps to supercharge your productivity
            </p>
          </div>
        </div>
      </section>

      {/* Categories Row */}
      <section className="mb-6" id="apps">
        <div className="flex justify-center">
          <div className="flex overflow-x-auto py-2 hide-scrollbar">
            <div className="flex space-x-2 px-4">
              {categories.map(category => (
                <button 
                  key={category.name} 
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category.name 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <span className="w-5 h-5 mr-2" dangerouslySetInnerHTML={{ __html: category.icon }} />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="px-4">
        <h2 className="text-2xl font-medium mb-6 text-gray-900">
          {selectedCategory === 'All' ? 'All Apps' : `${selectedCategory} Apps`}
        </h2>
        
        {filteredApps.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600 text-lg">No apps found in this category.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-blue-600 hover:underline"
            >
              View all apps
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredApps.map(app => (
              <AppIcon key={app.id} app={app} />
            ))}
          </div>
        )}
      </section>

      {/* View All Categories Button */}
      <section className="mt-12 mb-8 text-center">
        <Link 
          href="/category/all"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200"
        >
          View All Categories
        </Link>
      </section>
    </Layout>
  );
}