// // import React from 'react';
// // import { 
// //   Headphones, 
// //   Book, 
// //   Tablet, 
// //   BookOpen, 
// //   Play, 
// //   BookMarked, 
// //   FileText, 
// //   Music, 
// //   Mail, 
// //   ShoppingBag
// // } from 'lucide-react';

// // const IconView = () => {
// //   // Sample app data with iOS App Store style
// //   const iconData = [
// //     { 
// //       id: 1, 
// //       name: 'Audible: Audio Entertainment', 
// //       company: 'Audible, Inc.', 
// //       gradient: 'linear-gradient(145deg, #FFB366, #F6A54C)',
// //       icon: <Headphones size={42} strokeWidth={1.5} color="white" />
// //     },
// //     { 
// //       id: 2, 
// //       name: 'Libby, the library app', 
// //       company: 'OverDrive, Inc.', 
// //       gradient: 'linear-gradient(145deg, #7D3E66, #5D2E46)',
// //       icon: <Book size={42} strokeWidth={1.5} color="white" />
// //     },
// //     { 
// //       id: 3, 
// //       name: 'Amazon Kindle', 
// //       company: 'AMZN Mobile LLC', 
// //       gradient: 'linear-gradient(145deg, #3AA0FF, #1E90FF)',
// //       icon: <Tablet size={42} strokeWidth={1.5} color="white" />
// //     },
// //     { 
// //       id: 4, 
// //       name: 'Goodreads: Book Reviews', 
// //       company: 'Goodreads', 
// //       gradient: 'linear-gradient(145deg, #FFFFF0, #F5F5DC)',
// //       icon: <BookOpen size={42} strokeWidth={1.5} color="#5D4037" />
// //     },
// //     { 
// //       id: 5, 
// //       name: 'hoopla Digital', 
// //       company: 'Midwest Tape, LLC', 
// //       gradient: 'linear-gradient(145deg, #4FA8EB, #3498DB)',
// //       icon: <Play size={42} strokeWidth={1.5} color="white" />
// //     },
// //     { 
// //       id: 6, 
// //       name: 'Bible For Women', 
// //       company: 'PANDAS OF CARIBBEAN', 
// //       gradient: 'linear-gradient(145deg, #FF79C4, #FF69B4)',
// //       icon: <BookMarked size={42} strokeWidth={1.5} color="white" />
// //     },
// //     { 
// //       id: 7, 
// //       name: 'Wattpad - Read & Write Stories', 
// //       company: 'Wattpad Corp', 
// //       gradient: 'linear-gradient(145deg, #FF7357, #FF6347)',
// //       icon: <FileText size={42} strokeWidth={1.5} color="white" />
// //     },
// //     { 
// //       id: 8, 
// //       name: 'The Clear Quran Audiobook', 
// //       company: 'Al Furqaan Foundation', 
// //       gradient: 'linear-gradient(145deg, #2F57A8, #1F4788)',
// //       icon: <Music size={42} strokeWidth={1.5} color="white" />
// //     },
// //     { 
// //       id: 9, 
// //       name: 'Sincerely - Off My Chest', 
// //       company: 'MWM', 
// //       gradient: 'linear-gradient(145deg, #FFFFFF, #F5F5F5)',
// //       icon: <Mail size={42} strokeWidth={1.5} color="#FF6347" />
// //     },
// //     { 
// //       id: 10, 
// //       name: 'Barnes & Noble', 
// //       company: 'Barnes & Noble', 
// //       gradient: 'linear-gradient(145deg, #5C4D4D, #4C3D3D)',
// //       icon: <ShoppingBag size={42} strokeWidth={1.5} color="white" />
// //     },
// //     { 
// //       id: 11, 
// //       name: 'Manga Reader', 
// //       company: 'Manga Reader Apps', 
// //       gradient: 'linear-gradient(145deg, #303030, #000000)',
// //       icon: <Book size={42} strokeWidth={1.5} color="white" />
// //     },
// //     { 
// //       id: 12, 
// //       name: 'KJV Bible Now: Read & Study', 
// //       company: 'Rocketshield Browser', 
// //       gradient: 'linear-gradient(145deg, #9B5523, #8B4513)',
// //       icon: <BookMarked size={42} strokeWidth={1.5} color="white" />
// //     },
// //   ];

