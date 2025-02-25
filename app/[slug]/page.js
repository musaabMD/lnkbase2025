"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';
import AppIcon from '@/components/AppIcon';
import { 
  getAppBySlug, 
  spreadsheetData, 
  getSlug,
  apps as allApps
} from '@/app/data/appData';

export default function AppPage({ params }) {
  const { slug } = params;
  const [app, setApp] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!slug) return;
    
    // Find the app by slug
    const foundApp = getAppBySlug(slug);
    
    if (foundApp) {
      // Get spreadsheet data using the app ID
      const appId = foundApp.id;
      const foundData = spreadsheetData[appId] || [];
      
      // Simulate API delay
      setTimeout(() => {
        setApp(foundApp);
        setData(foundData);
        setLoading(false);
      }, 300);
    } else {
      setLoading(false);
    }
  }, [slug]);

  // Handle non-existent app
  if (!loading && !app) {
    return (
      <Layout title="App Not Found">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-red-500 mb-4">App Not Found</h1>
          <p className="mb-6">The app you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-200"
          >
            Back to App Store
          </button>
        </div>
      </Layout>
    );
  }

  // Loading state
  if (loading) {
    return (
      <Layout title="Loading...">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={app.name}>
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Apps
        </Link>
      </div>

      {/* App Header */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
        <div className="p-6">
          <div className="flex flex-col md:flex-row">
            {/* App Icon */}
            <div className="flex justify-center md:justify-start mb-4 md:mb-0">
              <AppIcon app={app} clickable={false} />
            </div>
            
            {/* App Details */}
            <div className="md:ml-6 md:flex-1">
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold">{app.name}</h1>
                <p className="text-gray-600 mt-2">{app.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {app.category}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                    Spreadsheet
                  </span>
                </div>
              </div>
              
              <div className="mt-6 text-center md:text-left">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-200"
                  onClick={() => alert('Launch fullscreen app')}
                >
                  Launch App
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Content */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Spreadsheet Preview</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                {data[0] && data[0].map((_, index) => (
                  <th key={index} className="border border-gray-300 p-2 text-left text-sm font-semibold text-gray-700">
                    {String.fromCharCode(65 + index)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td 
                      key={cellIndex}
                      className="border border-gray-300 p-2 text-sm"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Related Apps */}
      <div className="mt-12">
        <h2 className="text-xl font-medium mb-6 text-gray-900 pl-2">Similar Apps</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
          {allApps
            .filter(a => a.id !== app.id && a.category === app.category)
            .slice(0, 6)
            .map(relatedApp => (
              <AppIcon key={relatedApp.id} app={relatedApp} />
            ))}
        </div>
      </div>
    </Layout>
  );
}