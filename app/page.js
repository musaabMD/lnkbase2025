"use client";

import Layout from '@/components/Layout';
import AppList from '@/components/AppList';
import { apps } from '@/app/data/appData';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Your Spreadsheet Apps</h1>
      <AppList apps={apps} />
      
      <div className="mt-8">
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => alert('Create functionality would be implemented with a backend')}
        >
          Create New App
        </button>
      </div>
    </Layout>
  );
}