// //   return (
// //     <div className="p-4 max-w-6xl mx-auto bg-gray-50">
// //       <h1 className="text-2xl font-medium mb-6 text-gray-900 pl-2">App Store</h1>
// //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
// //         {iconData.map((app) => (
// //           <div key={app.id} className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer">
// //             <div 
// //               className="w-20 h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md"
// //               style={{ background: app.gradient }}
// //             >
// //               {app.icon}
// //             </div>
// //             <div className="w-full px-1">
// //               <div className="font-medium text-sm text-gray-900 truncate">{app.name}</div>
// //               <div className="text-xs text-gray-500 truncate">{app.company}</div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default function Preview() {
// //   return <IconView />;
// // }
// "use client"
// import React, { useState } from 'react';

// // Lucide-style icons
// const Building2 = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <rect x="3" y="8" width="18" height="12" rx="2" />
//     <path d="M7 20V8M17 20V8M3 14h18M7 8v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
//   </svg>
// );

// const Globe = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10" />
//     <line x1="2" y1="12" x2="22" y2="12" />
//     <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//   </svg>
// );

// const ChevronRight = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <path d="m9 18 6-6-6-6" />
//   </svg>
// );

// const XCircle = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10" />
//     <path d="m15 9-6 6M9 9l6 6" />
//   </svg>
// );

// const Briefcase = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
//     <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//   </svg>
// );

// const DollarSign = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <line x1="12" y1="2" x2="12" y2="22" />
//     <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//   </svg>
// );

// const TrendingUp = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//     <polyline points="16 7 22 7 22 13" />
//   </svg>
// );

// const Calendar = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//     <line x1="16" y1="2" x2="16" y2="6" />
//     <line x1="8" y1="2" x2="8" y2="6" />
//     <line x1="3" y1="10" x2="21" y2="10" />
//   </svg>
// );

// const Eye = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//     <circle cx="12" cy="12" r="3" />
//   </svg>
// );

// const Users = (props) => (
//   <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// );

// const CompanyView = () => {
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [sideSheetOpen, setSideSheetOpen] = useState(false);

//   // Sample company data
//   const companyData = [
//     { 
//       id: 1, 
//       name: 'TechGiant Corp', 
//       industry: 'Technology',
//       rank: 1,
//       revenue: '$245B',
//       marketCap: '$2.1T',
//       employees: '156,000', 
//       hq: 'Cupertino, CA',
//       founded: '1976',
//       age: '49 years',
//       ceo: 'John Mitchell',
//       monthlyViews: '62M',
//       description: 'A leading technology company specializing in consumer electronics, software, and online services.',
//       gradient: 'linear-gradient(145deg, #3AA0FF, #1E90FF)',
//       color: '#1E90FF',
//       icon: <Globe size={28} strokeWidth={1.5} color="white" />
//     },
//     { 
//       id: 2, 
//       name: 'MegaRetail Inc',  
//       industry: 'E-Commerce & Retail',
//       rank: 2,
//       revenue: '$386B',
//       marketCap: '$1.7T',
//       employees: '1,298,000', 
//       hq: 'Seattle, WA',
//       founded: '1994',
//       age: '31 years',
//       ceo: 'Sarah Johnson',
//       monthlyViews: '217M',
//       description: 'World\'s largest online retailer and marketplace, cloud computing provider, and smart device manufacturer.',
//       gradient: 'linear-gradient(145deg, #FF9900, #FF8C00)',
//       color: '#FF8C00',
//       icon: <Building2 size={28} strokeWidth={1.5} color="white" />
//     },
//     { 
//       id: 3, 
//       name: 'Global Banking Group', 
//       industry: 'Financial Services',
//       rank: 3,
//       revenue: '$128B',
//       marketCap: '$480B',
//       employees: '255,000', 
//       hq: 'New York, NY',
//       founded: '1869',
//       age: '156 years',
//       ceo: 'Michael Chang',
//       monthlyViews: '34M',
//       description: 'A multinational investment bank and financial services company offering services in investment management.',
//       gradient: 'linear-gradient(145deg, #7D3E66, #5D2E46)',
//       color: '#7D3E66',
//       icon: <DollarSign size={28} strokeWidth={1.5} color="white" />
//     },
//     { 
//       id: 4, 
//       name: 'PetroGlobal Energy', 
//       industry: 'Energy',
//       rank: 4,
//       revenue: '$265B',
//       marketCap: '$345B',
//       employees: '72,000', 
//       hq: 'Houston, TX',
//       founded: '1911',
//       age: '114 years',
//       ceo: 'Robert Garcia',
//       monthlyViews: '18M',
//       description: 'One of the world\'s largest oil and gas companies, engaged in every aspect of the petroleum industry.',
//       gradient: 'linear-gradient(145deg, #4FA8EB, #3498DB)',
//       color: '#3498DB',
//       icon: <Building2 size={28} strokeWidth={1.5} color="white" />
//     },
//   ];

