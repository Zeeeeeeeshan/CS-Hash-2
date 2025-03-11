
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'py-3 glassmorphism shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="group flex items-center gap-2 animated-link">
            <div className="w-8 h-8 bg-primary dark:bg-neon-blue rounded-md flex items-center justify-center transition-colors duration-200 shadow-lg">
              <div className="w-3 h-3 bg-white rotate-45 group-hover:rotate-90 transition-transform duration-200"></div>
            </div>
            <span className="font-display text-xl font-bold tracking-tight transition-colors duration-200">
              CollabSync
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="animated-link text-sm font-medium">Features</a>
          <a href="#ai-assistant" className="animated-link text-sm font-medium">AI Assistant</a>
          <a href="#code-preview" className="animated-link text-sm font-medium">Live Preview</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a 
            href="#" 
            className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 dark:bg-neon-blue dark:hover:bg-neon-blue/90 transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-secondary/80 transition-colors duration-200"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-background/90 dark:bg-background/95 backdrop-blur-md transition-all duration-200 md:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <nav className="flex flex-col gap-6">
            <a 
              href="#features" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#ai-assistant" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Assistant
            </a>
            <a 
              href="#code-preview" 
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Live Preview
            </a>
          </nav>
          <div className="mt-auto">
            <a 
              href="#" 
              className="w-full block text-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 dark:bg-neon-blue dark:hover:bg-neon-blue/90 transition-colors duration-200 font-medium shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
