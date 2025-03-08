// "use client";

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Layout from '@/components/Layout';
// import AppIcon from '@/components/AppIcon';
// import { 
//   getAppBySlug, 
//   spreadsheetData,
//   apps as allApps
// } from '@/app/data/appData';
// import { CheckCircle, Star, Shield, ArrowRight } from 'lucide-react';

// export default function AppPage({ params }) {
//   const { slug } = params;
//   const [app, setApp] = useState(null);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     if (!slug) return;
    
//     // Find the app by slug
//     const foundApp = getAppBySlug(slug);
    
//     if (foundApp) {
//       // Get spreadsheet data using the app ID
//       const appId = foundApp.id;
//       const foundData = spreadsheetData[appId] || [];
      
//       setTimeout(() => {
//         setApp(foundApp);
//         setData(foundData);
//         setLoading(false);
//       }, 300);
//     } else {
//       setLoading(false);
//     }
//   }, [slug]);

//   // Handle non-existent app
//   if (!loading && !app) {
//     return (
//       <Layout title="App Not Found">
//         <div className="text-center py-10">
//           <h1 className="text-3xl font-bold text-red-500 mb-4">App Not Found</h1>
//           <p className="mb-6">The app you&apos;re looking for doesn&apos;t exist.</p>
//           <button
//             onClick={() => router.push('/')}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-200"
//           >
//             Back to App Store
//           </button>
//         </div>
//       </Layout>
//     );
//   }