//   const openSideSheet = (company) => {
//     setSelectedCompany(company);
//     setSideSheetOpen(true);
//   };

//   const closeSideSheet = () => {
//     setSideSheetOpen(false);
//     setTimeout(() => setSelectedCompany(null), 300);
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       {/* Main content */}
//       <div className="flex-1 overflow-y-auto p-4">
//         <h1 className="text-2xl font-medium mb-6 text-gray-900">Top Companies</h1>
        
//         {/* Vertical company list */}
//         <div className="max-w-3xl mx-auto">
//           {companyData.map((company) => (
//             <div 
//               key={company.id} 
//               className="flex items-center p-3 mb-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
//               onClick={() => openSideSheet(company)}
//             >
//               {/* Rank square */}
//               <div
//                 className="w-8 h-8 rounded-md flex items-center justify-center mr-3 shrink-0 text-white font-bold text-sm"
//                 style={{ backgroundColor: company.color }}
//               >
//                 {company.rank}
//               </div>
              
//               {/* Company icon */}
//               <div 
//                 className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0"
//                 style={{ background: company.gradient }}
//               >
//                 {company.icon}
//               </div>
              
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-medium text-gray-900 truncate pr-2">{company.name}</h3>
//                   <ChevronRight size={18} className="text-gray-400" />
//                 </div>
                
//                 {/* Tags row */}
//                 <div className="flex flex-wrap items-center gap-2 mt-2">
//                   <div className="flex items-center bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs">
//                     <Calendar size={12} className="mr-1" />
//                     {company.age}
//                   </div>
//                   <div className="flex items-center bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">
//                     <DollarSign size={12} className="mr-1" />
//                     {company.revenue}
//                   </div>
//                   <div className="flex items-center bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full text-xs">
//                     <TrendingUp size={12} className="mr-1" />
//                     {company.marketCap}
//                   </div>
//                   <div className="flex items-center bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full text-xs">
//                     <Eye size={12} className="mr-1" />
//                     {company.monthlyViews}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Side sheet */}
//       <div 
//         className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
//           sideSheetOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         {selectedCompany && (
//           <div className="h-full flex flex-col">
//             {/* Header */}
//             <div className="flex items-center justify-between p-4 border-b">
//               <h2 className="text-xl font-medium">Company Details</h2>
//               <button 
//                 onClick={closeSideSheet}
//                 className="p-1 rounded-full hover:bg-gray-100"
//               >
//                 <XCircle size={24} className="text-gray-500" />
//               </button>
//             </div>
            
