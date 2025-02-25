"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import { getAppBySlug, spreadsheetData } from '@/app/data/appData';

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
          <p className="mb-6">The app you{"'"}re looking for doesn{"'"}t exist.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Back to Apps
          </button>
        </div>
      </Layout>
    );
  }

  // Loading state
  if (loading) {
    return (
      <Layout title="Loading...">
        <div className="text-center py-10">
          <p>Loading app...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={app.name}>
      <h1 className="text-2xl font-bold mb-2">{app.name}</h1>
      <p className="text-gray-600 mb-6">{app.description}</p>
      <div className="spreadsheet-container bg-white p-4 border rounded">
        <div className="p-4">
          <table className="w-full border-collapse">
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 p-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => alert("Save functionality would be implemented with a backend")}
          >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
}