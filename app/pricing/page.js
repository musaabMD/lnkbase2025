"use client";

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { CheckCircle } from 'lucide-react';

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: "Free",
      price: 0,
      features: [
        "Access to 3 apps",
        "Basic spreadsheet features",
        "1 GB storage",
        "Email support"
      ],
      cta: "Get Started",
      ctaLink: "/signup",
      popular: false
    },
    {
      name: "Pro",
      price: annual ? 9.99 : 14.99,
      features: [
        "Access to all apps",
        "Advanced spreadsheet features",
        "10 GB storage",
        "Priority email support",
        "Data export in multiple formats",
        "No ads"
      ],
      cta: "Go Pro",
      ctaLink: "/signup?plan=pro",
      popular: true
    },
    {
      name: "Team",
      price: annual ? 29.99 : 39.99,
      features: [
        "Everything in Pro",
        "5 team members",
        "50 GB storage",
        "Team collaboration tools",
        "Admin dashboard",
        "API access",
        "24/7 phone support"
      ],
      cta: "Start Trial",
      ctaLink: "/signup?plan=team",
      popular: false
    }
  ];
  
  return (
    <Layout title="Pricing - Lnkbase.com">
      <div className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for you and your team. All plans include access to our core apps.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-3 ${annual ? 'font-medium' : 'text-gray-500'}`}>
              Annual Billing
            </span>
            <button 
              className="relative rounded-full w-14 h-7 transition bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setAnnual(!annual)}
            >
              <div 
                className={`absolute top-0.5 left-0.5 bg-white w-6 h-6 rounded-full transition-transform transform ${
                  annual ? '' : 'translate-x-7'
                }`}
              />
            </button>
            <span className={`ml-3 ${!annual ? 'font-medium' : 'text-gray-500'}`}>
              Monthly Billing
            </span>
            {annual && (
              <span className="ml-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-xl overflow-hidden shadow-sm border ${
                plan.popular ? 'border-blue-500' : 'border-gray-200'
              } relative`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-sm font-medium py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{annual ? 'month' : 'month'}</span>
                  {annual && plan.price > 0 && (
                    <span className="block text-sm text-gray-500">billed annually</span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.ctaLink}
                  className={`block w-full py-2 px-4 text-center rounded-lg font-medium transition duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Can I change my plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you&apos;ll be charged the prorated difference. If you downgrade, you&apos;ll receive credit toward your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">How do team accounts work?</h3>
              <p className="text-gray-600">
                Team accounts allow you to add multiple users to your organization. Each user gets their own login, and you can manage permissions from the admin dashboard.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                Yes, all paid plans come with a 14-day free trial. You won&apos;t be charged until the trial period ends, and you can cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}