"use client";

import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  ClipboardList, 
  DollarSign, 
  Clock, 
  FileText, 
  WalletCards
} from 'lucide-react';

// Map of app IDs to their respective Lucide icons
const iconMap = {
  '1': <BarChart3 size={42} strokeWidth={1.5} color="white" />, // Sales Tracker
  '2': <ClipboardList size={42} strokeWidth={1.5} color="white" />, // Project Planner
  '3': <DollarSign size={42} strokeWidth={1.5} color="white" />, // Budget Calculator
  '4': <Clock size={42} strokeWidth={1.5} color="white" />, // Time Manager
  '5': <FileText size={42} strokeWidth={1.5} color="white" />, // Invoice Generator
  '6': <WalletCards size={42} strokeWidth={1.5} color="white" />, // Expense Tracker
};

// Map of app IDs to their background gradients
const gradientMap = {
  '1': 'linear-gradient(145deg, #FF6B6B, #EE5253)', // Sales Tracker
  '2': 'linear-gradient(145deg, #4ECDC4, #2BAE9F)', // Project Planner
  '3': 'linear-gradient(145deg, #FFBE0B, #FD9D0D)', // Budget Calculator
  '4': 'linear-gradient(145deg, #2A9D8F, #1A8C7D)', // Time Manager
  '5': 'linear-gradient(145deg, #E76F51, #D65C3E)', // Invoice Generator
  '6': 'linear-gradient(145deg, #264653, #1A353F)', // Expense Tracker
};

const AppIcon = ({ app, clickable = true }) => {
  // Convert app name to URL-friendly slug
  const getSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  // Get the appropriate icon based on app ID
  const getIcon = (id) => {
    return iconMap[id] || <FileText size={42} strokeWidth={1.5} color="white" />;
  };

  // Get the background gradient
  const getGradient = (id) => {
    return gradientMap[id] || 'linear-gradient(145deg, #3498DB, #2980B9)';
  };

  // The component content
  const iconContent = (
    <>
      <div 
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md transition-transform hover:scale-105"
        style={{ background: getGradient(app.id) }}
      >
        {getIcon(app.id)}
      </div>
      <div className="w-full px-1">
        <div className="font-medium text-sm text-gray-900 truncate">{app.name}</div>
        <div className="text-xs text-gray-500 truncate">{app.category}</div>
      </div>
    </>
  );

  // If clickable, wrap in Link, otherwise just return the content
  return clickable ? (
    <Link 
      href={`/${getSlug(app.name)}`}
      className="flex flex-col items-center text-center cursor-pointer"
    >
      {iconContent}
    </Link>
  ) : (
    <div className="flex flex-col items-center text-center">
      {iconContent}
    </div>
  );
};

export default AppIcon;