
import React, { useEffect } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CodePreview from '../components/CodePreview';
import AIAssistant from '../components/AIAssistant';
import Footer from '../components/Footer';
import ZeeshanSignature from '../components/ZeeshanSignature';
import BackToTop from '../components/BackToTop';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to top when page loads or refreshes
    window.onload = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    // If already loaded, scroll to top with animation
    if (document.readyState === 'complete') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <FeatureSection />
          <CodePreview />
          <AIAssistant />
        </main>
        <Footer />
        <ZeeshanSignature />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;
