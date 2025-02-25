"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categories, getAppsByCategory, getSlug } from '@/app/data/appData';
import Layout from '@/components/Layout';
import AppIcon from '@/components/AppIcon';

export default function CategoryPage({ params }) {
  const { category } = params;
  const [categoryName, setCategoryName] = useState('All');
  const [categoryApps, setCategoryApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the category by slug
    let selectedCategory = 'All';
    if (category !== 'all') {
      const found = categories.find(cat => getSlug(cat.name) === category);
      if (found) selectedCategory = found.name;
    }
    
    setCategoryName(selectedCategory);
    setCategoryApps(getAppsByCategory(selectedCategory));
    setLoading(false);
  }, [category]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </Link>
      </div>

      <h2 className="text-2xl font-medium mb-6 text-gray-900 pl-2">
        {categoryName === 'All' ? 'All Categories' : `${categoryName} Apps`}
      </h2>

      {/* Display all categories when on the all-categories page */}
      {category === 'all' && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {categories.filter(cat => cat.name !== 'All').map(cat => (
            <Link 
              key={cat.name}
              href={`/category/${getSlug(cat.name)}`}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow transition-shadow flex items-center"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <span className="w-8 h-8" dangerouslySetInnerHTML={{ __html: cat.icon }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{cat.name}</h2>
                <p className="text-gray-600 text-sm">
                  {getAppsByCategory(cat.name).length} Apps
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Display apps for a specific category */}
      {category !== 'all' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
          {categoryApps.map(app => (
            <AppIcon key={app.id} app={app} />
          ))}
        </div>
      )}

      {category !== 'all' && categoryApps.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg">No apps found in this category.</p>
          <Link href="/" className="mt-4 text-blue-600 hover:underline">
            Return to all apps
          </Link>
        </div>
      )}
    </Layout>
  );
}