//   // Loading state
//   if (loading) {
//     return (
//       <Layout title="Loading...">
//         <div className="flex justify-center items-center py-20">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout title={app.name}>
//       {/* Back to Store Link */}
//       <div className="container mx-auto px-4 py-4">
//         <Link href="/" className="flex items-center text-gray-700 hover:text-blue-600 transition">
//           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//           <span className="font-medium">Back to Store</span>
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-b from-[#F9FAFB] to-white pt-20 pb-32 overflow-hidden">
//         <div className="container mx-auto px-4">
//           {/* Top Content */}
//           <div className="text-center max-w-4xl mx-auto mb-16">
//             <div className="flex items-center justify-center space-x-3 mb-8">
//               <div 
//                 className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center"
//                 style={{ background: app.bgColor }}
//               >
//                 <div className="w-8 h-8 text-white">
//                   {app.iconSvg ? (
//                     <div dangerouslySetInnerHTML={{ __html: app.iconSvg }} />
//                   ) : (
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
//                       <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
//                       <polyline points="14 2 14 8 20 8" />
//                       <line x1="16" y1="13" x2="8" y2="13" />
//                       <line x1="16" y1="17" x2="8" y2="17" />
//                       <polyline points="10 9 9 9 8 9" />
//                     </svg>
//                   )}
//                 </div>
//               </div>
//               <span className="bg-gray-900 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
//                 {app.category}
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//               {app.name}
//             </h1>
            
//             <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
//               {app.description}
//             </p>

//             <div className="flex items-center justify-center space-x-4 mb-12">
//               <button 
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition duration-200 font-semibold text-lg inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
//                 onClick={() => alert('Launch app')}
//               >
//                 Get Started Free
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
              
//               <div className="flex items-center bg-white px-6 py-3 rounded-xl shadow-md">
//                 <div className="flex -space-x-2 mr-3">
//                   {[1, 2, 3].map(i => (
//                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
//                   ))}
//                 </div>
//                 <div className="text-left">
//                   <div className="flex items-center">
//                     {[1, 2, 3, 4, 5].map(i => (
//                       <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <span className="text-sm text-gray-600 font-medium">
//                     200+ reviews · 175k+ users
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center space-x-12 text-gray-600">
//               <div className="flex items-center">
//                 <Shield className="h-5 w-5 text-green-500 mr-2" />
//                 <span>Enterprise Security</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                 <span>24/7 Support</span>
//               </div>
//               <div className="flex items-center">
//                 <Star className="h-5 w-5 text-green-500 mr-2" />
//                 <span>4.9/5 Rating</span>
//               </div>
//             </div>
//           </div>

//           {/* App Preview */}
//           <div className="relative max-w-5xl mx-auto">
//             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
//             <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
//               <div className="relative">
//                 {/* Browser-like top bar */}
//                 <div className="bg-gray-100 px-4 py-3 flex items-center border-b border-gray-200">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
//                   </div>
//                 </div>
                
//                 {/* App Content */}
//                 <div className="p-6">
//                   <table className="w-full border-collapse text-gray-800">
//                     <thead>
//                       <tr className="bg-gray-50">
//                         {data[0] && data[0].map((_, index) => (
//                           <th key={index} className="border border-gray-200 p-3 text-left text-sm font-semibold">
//                             {String.fromCharCode(65 + index)}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {data.slice(0, 4).map((row, rowIndex) => (
//                         <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                           {row.map((cell, cellIndex) => (
//                             <td 
//                               key={cellIndex}
//                               className="border border-gray-200 p-3 text-sm"
//                             >
//                               {cell}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Background Elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
//           <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
//         </div>
//       </section>

//       {/* Powerful Features Section */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-4xl font-bold mb-6 text-gray-900">Powerful Features</h2>
//             <p className="text-xl text-gray-600">
//               Everything you need to manage and analyze your data efficiently
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300">
//               <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
//                 <CheckCircle className="h-7 w-7 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Real-time Collaboration</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Work together with your team in real-time. Changes sync instantly across all devices.
//               </p>
//             </div>
            
//             <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300">
//               <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
//                 <Shield className="h-7 w-7 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Enterprise Security</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Bank-grade encryption and advanced security measures to protect your sensitive data.
//               </p>
//             </div>
            
//             <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300">
//               <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
//                 <Star className="h-7 w-7 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Analytics</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Get deep insights into your data with powerful analytics and reporting tools.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-4xl font-bold mb-6 text-gray-900">How It Works</h2>
//             <p className="text-xl text-gray-600">
//               Get started in minutes with our simple and intuitive workflow
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
//             <div className="relative">
//               <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10">
//                 <img src="/screenshot1.png" alt="Setup" className="rounded-lg mb-6 w-full" />
//                 <h3 className="text-xl font-bold mb-3 text-gray-900">1. Quick Setup</h3>
//                 <p className="text-gray-600">Sign up and connect your data sources in just a few clicks.</p>
//               </div>
//               <div className="absolute top-1/2 left-full w-24 h-px bg-gray-300 hidden md:block"></div>
//             </div>

//             <div className="relative">
//               <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10">
//                 <img src="/screenshot2.png" alt="Customize" className="rounded-lg mb-6 w-full" />
//                 <h3 className="text-xl font-bold mb-3 text-gray-900">2. Customize</h3>
//                 <p className="text-gray-600">Tailor the interface and workflows to match your needs.</p>
//               </div>
//               <div className="absolute top-1/2 left-full w-24 h-px bg-gray-300 hidden md:block"></div>
//             </div>

//             <div className="relative">
//               <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10">
//                 <img src="/screenshot3.png" alt="Collaborate" className="rounded-lg mb-6 w-full" />
//                 <h3 className="text-xl font-bold mb-3 text-gray-900">3. Collaborate</h3>
//                 <p className="text-gray-600">Invite your team and start working together seamlessly.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Use Cases Section */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-4xl font-bold mb-6 text-gray-900">Use Cases</h2>
//             <p className="text-xl text-gray-600">
//               Trusted by teams of all sizes across various industries
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
//                   <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">For Startups</h3>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-center text-gray-600">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Quick setup and deployment</span>
//                 </li>
//                 <li className="flex items-center text-gray-600">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Scalable infrastructure</span>
//                 </li>
//                 <li className="flex items-center text-gray-600">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Cost-effective solution</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
//                   <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">For Enterprise</h3>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-center text-gray-600">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Advanced security features</span>
//                 </li>
//                 <li className="flex items-center text-gray-600">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Custom integrations</span>
//                 </li>
//                 <li className="flex items-center text-gray-600">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Dedicated support</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
//                   <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">For Teams</h3>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-center text-gray-600">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Real-time collaboration</span>
//                 </li>
//                 <li className="flex items-center text-gray-600">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Team management</span>
//                 </li>
//                 <li className="flex items-center text-gray-600">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                   <span>Workflow automation</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Features</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Everything you need to manage and analyze your data efficiently.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 mt-1">
//                   <CheckCircle className="h-6 w-6 text-green-500" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-xl font-bold mb-2">Capture Screenshots</h3>
//                   <p className="text-gray-600">Quickly capture and annotate screenshots to highlight bugs and issues.</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 mt-1">
//                   <CheckCircle className="h-6 w-6 text-green-500" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-xl font-bold mb-2">Record Sessions</h3>
//                   <p className="text-gray-600">Record browser tabs or entire desktop to provide complete context.</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 mt-1">
//                   <CheckCircle className="h-6 w-6 text-green-500" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-xl font-bold mb-2">Instant Replay</h3>
//                   <p className="text-gray-600">Capture the last 30 seconds of activity to document unexpected issues.</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 mt-1">
//                   <CheckCircle className="h-6 w-6 text-green-500" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-xl font-bold mb-2">One-Click Sharing</h3>
//                   <p className="text-gray-600">Instantly share reports with your team through integrations with popular tools.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Preview Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Preview</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               See the app in action before you start.
//             </p>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-sm p-6 overflow-hidden max-w-5xl mx-auto">
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50">
//                     {data[0] && data[0].map((_, index) => (
//                       <th key={index} className="border border-gray-300 p-3 text-left text-sm font-semibold text-gray-700">
//                         {String.fromCharCode(65 + index)}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.map((row, rowIndex) => (
//                     <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                       {row.map((cell, cellIndex) => (
//                         <td 
//                           key={cellIndex}
//                           className="border border-gray-300 p-3 text-sm"
//                         >
//                           {cell}
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* App Screenshots Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-xl text-gray-600">Discover the powerful features that make our app unique</p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <img src="/screenshot1.png" alt="Feature 1" className="rounded-lg mb-6 w-full" />
//               <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
//               <p className="text-gray-600">Connect and sync your data across all your favorite tools effortlessly.</p>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <img src="/screenshot2.png" alt="Feature 2" className="rounded-lg mb-6 w-full" />
//               <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
//               <p className="text-gray-600">Get deep insights into your data with powerful analytics tools.</p>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <img src="/screenshot3.png" alt="Feature 3" className="rounded-lg mb-6 w-full" />
//               <h3 className="text-xl font-bold mb-2">Real-time Collaboration</h3>
//               <p className="text-gray-600">Work together with your team in real-time, anywhere in the world.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Apps */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
//             {allApps
//               .filter(a => a.id !== app.id && a.category === app.category)
//               .slice(0, 6)
//               .map(relatedApp => (
//                 <AppIcon key={relatedApp.id} app={relatedApp} />
//               ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Star, 
  ChevronDown, 
  ChevronRight, 
  Check,
  ArrowRight,
  Search,
  Book,
  Moon,
  Globe,
  FileText,
  MessageCircle,
  Copy,
  Download,
  Inbox,
  Menu,
  X,
  CheckCircle,
  Shield,
  Users,
  Activity,
  Lock,
  Zap,
  BarChart2
} from 'lucide-react';

