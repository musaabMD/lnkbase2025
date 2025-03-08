// // "use client";

// // import { useState } from 'react';
// // import Link from 'next/link';
// // import Layout from '@/components/Layout';
// // import { CheckCircle } from 'lucide-react';

// // export default function PricingPage() {
// //   const [annual, setAnnual] = useState(true);
  
// //   const plans = [
// //     {
// //       name: "Free",
// //       price: 0,
// //       features: [
// //         "Access to 3 apps",
// //         "Basic spreadsheet features",
// //         "1 GB storage",
// //         "Email support"
// //       ],
// //       cta: "Get Started",
// //       ctaLink: "/signup",
// //       popular: false
// //     },
// //     {
// //       name: "Pro",
// //       price: annual ? 9.99 : 14.99,
// //       features: [
// //         "Access to all apps",
// //         "Advanced spreadsheet features",
// //         "10 GB storage",
// //         "Priority email support",
// //         "Data export in multiple formats",
// //         "No ads"
// //       ],
// //       cta: "Go Pro",
// //       ctaLink: "/signup?plan=pro",
// //       popular: true
// //     },
// //     {
// //       name: "Team",
// //       price: annual ? 29.99 : 39.99,
// //       features: [
// //         "Everything in Pro",
// //         "5 team members",
// //         "50 GB storage",
// //         "Team collaboration tools",
// //         "Admin dashboard",
// //         "API access",
// //         "24/7 phone support"
// //       ],
// //       cta: "Start Trial",
// //       ctaLink: "/signup?plan=team",
// //       popular: false
// //     }
// //   ];
  
// //   return (
// //     <Layout title="Pricing - Lnkbase.com">
// //       <div className="py-8">
// //         <div className="text-center mb-12">
// //           <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             Choose the plan that works best for you and your team. All plans include access to our core apps.
// //           </p>
          
// //           {/* Billing toggle */}
// //           <div className="mt-8 flex items-center justify-center">
// //             <span className={`mr-3 ${annual ? 'font-medium' : 'text-gray-500'}`}>
// //               Annual Billing
// //             </span>
// //             <button 
// //               className="relative rounded-full w-14 h-7 transition bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               onClick={() => setAnnual(!annual)}
// //             >
// //               <div 
// //                 className={`absolute top-0.5 left-0.5 bg-white w-6 h-6 rounded-full transition-transform transform ${
// //                   annual ? '' : 'translate-x-7'
// //                 }`}
// //               />
// //             </button>
// //             <span className={`ml-3 ${!annual ? 'font-medium' : 'text-gray-500'}`}>
// //               Monthly Billing
// //             </span>
// //             {annual && (
// //               <span className="ml-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
// //                 Save 20%
// //               </span>
// //             )}
// //           </div>
// //         </div>
        
// //         <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
// //           {plans.map((plan) => (
// //             <div 
// //               key={plan.name}
// //               className={`bg-white rounded-xl overflow-hidden shadow-sm border ${
// //                 plan.popular ? 'border-blue-500' : 'border-gray-200'
// //               } relative`}
// //             >
// //               {plan.popular && (
// //                 <div className="bg-blue-500 text-white text-sm font-medium py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
// //                   Most Popular
// //                 </div>
// //               )}
              
// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
// //                 <div className="mb-4">
// //                   <span className="text-4xl font-bold">${plan.price}</span>
// //                   <span className="text-gray-600">/{annual ? 'month' : 'month'}</span>
// //                   {annual && plan.price > 0 && (
// //                     <span className="block text-sm text-gray-500">billed annually</span>
// //                   )}
// //                 </div>
                
// //                 <ul className="space-y-3 mb-6">
// //                   {plan.features.map((feature, index) => (
// //                     <li key={index} className="flex items-start">
// //                       <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
// //                       <span>{feature}</span>
// //                     </li>
// //                   ))}
// //                 </ul>
                
// //                 <Link
// //                   href={plan.ctaLink}
// //                   className={`block w-full py-2 px-4 text-center rounded-lg font-medium transition duration-200 ${
// //                     plan.popular
// //                       ? 'bg-blue-600 hover:bg-blue-700 text-white'
// //                       : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
// //                   }`}
// //                 >
// //                   {plan.cta}
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
        
