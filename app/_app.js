// 6. pages/_app.js - Custom App component
import '../styles/globals.css'; // You'll need to create this file with Tailwind imports
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Load jspreadsheet script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspreadsheet/4.10.2/jspreadsheet.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;