//             {/* Content */}
//             <div className="flex-1 overflow-y-auto p-4">
//               {/* Company header */}
//               <div className="flex items-center mb-6">
//                 {/* Rank square */}
//                 <div
//                   className="w-10 h-10 rounded-md flex items-center justify-center mr-3 shrink-0 text-white font-bold"
//                   style={{ backgroundColor: selectedCompany.color }}
//                 >
//                   {selectedCompany.rank}
//                 </div>
                
//                 <div 
//                   className="w-16 h-16 rounded-xl flex items-center justify-center mr-4"
//                   style={{ background: selectedCompany.gradient }}
//                 >
//                   {selectedCompany.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-medium">{selectedCompany.name}</h3>
//                   <div className="text-sm text-gray-500 mt-1">{selectedCompany.industry}</div>
//                 </div>
//               </div>
              
//               {/* Monthly views card */}
//               <div className="bg-amber-50 rounded-lg p-3 mb-6 flex items-center">
//                 <Eye size={18} className="text-amber-600 mr-2" />
//                 <div>
//                   <div className="text-sm font-medium text-amber-800">Monthly Page Views</div>
//                   <div className="text-2xl font-bold text-amber-900">{selectedCompany.monthlyViews}</div>
//                 </div>
//               </div>
              
//               {/* Company details */}
//               <div className="bg-gray-50 rounded-lg p-4 mb-6">
//                 <h4 className="font-medium mb-3 text-gray-900">Overview</h4>
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="flex items-center">
//                     <Briefcase size={16} className="text-gray-500 mr-2" />
//                     <span className="text-sm">{selectedCompany.industry}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <DollarSign size={16} className="text-gray-500 mr-2" />
//                     <span className="text-sm">{selectedCompany.revenue}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <TrendingUp size={16} className="text-gray-500 mr-2" />
//                     <span className="text-sm">{selectedCompany.marketCap}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Users size={16} className="text-gray-500 mr-2" />
//                     <span className="text-sm">{selectedCompany.employees}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Calendar size={16} className="text-gray-500 mr-2" />
//                     <span className="text-sm">{selectedCompany.age}</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* More info */}
//               <div className="mb-6">
//                 <h4 className="font-medium mb-3 text-gray-900">Company Info</h4>
//                 <div className="space-y-2">
//                   <div className="flex">
//                     <span className="text-gray-500 w-24">Founded:</span>
//                     <span>{selectedCompany.founded}</span>
//                   </div>
//                   <div className="flex">
//                     <span className="text-gray-500 w-24">CEO:</span>
//                     <span>{selectedCompany.ceo}</span>
//                   </div>
//                   <div className="flex">
//                     <span className="text-gray-500 w-24">Headquarters:</span>
//                     <span>{selectedCompany.hq}</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Description */}
//               <div>
//                 <h4 className="font-medium mb-3 text-gray-900">Description</h4>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   {selectedCompany.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
      
//       {/* Backdrop */}
//       {sideSheetOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-30 z-40"
//           onClick={closeSideSheet}
//         />
//       )}
//     </div>
//   );
// };

// export default function Preview() {
//   return <CompanyView />;
// }
// app/api/transcript/route.js
// ------------------------------------


// app/page.js
// ------------------------------------
// app/api/transcript/route.js
// ------------------------------------

// app/page.js
// ------------------------------------
// app/page.js
// ------------------------------------

"use client";