// //         <div className="mt-16 bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
// //           <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          
// //           <div className="space-y-6">
// //             <div>
// //               <h3 className="text-lg font-medium mb-2">Can I change my plan later?</h3>
// //               <p className="text-gray-600">
// //                 Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you&apos;ll be charged the prorated difference. If you downgrade, you&apos;ll receive credit toward your next billing cycle.
// //               </p>
// //             </div>
            
// //             <div>
// //               <h3 className="text-lg font-medium mb-2">How do team accounts work?</h3>
// //               <p className="text-gray-600">
// //                 Team accounts allow you to add multiple users to your organization. Each user gets their own login, and you can manage permissions from the admin dashboard.
// //               </p>
// //             </div>
            
// //             <div>
// //               <h3 className="text-lg font-medium mb-2">Is there a free trial?</h3>
// //               <p className="text-gray-600">
// //                 Yes, all paid plans come with a 14-day free trial. You won&apos;t be charged until the trial period ends, and you can cancel anytime.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // }

// 'use client';
// import React, { useState } from 'react';

// const UWorldChatbaseHomepage = () => {
//   const [query, setQuery] = useState('');
//   const [chatHistory, setChatHistory] = useState([
//     { 
//       role: 'system', 
//       content: 'Welcome to MedPrep AI! I can help you study for your medical exams. You can ask me questions, request practice problems, or explore specific topics.'
//     }
//   ]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedTab, setSelectedTab] = useState('home');
  
//   // Mock subjects data
//   const subjects = [
//     { id: 1, name: 'Cardiology', questionsCount: 1240, icon: '❤️' },
//     { id: 2, name: 'Neurology', questionsCount: 980, icon: '🧠' },
//     { id: 3, name: 'Pathology', questionsCount: 1560, icon: '🔬' },
//     { id: 4, name: 'Pharmacology', questionsCount: 1320, icon: '💊' },
//     { id: 5, name: 'Pediatrics', questionsCount: 890, icon: '👶' },
//     { id: 6, name: 'Surgery', questionsCount: 760, icon: '🔪' }
//   ];
  
//   // Mock recent quizzes
//   const recentQuizzes = [
//     { id: 101, title: 'Cardiovascular System', questions: 25, completed: 23, score: 92 },
//     { id: 102, title: 'Neurological Disorders', questions: 30, completed: 30, score: 87 },
//     { id: 103, title: 'Pharmacology - Antibiotics', questions: 20, completed: 8, score: null }
//   ];

//   // Mock suggested practice questions
//   const suggestedQuestions = [
//     "Explain the pathophysiology of congestive heart failure.",
//     "What are the most common side effects of beta-blockers?",
//     "Compare and contrast different types of shock.",
//     "How would you diagnose and treat bacterial meningitis?"
//   ];

//   const handleSendMessage = () => {
//     if (!query.trim()) return;
    
//     // Add user message to chat
//     setChatHistory([...chatHistory, { role: 'user', content: query }]);
//     setIsLoading(true);
    
//     // Simulate AI response
//     setTimeout(() => {
//       // Mock AI response based on query
//       let aiResponse = "";
      
//       if (query.toLowerCase().includes('cardiology') || query.toLowerCase().includes('heart')) {
//         aiResponse = "Cardiology focuses on disorders of the heart. Some key topics include:\n\n1. Coronary artery disease\n2. Heart failure\n3. Arrhythmias\n4. Valvular heart disease\n\nWould you like to see practice questions on any of these topics?";
//       } else if (query.toLowerCase().includes('study plan') || query.toLowerCase().includes('schedule')) {
//         aiResponse = "I recommend creating a structured study plan based on your exam date. For USMLE Step 1, a typical schedule includes:\n\n• 6-8 months of preparation\n• Focus on high-yield subjects first\n• Daily practice questions\n• Weekly self-assessments\n\nShall I help you create a personalized study schedule?";
//       } else {
//         aiResponse = "That's a great question. I can provide information on this topic, offer practice questions, or create a custom quiz to test your knowledge. What would you prefer?";
//       }
      
