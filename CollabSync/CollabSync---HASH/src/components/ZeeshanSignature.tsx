
import React, { useEffect, useState } from 'react';

const ZeeshanSignature: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  
  useEffect(() => {
    // Show after 1 second
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 3000);
    
    // Remove completely after 3 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 4000);
    
    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  
  if (!visible) return null;
  
  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        fadingOut ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="glassmorphism-light dark:glassmorphism-dark px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
        <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
        <div className="text-sm font-medium gradient-text">
          Made by Zeeshan - HASH
        </div>
      </div>
    </div>
  );
};

export default ZeeshanSignature;
