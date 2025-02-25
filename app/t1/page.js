import React from 'react';
import { 
  Headphones, 
  Book, 
  Tablet, 
  BookOpen, 
  Play, 
  BookMarked, 
  FileText, 
  Music, 
  Mail, 
  ShoppingBag
} from 'lucide-react';

const IconView = () => {
  // Sample app data with iOS App Store style
  const iconData = [
    { 
      id: 1, 
      name: 'Audible: Audio Entertainment', 
      company: 'Audible, Inc.', 
      gradient: 'linear-gradient(145deg, #FFB366, #F6A54C)',
      icon: <Headphones size={42} strokeWidth={1.5} color="white" />
    },
    { 
      id: 2, 
      name: 'Libby, the library app', 
      company: 'OverDrive, Inc.', 
      gradient: 'linear-gradient(145deg, #7D3E66, #5D2E46)',
      icon: <Book size={42} strokeWidth={1.5} color="white" />
    },
    { 
      id: 3, 
      name: 'Amazon Kindle', 
      company: 'AMZN Mobile LLC', 
      gradient: 'linear-gradient(145deg, #3AA0FF, #1E90FF)',
      icon: <Tablet size={42} strokeWidth={1.5} color="white" />
    },
    { 
      id: 4, 
      name: 'Goodreads: Book Reviews', 
      company: 'Goodreads', 
      gradient: 'linear-gradient(145deg, #FFFFF0, #F5F5DC)',
      icon: <BookOpen size={42} strokeWidth={1.5} color="#5D4037" />
    },
    { 
      id: 5, 
      name: 'hoopla Digital', 
      company: 'Midwest Tape, LLC', 
      gradient: 'linear-gradient(145deg, #4FA8EB, #3498DB)',
      icon: <Play size={42} strokeWidth={1.5} color="white" />
    },
    { 
      id: 6, 
      name: 'Bible For Women', 
      company: 'PANDAS OF CARIBBEAN', 
      gradient: 'linear-gradient(145deg, #FF79C4, #FF69B4)',
      icon: <BookMarked size={42} strokeWidth={1.5} color="white" />
    },
    { 
      id: 7, 
      name: 'Wattpad - Read & Write Stories', 
      company: 'Wattpad Corp', 
      gradient: 'linear-gradient(145deg, #FF7357, #FF6347)',
      icon: <FileText size={42} strokeWidth={1.5} color="white" />
    },
    { 
      id: 8, 
      name: 'The Clear Quran Audiobook', 
      company: 'Al Furqaan Foundation', 
      gradient: 'linear-gradient(145deg, #2F57A8, #1F4788)',
      icon: <Music size={42} strokeWidth={1.5} color="white" />
    },
    { 
      id: 9, 
      name: 'Sincerely - Off My Chest', 
      company: 'MWM', 
      gradient: 'linear-gradient(145deg, #FFFFFF, #F5F5F5)',
      icon: <Mail size={42} strokeWidth={1.5} color="#FF6347" />
    },
    { 
      id: 10, 
      name: 'Barnes & Noble', 
      company: 'Barnes & Noble', 
      gradient: 'linear-gradient(145deg, #5C4D4D, #4C3D3D)',
      icon: <ShoppingBag size={42} strokeWidth={1.5} color="white" />
    },
    { 
      id: 11, 
      name: 'Manga Reader', 
      company: 'Manga Reader Apps', 
      gradient: 'linear-gradient(145deg, #303030, #000000)',
      icon: <Book size={42} strokeWidth={1.5} color="white" />
    },
    { 
      id: 12, 
      name: 'KJV Bible Now: Read & Study', 
      company: 'Rocketshield Browser', 
      gradient: 'linear-gradient(145deg, #9B5523, #8B4513)',
      icon: <BookMarked size={42} strokeWidth={1.5} color="white" />
    },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-2xl font-medium mb-6 text-gray-900 pl-2">App Store</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
        {iconData.map((app) => (
          <div key={app.id} className="flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer">
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-2 shadow-md"
              style={{ background: app.gradient }}
            >
              {app.icon}
            </div>
            <div className="w-full px-1">
              <div className="font-medium text-sm text-gray-900 truncate">{app.name}</div>
              <div className="text-xs text-gray-500 truncate">{app.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Preview() {
  return <IconView />;
}