//       setChatHistory(prev => [...prev, { role: 'assistant', content: aiResponse }]);
//       setIsLoading(false);
//       setQuery('');
//     }, 1500);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
//         {/* Logo area */}
//         <div className="p-4 border-b">
//           <h1 className="text-xl font-bold text-blue-700">MedPrep AI</h1>
//         </div>
        
//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto p-4 space-y-1">
//           <button 
//             className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${selectedTab === 'home' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//             onClick={() => setSelectedTab('home')}
//           >
//             <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
//             </svg>
//             Dashboard
//           </button>
          
//           <button 
//             className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${selectedTab === 'qbank' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//             onClick={() => setSelectedTab('qbank')}
//           >
//             <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//             </svg>
//             Question Bank
//           </button>
          
//           <button 
//             className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${selectedTab === 'tests' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//             onClick={() => setSelectedTab('tests')}
//           >
//             <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
//             </svg>
//             Self-Assessments
//           </button>
          
//           <button 
//             className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${selectedTab === 'flashcards' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//             onClick={() => setSelectedTab('flashcards')}
//           >
//             <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
//             </svg>
//             Flashcards
//           </button>
          
//           <button 
//             className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${selectedTab === 'performance' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//             onClick={() => setSelectedTab('performance')}
//           >
//             <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
//             </svg>
//             Performance
//           </button>
//         </nav>
        
//         {/* User info */}
//         <div className="p-4 border-t mt-auto">
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
//               JS
//             </div>
//             <div className="ml-3">
//               <p className="text-sm font-medium text-gray-700">John Smith</p>
//               <p className="text-xs text-gray-500">USMLE Step 1 • 68 days left</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white p-4 border-b border-gray-200 flex justify-between items-center">
//           <h2 className="text-lg font-medium text-gray-800">Dashboard</h2>
//           <div className="flex items-center space-x-4">
//             <button className="text-gray-500 hover:text-gray-700">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
//               </svg>
//             </button>
//             <button className="text-gray-500 hover:text-gray-700">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
//               </svg>
//             </button>
//           </div>
//         </header>
        
//         {/* Content grid */}
//         <div className="flex-1 p-6 overflow-y-auto grid grid-cols-3 gap-6">
//           {/* Left column - Study progress */}
//           <div className="col-span-1 space-y-6">
//             {/* Study progress */}
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <h3 className="text-lg font-medium text-gray-800 mb-4">Your Progress</h3>
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <p className="text-sm font-medium text-gray-700">Overall Completion</p>
//                     <p className="text-sm font-medium text-gray-700">42%</p>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '42%' }}></div>
//                   </div>
//                 </div>
                
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <p className="text-sm font-medium text-gray-700">Questions Answered</p>
//                     <p className="text-sm font-medium text-gray-700">1,284 / 3,650</p>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
//                   </div>
//                 </div>
                
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <p className="text-sm font-medium text-gray-700">Average Score</p>
//                     <p className="text-sm font-medium text-gray-700">76%</p>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '76%' }}></div>
//                   </div>
//                 </div>

//                 <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                   View Detailed Performance
//                 </button>
//               </div>
//             </div>
            
//             {/* Recent Quizzes */}
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Quizzes</h3>
//               <div className="space-y-4">
//                 {recentQuizzes.map(quiz => (
//                   <div key={quiz.id} className="border rounded-lg p-3 hover:border-blue-300 transition-colors">
//                     <h4 className="font-medium text-gray-800">{quiz.title}</h4>
//                     <div className="flex justify-between mt-2 text-sm">
//                       <span className="text-gray-500">{quiz.completed}/{quiz.questions} questions</span>
//                       {quiz.score ? (
//                         <span className={`font-medium ${quiz.score >= 80 ? 'text-green-600' : quiz.score >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
//                           {quiz.score}%
//                         </span>
//                       ) : (
//                         <span className="text-blue-600 font-medium">In progress</span>
//                       )}
//                     </div>
//                     {quiz.completed < quiz.questions && (
//                       <button className="mt-2 w-full py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors">
//                         Continue
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Middle column - Chat UI */}
//           <div className="col-span-1 flex flex-col bg-white rounded-xl shadow-sm overflow-hidden">
//             <div className="p-4 border-b border-gray-200">
//               <h3 className="text-lg font-medium text-gray-800">Study Assistant</h3>
//               <p className="text-sm text-gray-500">Ask questions or get study recommendations</p>
//             </div>
            