// Header Component
const Header = ({ app }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <div 
                className="w-10 h-10 rounded-lg shadow-md flex items-center justify-center mr-3"
                style={{ background: app?.bgColor || '#4F46E5' }}
              >
                <div className="w-5 h-5 text-white">
                  {app?.iconSvg ? (
                    <div dangerouslySetInnerHTML={{ __html: app.iconSvg }} />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="font-bold text-xl text-gray-900">{app?.name || 'Jenni AI'}</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="font-medium text-gray-600 hover:text-indigo-600 transition">Features</a>
              <a href="#how-it-works" className="font-medium text-gray-600 hover:text-indigo-600 transition">How It Works</a>
              <a href="#testimonials" className="font-medium text-gray-600 hover:text-indigo-600 transition">Testimonials</a>
              <a href="#pricing" className="font-medium text-gray-600 hover:text-indigo-600 transition">Pricing</a>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 font-medium hover:text-indigo-600 transition">
              Log in
            </button>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition shadow-md hover:shadow-lg">
              Start Free Trial
            </button>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#features" className="py-2 font-medium text-gray-800 hover:text-indigo-600">Features</a>
            <a href="#how-it-works" className="py-2 font-medium text-gray-800 hover:text-indigo-600">How It Works</a>
            <a href="#testimonials" className="py-2 font-medium text-gray-800 hover:text-indigo-600">Testimonials</a>
            <a href="#pricing" className="py-2 font-medium text-gray-800 hover:text-indigo-600">Pricing</a>
            <div className="pt-4 flex flex-col space-y-4">
              <button className="w-full py-3 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                Log in
              </button>
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition shadow-md">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default function ResearchAssistantApp({ app }) {
  const [activeTab, setActiveTab] = useState('all');
  const [annualBilling, setAnnualBilling] = useState(true);
  const router = useRouter();
  
  // Default values if app data isn't provided
  const defaultAppData = {
    name: "Intelligent Research Assistant",
    description: "The AI-powered workspace to help you read, write, and organize research with ease.",
    tagline: "Meet Your Intelligent Research Assistant",
    category: "Research",
    bgColor: "#4F46E5",
    features: [
      {
        title: "In-text Citations",
        description: "Jenni consults the latest research and your PDF uploads. Cite in over 1.7k citation styles"
      },
      {
        title: "AI Autocomplete",
        description: "Autocomplete will write alongside you to beat writer's block whenever you need a helping hand"
      }
    ]
  };
  
  // Use app data if provided, otherwise use defaults
  const appData = app || defaultAppData;
  
  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <Header app={appData} />
      
      {/* App Icon Above Hero */}
      <div className="container mx-auto px-4 pt-8 flex justify-center">
        <div 
          className="w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center"
          style={{ background: appData.bgColor }}
        >
          <div className="w-10 h-10 text-white">
            {appData.iconSvg ? (
              <div dangerouslySetInnerHTML={{ __html: appData.iconSvg }} />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            )}
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-serif mb-6 font-medium leading-tight">
              {appData.tagline || "Meet Your Intelligent Research Assistant"}
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              {appData.description}
            </p>
            
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium text-lg mb-8 hover:bg-indigo-700 transition-colors">
              Start writing — it's free
            </button>
            
            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              </div>
              <span>Loved by over 4 million academics</span>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-white border-b border-gray-200 p-3 flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1">
                <div className="mx-auto w-64 h-6 bg-gray-100 rounded-md"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-4">
              <div className="col-span-1 bg-gray-50 p-4 border-r border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-2 bg-gray-200 rounded-md">
                    <Search className="h-4 w-4 text-gray-500" />
                    <div className="h-3 w-24 bg-gray-300 rounded"></div>
                  </div>
                  
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center space-x-2 p-1.5">
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="h-3 w-20 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2 p-1.5">
                      <div className="w-4 h-4 rounded-full bg-indigo-300"></div>
                      <div className="h-3 w-24 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2 p-1.5">
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="h-3 w-16 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-3 p-5">
                <div className="border-b border-gray-200 pb-3 mb-3">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="h-6 w-64 bg-gray-100 rounded"></div>
                      <div className="h-4 w-40 bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="h-4 w-full bg-gray-100 rounded"></div>
                  <div className="h-4 w-full bg-gray-100 rounded"></div>
                  <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-white rounded"></div>
                    <div className="h-4 w-full bg-white rounded"></div>
                    <div className="h-4 w-3/4 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-indigo-600 font-medium mb-2">POWERFUL FEATURES</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 font-medium">Write, cite, and edit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Features built to enhance your research and writing capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6 space-y-2">
                <div className="mb-4">
                  <div className="flex space-x-2 mb-2">
                    <button className={`text-sm py-1 px-3 rounded-full ${activeTab === 'all' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}>
                      All
                    </button>
                    <button className={`text-sm py-1 px-3 rounded-full ${activeTab === 'library' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}>
                      Library
                    </button>
                  </div>
                  <button className="text-sm py-1 px-3 border border-gray-200 rounded-md text-gray-600">
                    Since 2022
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">Exploring the Role of Neural Networks in Natural Language Processing: A Comprehensive Survey</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Bähr LS, Bock M, Liebscher D, Bellmann-Strobl J, Franz L, Prüß A et al.
                      </p>
                      <p className="text-sm text-gray-500">
                        Nature Science 2023
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    Interactions between the ribosomal exit tunnel and the nascent peptide can affect translation elongation rates. While previous studies have already demonstrated the feasibility of such interactions, little is known about the nature ...
                    <button className="text-indigo-600 text-sm font-medium">See more</button>
                  </p>
                  
                  <div className="flex items-center space-x-2 text-indigo-600">
                    <button className="text-sm font-medium flex items-center">
                      <span className="mr-1">+</span> Add citation
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Implications of Climate Change</h3>
                <p className="text-gray-600 mb-4">
                  Due to their long atmospheric lifetimes and high warming potentials fluorinated gases contribute significantly to climate change. Efforts have been made to reduce the emissions of these gases through the implementation of international agreements and regulations.
                </p>
                <p className="text-gray-600 mb-4">
                  The Kigali Amendment to the Montreal Protocol, for example, aims to phase down the production of HFCs.
                </p>
                
                <div className="flex items-center space-x-2 mt-6">
                  <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center">
                    Accept <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  <button className="text-gray-600 px-3 py-1.5 text-sm flex items-center">
                    Customize <span className="ml-1 text-xs border rounded px-1">⌘</span> <span className="text-xs border rounded px-1">J</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {appData.features && appData.features.length > 0 ? (
              appData.features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-serif font-medium mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-2">{feature.description}</p>
                </div>
              ))
            ) : (
              <>
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-3">In-text Citations</h3>
                  <p className="text-gray-600 mb-2">
                    Jenni consults the latest research and your PDF uploads. Cite in over 1.7k citation styles
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-3">AI Autocomplete</h3>
                  <p className="text-gray-600 mb-2">
                    Autocomplete will write alongside you to beat writer's block whenever you need a helping hand
                  </p>
                </div>
              </>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <div className="mb-3">
                <MessageCircle className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-3">Chat to Your Research</h3>
              <p className="text-gray-600">
                Quickly understand and summarize your research papers with our AI chat assistant
              </p>
            </div>
            
            <div>
              <div className="mb-3">
                <FileText className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-3">Generate From Your Files</h3>
              <p className="text-gray-600">
                Bring your research papers to life with source-based generation
              </p>
            </div>
            
            <div>
              <div className="mb-3 flex items-center">
                <Moon className="h-6 w-6 text-gray-800" />
                <span className="ml-2 text-xs font-medium px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">NEW</span>
              </div>
              <h3 className="text-2xl font-serif font-medium mb-3">Dark Mode</h3>
              <p className="text-gray-600">
                Conducting late night research? Full dark mode support helps reduce eye strain
              </p>
            </div>
            
            <div>
              <div className="mb-3">
                <Globe className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-3">Multilingual Support</h3>
              <p className="text-gray-600">
                Jenni can generate in 30 languages including US or British English, Spanish, German, French, or Chinese
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-3">
                <Book className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-3">Reference Management</h3>
              <p className="text-gray-600">
                Save and manage research in your library. Easily cite research in any document, fast
              </p>
            </div>
            
            <div>
              <div className="mb-3 flex items-center">
                <FileText className="h-6 w-6 text-gray-800" />
                <span className="ml-2 text-xs font-medium px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">NEW</span>
              </div>
              <h3 className="text-2xl font-serif font-medium mb-3">1,700+ Citation Styles</h3>
              <p className="text-gray-600">
                Cite every paper correctly in the style required by your University or target journal
              </p>
            </div>
            
            <div>
              <div className="mb-3">
                <Copy className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-3">Paraphrase & Rewrite</h3>
              <p className="text-gray-600">
                Paraphrase any text in any tone. Rewrite the internet customized to you
              </p>
            </div>
            
            <div>
              <div className="mb-3">
                <Download className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-2xl font-serif font-medium mb-3">Bulk Import Sources via .bib</h3>
              <p className="text-gray-600">
                Already saved papers ready to cite? Import a .bib to populate your library in seconds
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Assistant Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-indigo-600 font-medium mb-2">AI ASSISTANT</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 font-medium">Never write alone</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get suggestions whenever you are stuck or expand your notes into full paragraphs
            </p>
            
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium text-lg mb-12 hover:bg-indigo-700 transition-colors">
              Start writing — it's free
            </button>
            
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="flex">
                <div className="w-64 bg-gray-50 p-4 border-r border-gray-200">
                  <div className="flex items-center space-x-1.5 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gray-300 text-xs flex items-center justify-center">A</div>
                    <div className="text-sm font-medium">Anna Schwartz</div>
                    <div className="ml-auto w-5 h-5 bg-gray-200 flex items-center justify-center rounded-full text-xs">1</div>
                  </div>
                  <div className="bg-gray-200 text-sm py-1 px-3 rounded-md mb-4 w-full">
                    <div className="flex items-center">
                      <Search className="h-3 w-3 text-gray-500 mr-2" />
                      <span className="text-gray-500">Search</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-indigo-100 text-sm py-1.5 px-2 rounded text-gray-800">
                      New Document
                    </div>
                    <div className="text-sm py-1.5 px-2">Documents</div>
                    <div className="text-sm py-1.5 px-2 text-gray-600">Understanding the Causes...</div>
                  </div>
                </div>
                
                <div className="flex-1 p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium mb-6">Understanding the Causes and Impacts of Greenhouse Gases</h3>
                    <p className="text-gray-600 mb-3">
                      In this document, we will explore the topic of greenhouse gases and their impact on the environment. Greenhouse gases are gases in the Earth's atmosphere that trap heat and contribute to the greenhouse effect. This effect plays a significant role in regulating the Earth's temperature (A. Souviakji, 2019).
                    </p>
                    <div className="py-2 px-4 bg-indigo-50 border border-indigo-100 rounded-lg flex justify-between items-center">
                      <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center">
                        Accept <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span className="mr-2">See Alternative</span>
                        <span className="text-xs border rounded px-1 mr-1">⌘</span>
                        <span className="text-xs border rounded px-1">J</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center mb-1">
                          <div className="text-sm font-medium mr-2">Sources</div>
                          <div className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600">All sources selected</div>
                        </div>
                        <button className="text-xs text-indigo-600 font-medium">UNSELECT</button>
                      </div>
                      <div className="flex">
                        <button className="mr-2 text-sm px-3 py-0.5 border border-gray-200 rounded">Collections</button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start p-3 border border-gray-200 rounded-lg">
                        <div className="mr-3">
                          <input type="checkbox" className="w-4 h-4 rounded" checked />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium mb-1">The History and Evolution of Human Rights: A Comparative Study</h4>
                          <p className="text-xs text-gray-600 mb-1">Rodriguez et al.</p>
                          <p className="text-xs text-gray-500">Journal of Environmental Ethics, 2020</p>
                          <div className="flex items-center mt-2 text-xs">
                            <button className="flex items-center mr-2 text-gray-500">
                              <span className="mr-1">+</span> Cite
                            </button>
                            <button className="flex items-center text-gray-500">
                              <span className="mr-1">↗</span> View
                            </button>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-indigo-600 font-medium mb-2">CUSTOMER LOVE</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 font-medium">Join 4 million empowered writers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jenni has helped write over 970 million words. From academic essays, journals, to top-ranking blog posts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <div className="font-medium mb-1">Owdy</div>
                  <div className="text-sm text-gray-500">@Hadeel_Naily · 16 Jan</div>
                </div>
                <div className="ml-auto text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-800">
                A major shoutout to Jenni AI for straight up saving my life ❤️
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <div className="font-medium mb-1">Rosh</div>
                  <div className="text-sm text-gray-500">@sonofgorkahli · 23 Aug</div>
                </div>
                <div className="ml-auto text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-800">
                I started with Jenni-who & Jenni-what. But now I can't write without Jenni. I love Jenni AI and am amazed to see how far Jenni has come. Kudos to Jenni.AI team
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <div className="font-medium mb-1">Gachoki</div>
                  <div className="text-sm text-gray-500">@gachoki_munene · 1 Aug</div>
                </div>
                <div className="ml-auto text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-800">
                This one is a game changer, Doc, especially on that small matter of lacking words or writer's block. I am definitely introducing it to my students asap.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <div className="font-medium mb-1">Andy Tom</div>
                  <div className="text-sm text-gray-500">@andytomtweets · 18 Oct</div>
                </div>
                <div className="ml-auto text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-800">
                I thought ChatGPT was a good writing assistant. But when I found Jenni AI - it blew my mind. It's 10x more advanced than I thought.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <div className="font-medium mb-1">Rahul</div>
                  <div className="text-sm text-gray-500">@sairahuil · 25 Jul</div>
                </div>
                <div className="ml-auto text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-800">
                Jenni is perfect for writing research docs, SOPs, study projects presentations 👌
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <div className="font-medium mb-1">Mushtaq</div>
                  <div className="text-sm text-gray-500">@Mushtaq_Bilal · 25 Mar</div>
                </div>
                <div className="ml-auto text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-800">
                Jenni, the AI assistant for academic writing, just got BETTER and SMARTER.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <div className="text-indigo-600 font-medium mb-2">SUPPORT</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 font-medium">Your questions, answered</h2>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-5">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium">Which AI models does Jenni use?</h3>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium">What are citations?</h3>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium">Is Jenni multilingual?</h3>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium">Is there mobile support?</h3>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium">Does Jenni plagiarize?</h3>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 font-medium">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600 mb-10">
              No credit card required, cancel anytime
            </p>
            
            <div className="flex justify-center items-center space-x-4 mb-12">
              <button className={`px-4 py-2 rounded-full text-sm ${!annualBilling ? 'bg-white text-gray-700 shadow-sm' : 'text-gray-500'}`} onClick={() => setAnnualBilling(false)}>
                Monthly
              </button>
              <button className={`px-4 py-2 rounded-full text-sm ${annualBilling ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500'}`} onClick={() => setAnnualBilling(true)}>
                Annual
              </button>
              <div className="text-sm font-medium text-amber-600">
                Save 60%
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="text-left">
                  <h3 className="text-xl font-medium mb-6">Free</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-serif font-medium">$0</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>200 AI words per day</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Unlimited PDF uploads</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>AI Autocomplete</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Journal & web citations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>AI editing commands</span>
                    </li>
                  </ul>
                  
                  <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                    Start for free
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="text-left">
                  <h3 className="text-xl font-medium mb-6">Unlimited</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-serif font-medium">$12</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Unlimited AI words per day</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Unlimited PDF uploads</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>AI Autocomplete</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Journal & web citations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>AI editing commands</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Access to latest features</span>
                    </li>
                  </ul>
                  
                  <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                    Start for free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 font-medium">Try Jenni for free today</h2>
          <p className="text-xl text-gray-600 mb-10">
            Write with Jenni by your side today and never look back.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-indigo-700 transition-colors">
            Start writing — it's free
          </button>
        </div>
      </section>
    </div>
  );
}