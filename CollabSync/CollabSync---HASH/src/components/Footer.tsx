
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Github, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#' },
        { name: 'Roadmap', href: '#' },
        { name: 'Beta Program', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'API', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Cookies', href: '#' },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="py-16 border-t border-black/10 dark:border-white/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 dark:via-neon-blue/50 to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-primary/5 dark:bg-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary dark:bg-neon-blue rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-white rotate-45"></div>
              </div>
              <span className="font-display text-xl font-bold">CollabSync</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              The next generation platform for real-time code collaboration. 
              Write, review, and ship code faster with AI-powered insights.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group, i) => (
            <div key={i} className="col-span-1">
              <h3 className="font-medium mb-4 text-sm">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CollabSync. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
              Code of Conduct
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