//             {/* Chat messages */}
//             <div className="flex-1 p-4 overflow-y-auto space-y-4">
//               {chatHistory.map((message, index) => (
//                 <div 
//                   key={index} 
//                   className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div 
//                     className={`max-w-3/4 rounded-lg p-3 ${
//                       message.role === 'user' 
//                         ? 'bg-blue-600 text-white' 
//                         : message.role === 'system'
//                           ? 'bg-gray-100 text-gray-800 border border-gray-200'
//                           : 'bg-white text-gray-800 border border-gray-200'
//                     }`}
//                   >
//                     {message.content.split('\n').map((line, i) => (
//                       <React.Fragment key={i}>
//                         {line}
//                         {i < message.content.split('\n').length - 1 && <br />}
//                       </React.Fragment>
//                     ))}
//                   </div>
//                 </div>
//               ))}
              
//               {isLoading && (
//                 <div className="flex justify-start">
//                   <div className="max-w-3/4 rounded-lg p-3 bg-white text-gray-800 border border-gray-200">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                       <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
//                       <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             {/* Chat input */}
//             <div className="p-4 border-t border-gray-200">
//               <div className="flex items-end">
//                 <textarea
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   onKeyDown={handleKeyDown}
//                   placeholder="Ask a question about your studies..."
//                   className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                   rows={1}
//                 />
//                 <button 
//                   onClick={handleSendMessage}
//                   disabled={!query.trim() || isLoading}
//                   className={`ml-2 p-2 rounded-lg ${
//                     !query.trim() || isLoading 
//                       ? 'bg-gray-200 text-gray-400' 
//                       : 'bg-blue-600 text-white hover:bg-blue-700'
//                   } transition-colors`}
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
//                   </svg>
//                 </button>
//               </div>
//               <div className="mt-2 flex space-x-2">
//                 <button className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200">
//                   Study plan
//                 </button>
//                 <button className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200">
//                   Practice questions
//                 </button>
//                 <button className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200">
//                   Explain concept
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Right column - Subject overview and suggested Qs */}
//           <div className="col-span-1 space-y-6">
//             {/* Subject categories */}
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <h3 className="text-lg font-medium text-gray-800 mb-4">Subject Areas</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 {subjects.map(subject => (
//                   <div key={subject.id} className="border rounded-lg p-3 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
//                     <div className="flex items-center">
//                       <span className="text-xl mr-2">{subject.icon}</span>
//                       <div>
//                         <h4 className="font-medium text-gray-800">{subject.name}</h4>
//                         <p className="text-xs text-gray-500">{subject.questionsCount} questions</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Daily goals */}
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-medium text-gray-800">Today's Goals</h3>
//                 <span className="text-sm text-blue-600 font-medium">75% Complete</span>
//               </div>
              
//               <div className="space-y-3">
//                 <div className="flex items-center">
//                   <input type="checkbox" checked className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300" />
//                   <span className="ml-2 text-gray-700">Complete 50 questions</span>
//                 </div>
//                 <div className="flex items-center">
//                   <input type="checkbox" checked className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300" />
//                   <span className="ml-2 text-gray-700">Review missed questions</span>
//                 </div>
//                 <div className="flex items-center">
//                   <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300" />
//                   <span className="ml-2 text-gray-700">Complete Cardiology quiz</span>
//                 </div>
//                 <div className="flex items-center">
//                   <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300" />
//                   <span className="ml-2 text-gray-700">Take practice exam</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Suggested Qs */}
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <h3 className="text-lg font-medium text-gray-800 mb-4">Suggested Questions</h3>
//               <div className="space-y-3">
//                 {suggestedQuestions.map((question, idx) => (
//                   <button 
//                     key={idx} 
//                     className="w-full text-left p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
//                   >
//                     <p className="text-gray-800">{question}</p>
//                     <div className="flex mt-2">
//                       <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">High Yield</span>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UWorldChatbaseHomepage;
import React from 'react'

const page = () => {
  return (
    <div>Soon</div>
  )
}

export default page