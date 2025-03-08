// "use client";

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { apps, categories } from '@/app/data/appData';
// import Layout from '@/components/Layout';
// import AppIcon from '@/components/AppIcon';

// export default function Home() {
//   const [filteredApps, setFilteredApps] = useState(apps);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Filter apps based on category
//   useEffect(() => {
//     let result = [...apps];
    
//     if (selectedCategory !== 'All') {
//       result = result.filter(app => app.category === selectedCategory);
//     }
    
//     setFilteredApps(result);
//   }, [selectedCategory]);

//   return (
//     <Layout>
//       {/* Minimal Hero Section */}
//       <section className="py-8 relative overflow-hidden">
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center max-w-3xl mx-auto">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
//               Your Ultimate App Store
//             </h1>
            
//             <p className="text-lg text-gray-600 mb-6">
//               Discover the best tools and apps to supercharge your productivity
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Categories Row */}
//       <section className="mb-6" id="apps">
//         <div className="flex justify-center">
//           <div className="flex overflow-x-auto py-2 hide-scrollbar">
//             <div className="flex space-x-2 px-4">
//               {categories.map(category => (
//                 <button 
//                   key={category.name} 
//                   onClick={() => setSelectedCategory(category.name)}
//                   className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${
//                     selectedCategory === category.name 
//                       ? 'bg-blue-600 text-white' 
//                       : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'
//                   }`}
//                 >
//                   <span className="w-5 h-5 mr-2" dangerouslySetInnerHTML={{ __html: category.icon }} />
//                   <span className="font-medium">{category.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Apps Grid */}
//       <section className="px-4">
//         <h2 className="text-2xl font-medium mb-6 text-gray-900">
//           {selectedCategory === 'All' ? 'All Apps' : `${selectedCategory} Apps`}
//         </h2>
        
//         {filteredApps.length === 0 ? (
//           <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <p className="text-gray-600 text-lg">No apps found in this category.</p>
//             <button 
//               onClick={() => setSelectedCategory('All')}
//               className="mt-4 text-blue-600 hover:underline"
//             >
//               View all apps
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {filteredApps.map(app => (
//               <AppIcon key={app.id} app={app} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* View All Categories Button */}
//       <section className="mt-12 mb-8 text-center">
//         <Link 
//           href="/category/all"
//           className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200"
//         >
//           View All Categories
//         </Link>
//       </section>
//     </Layout>
//   );
// }
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { apps, categories } from '@/app/data/appData';
import Layout from '@/components/Layout';
import AppIcon from '@/components/AppIcon';
import { Search } from 'lucide-react';

export default function Home() {
  const [filteredApps, setFilteredApps] = useState(apps);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Filter apps based on category and search query
  useEffect(() => {
    let result = [...apps];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(app => app.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(app => 
        app.name.toLowerCase().includes(query) || 
        app.description.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredApps(result);
  }, [selectedCategory, searchQuery]);

  // Modal for submitting new AI app
  const SubmitAppModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={() => setShowSubmitModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Submit Your AI App</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">App Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your AI app name" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md h-24" placeholder="Describe what your AI app does"></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {categories.filter(cat => cat.name !== 'All').map(category => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">App URL</label>
            <input type="url" className="w-full p-2 border border-gray-300 rounded-md" placeholder="https://yourai.app" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">App Icon/Logo</label>
            <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-500">Drop your icon here or <span className="text-blue-600">browse</span></p>
              <input type="file" className="hidden" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="email@example.com" />
          </div>
          
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200">
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              AI App Discovery Platform
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Find, explore, and share the most innovative AI tools and applications
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search AI tools, chatbots, generators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setShowSubmitModal(true)}
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-full transition duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Submit Your AI App
              </button>
              <a 
                href="#trending" 
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-full transition duration-200"
              >
                Trending AI Apps
              </a>
            </div>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>
      
      {/* Categories Row */}
      <section className="mt-8 mb-6" id="apps">
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
      
      {/* Trending Section */}
      <section className="px-4 py-8" id="trending">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Trending AI Apps
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {apps.slice(0, 5).map(app => (
            <AppIcon key={app.id} app={app} trending />
          ))}
        </div>
      </section>
      
      {/* Apps Grid */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          {selectedCategory === 'All' ? 'All AI Apps' : `${selectedCategory} AI Apps`}
          {searchQuery && ` matching "${searchQuery}"`}
        </h2>
        {filteredApps.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600 text-lg">No AI apps found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              View all AI apps
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredApps.map(app => (
              <AppIcon key={app.id} app={app} />
            ))}
          </div>
        )}
      </section>
      
      {/* Call to Action */}
      <section className="mt-12 mb-8 bg-gray-100 py-12 px-4 rounded-2xl mx-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have an Amazing AI App?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our growing collection of innovative AI tools and applications. 
            Submit your app for review and reach thousands of AI enthusiasts.
          </p>
          <button
            onClick={() => setShowSubmitModal(true)}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Submit Your AI App
          </button>
        </div>
      </section>
      
      {/* Submit App Modal */}
      {showSubmitModal && <SubmitAppModal />}
    </Layout>
  );
}