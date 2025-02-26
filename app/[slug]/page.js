"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';
import AppIcon from '@/components/AppIcon';
import { 
  getAppBySlug, 
  spreadsheetData,
  apps as allApps
} from '@/app/data/appData';
import { CheckCircle, Star, Shield, ArrowRight } from 'lucide-react';

export default function AppPage({ params }) {
  const { slug } = params;
  const [app, setApp] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
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
          <p className="mb-6">The app you&apos;re looking for doesn&apos;t exist.</p>
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
      {/* Sticky Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-gray-700 hover:text-blue-600 transition">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Store</span>
            </Link>
            
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`relative font-medium ${
                  activeTab === 'overview' 
                    ? 'text-blue-600 after:absolute after:bottom-[-18px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`relative font-medium ${
                  activeTab === 'features' 
                    ? 'text-blue-600 after:absolute after:bottom-[-18px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`relative font-medium ${
                  activeTab === 'preview' 
                    ? 'text-blue-600 after:absolute after:bottom-[-18px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F9FAFB] to-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Top Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div 
                className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center"
                style={{ background: app.bgColor }}
              >
                <div className="w-8 h-8 text-white">
                  {app.iconSvg ? (
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
              <span className="bg-gray-900 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                {app.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {app.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              {app.description}
            </p>

            <div className="flex items-center justify-center space-x-4 mb-12">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition duration-200 font-semibold text-lg inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                onClick={() => alert('Launch app')}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <div className="flex items-center bg-white px-6 py-3 rounded-xl shadow-md">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    200+ reviews · 175k+ users
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-12 text-gray-600">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-green-500 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative">
                {/* Browser-like top bar */}
                <div className="bg-gray-100 px-4 py-3 flex items-center border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="p-6">
                  <table className="w-full border-collapse text-gray-800">
                    <thead>
                      <tr className="bg-gray-50">
                        {data[0] && data[0].map((_, index) => (
                          <th key={index} className="border border-gray-200 p-3 text-left text-sm font-semibold">
                            {String.fromCharCode(65 + index)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.slice(0, 4).map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          {row.map((cell, cellIndex) => (
                            <td 
                              key={cellIndex}
                              className="border border-gray-200 p-3 text-sm"
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
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage and analyze your data efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Real-time Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Work together with your team in real-time. Changes sync instantly across all devices.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank-grade encryption and advanced security measures to protect your sensitive data.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Star className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Get deep insights into your data with powerful analytics and reporting tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get started in minutes with our simple and intuitive workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10">
                <img src="/screenshot1.png" alt="Setup" className="rounded-lg mb-6 w-full" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">1. Quick Setup</h3>
                <p className="text-gray-600">Sign up and connect your data sources in just a few clicks.</p>
              </div>
              <div className="absolute top-1/2 left-full w-24 h-px bg-gray-300 hidden md:block"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10">
                <img src="/screenshot2.png" alt="Customize" className="rounded-lg mb-6 w-full" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">2. Customize</h3>
                <p className="text-gray-600">Tailor the interface and workflows to match your needs.</p>
              </div>
              <div className="absolute top-1/2 left-full w-24 h-px bg-gray-300 hidden md:block"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10">
                <img src="/screenshot3.png" alt="Collaborate" className="rounded-lg mb-6 w-full" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">3. Collaborate</h3>
                <p className="text-gray-600">Invite your team and start working together seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Use Cases</h2>
            <p className="text-xl text-gray-600">
              Trusted by teams of all sizes across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Startups</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Quick setup and deployment</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Scalable infrastructure</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Cost-effective solution</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Enterprise</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Advanced security features</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Dedicated support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Teams</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Real-time collaboration</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Team management</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Workflow automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 ${activeTab !== 'features' && 'hidden md:block'}`} id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage and analyze your data efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Capture Screenshots</h3>
                  <p className="text-gray-600">Quickly capture and annotate screenshots to highlight bugs and issues.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Record Sessions</h3>
                  <p className="text-gray-600">Record browser tabs or entire desktop to provide complete context.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Instant Replay</h3>
                  <p className="text-gray-600">Capture the last 30 seconds of activity to document unexpected issues.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">One-Click Sharing</h3>
                  <p className="text-gray-600">Instantly share reports with your team through integrations with popular tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Preview Section */}
      <section className={`py-16 bg-gray-50 ${activeTab !== 'preview' && 'hidden md:block'}`} id="preview">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preview</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the app in action before you start.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    {data[0] && data[0].map((_, index) => (
                      <th key={index} className="border border-gray-300 p-3 text-left text-sm font-semibold text-gray-700">
                        {String.fromCharCode(65 + index)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell, cellIndex) => (
                        <td 
                          key={cellIndex}
                          className="border border-gray-300 p-3 text-sm"
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
        </div>
      </section>
      
      {/* App Screenshots Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Discover the powerful features that make our app unique</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <img src="/screenshot1.png" alt="Feature 1" className="rounded-lg mb-6 w-full" />
              <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">Connect and sync your data across all your favorite tools effortlessly.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <img src="/screenshot2.png" alt="Feature 2" className="rounded-lg mb-6 w-full" />
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Get deep insights into your data with powerful analytics tools.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <img src="/screenshot3.png" alt="Feature 3" className="rounded-lg mb-6 w-full" />
              <h3 className="text-xl font-bold mb-2">Real-time Collaboration</h3>
              <p className="text-gray-600">Work together with your team in real-time, anywhere in the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Apps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
            {allApps
              .filter(a => a.id !== app.id && a.category === app.category)
              .slice(0, 6)
              .map(relatedApp => (
                <AppIcon key={relatedApp.id} app={relatedApp} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}