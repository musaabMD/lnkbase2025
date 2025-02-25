"use client";

import Link from 'next/link';
import { getSlug } from '@/app/data/appData';

export default function AppList({ apps }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apps.map(app => {
        const slug = getSlug(app.name);
        return (
          <Link 
            href={`/${slug}`} 
            key={app.id}
            className="border bg-white rounded p-4 hover:shadow-md transition-shadow block"
          >
            <h2 className="text-xl font-semibold">{app.name}</h2>
            <p className="text-gray-600 mt-2">{app.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date(app.updatedAt).toLocaleDateString()}
            </p>
          </Link>
        );
      })}
    </div>
  );
}