import { useState } from 'react';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [transcript, setTranscript] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [videoId, setVideoId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Format time (seconds) to proper time format (MM:SS or HH:MM:SS)
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === null || seconds === undefined) return "00:00";
    
    // Fix for incorrect large time values 
    // (sometimes timestamps can be reported in an unusual format)
    if (seconds > 86400) { // More than 24 hours (likely an error)
      seconds = seconds % 86400; // Normalize to a reasonable range
    }
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    
    // Include hours only if necessary
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
  };
  
  // Parse and normalize timestamp for video navigation
  const parseTimestampForNavigation = (seconds) => {
    if (isNaN(seconds) || seconds === null || seconds === undefined) return 0;
    
    // Normalize extreme values
    if (seconds > 86400) {
      return seconds % 86400;
    }
    
    return seconds;
  };
  
  // Clean up and sanitize transcript text
  const sanitizeTranscriptText = (text) => {
    if (!text) return "";
    
    // Replace HTML entities
    return text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\*\*/g, ''); // Remove ** markers
  };

  // Extract video ID from URL (supports both youtube.com and youtu.be formats)
  const extractVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?\/]+)/);
    return match ? match[1] : null;
  };

  const fetchTranscript = async () => {
    if (!videoUrl) {
      setError('Please enter a YouTube video URL');
      return;
    }

    // Extract video ID
    const id = extractVideoId(videoUrl);
    if (!id) {
      setError('Invalid YouTube URL. Please use a URL like: https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID');
      return;
    }

    setVideoId(id);
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/transcript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoUrl }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Process the transcript data - additional client-side processing for safety
      const cleanTranscript = data.transcript
        .filter(item => typeof item.text === 'string' && item.text.trim() !== '')
        .map(item => ({
          ...item,
          text: sanitizeTranscriptText(item.text),
          // Additional validation just in case
          start: typeof item.start === 'number' && !isNaN(item.start) ? item.start : 0
        }))
        .sort((a, b) => a.start - b.start);
        
      setTranscript(cleanTranscript);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'An error occurred while fetching the transcript');
      setTranscript([]);
    } finally {
      setLoading(false);
    }
  };
  
  // Function to navigate to specific timestamp in the embedded video
  const navigateToTimestamp = (seconds) => {
    if (isNaN(seconds) || seconds < 0) {
      console.warn("Invalid timestamp:", seconds);
      seconds = 0;
    }
    
    // Normalize and format the timestamp for navigation
    seconds = parseTimestampForNavigation(seconds);
    
    setCurrentTime(seconds);
    
    // Get the iframe element
    const iframe = document.getElementById('youtube-player');
    if (iframe && videoId) {
      // Force iframe reload with the corrected timestamp parameter
      iframe.src = `https://www.youtube.com/embed/${videoId}?start=${Math.floor(seconds)}&autoplay=1`;
    }
  };

  const filteredTranscript = transcript.filter(
    item => item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">YouTube Transcript Fetcher</h1>
      
      <div className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Enter YouTube video URL (youtube.com or youtu.be)"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button 
            onClick={fetchTranscript}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-300"
          >
            {loading ? 'Loading...' : 'Get Transcript'}
          </button>
        </div>
        
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* Video player and transcript side by side on larger screens */}
      {videoId && transcript.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Video player */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="relative pt-[56.25%] w-full overflow-hidden rounded-lg">
              <iframe
                id="youtube-player"
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Click on timestamps in the transcript to navigate to that point in the video
            </p>
          </div>
          
          {/* Transcript section */}
          <div>
            <div className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search in transcript"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 max-h-[400px] overflow-y-auto">
              {filteredTranscript.length > 0 ? (
                filteredTranscript.map((item, index) => (
                  <div 
                    key={index} 
                    className="mb-3 p-2 hover:bg-gray-200 rounded cursor-pointer transition-colors"
                    onClick={() => navigateToTimestamp(item.start)}
                  >
                    <span className="text-blue-600 font-medium mr-2 hover:underline">
                      [{formatTime(item.start)}]
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No matching text found</p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* On mobile or when just showing transcript (no videoId yet) */}
      {!videoId && transcript.length > 0 && (
        <div>
          <div className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search in transcript"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 max-h-[600px] overflow-y-auto">
            {filteredTranscript.length > 0 ? (
              filteredTranscript.map((item, index) => (
                <div key={index} className="mb-3 p-2 hover:bg-gray-200 rounded">
                  <span className="text-blue-600 font-medium mr-2">[{formatTime(item.start)}]</span>
                  <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No matching text found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}