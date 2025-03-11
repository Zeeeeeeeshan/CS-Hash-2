
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, CornerDownRight, Code, Share2, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesContainerRef.current) return;
    
    const container = particlesContainerRef.current;
    const particles: HTMLDivElement[] = [];
    
    // Create particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full opacity-50 pointer-events-none';
      
      // Randomize particle properties
      const size = Math.random() * 6 + 2;
      const speedX = (Math.random() - 0.5) * 0.8;
      const speedY = (Math.random() - 0.5) * 0.8;
      const startX = Math.random() * container.offsetWidth;
      const startY = Math.random() * container.offsetHeight;
      
      // Set particle colors based on theme
      if (theme === 'dark') {
        const colors = ['bg-neon-blue', 'bg-neon-purple', 'bg-neon-pink', 'bg-primary'];
        particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
      } else {
        const colors = ['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-primary'];
        particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
      }
      
      // Set initial position and size
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      // Store speeds on the element
      particle.dataset.speedX = speedX.toString();
      particle.dataset.speedY = speedY.toString();
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Animate particles
    let animationFrameId: number;
    
    const animateParticles = () => {
      particles.forEach((particle) => {
        const currentX = parseFloat(particle.style.left);
        const currentY = parseFloat(particle.style.top);
        const speedX = parseFloat(particle.dataset.speedX || '0');
        const speedY = parseFloat(particle.dataset.speedY || '0');
        
        // Update position
        let newX = currentX + speedX;
        let newY = currentY + speedY;
        
        // Boundary checking
        if (newX < 0 || newX > container.offsetWidth) {
          particle.dataset.speedX = (-speedX).toString();
          newX = currentX;
        }
        
        if (newY < 0 || newY > container.offsetHeight) {
          particle.dataset.speedY = (-speedY).toString();
          newY = currentY;
        }
        
        particle.style.left = `${newX}px`;
        particle.style.top = `${newY}px`;
      });
      
      animationFrameId = requestAnimationFrame(animateParticles);
    };
    
    animateParticles();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      particles.forEach(particle => container.removeChild(particle));
    };
  }, [theme]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent dark:from-neon-blue/10 dark:to-transparent"></div>
      
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      {/* Animated particles container */}
      <div ref={particlesContainerRef} className="absolute inset-0 overflow-hidden"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tag pill */}
          <div 
            className="inline-flex items-center px-3 py-1 mb-6 rounded-full text-xs font-medium bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 animate-fade-in"
          >
            <span className="flex h-2 w-2 mr-2 rounded-full bg-neon-blue animate-pulse"></span>
            Just launched! Try it now
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight animate-fade-in">
            <span className="relative inline-block">
              Collaborate
              <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-primary dark:bg-neon-blue transform origin-left animate-[grow_1s_ease-out_forwards]"></span>
            </span>
            {" "}in real-time
            <br />
            with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent dark:from-neon-blue dark:to-neon-purple">
              AI by your side
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in animation-delay-500">
            Stop juggling between tools. CollabSync brings your team together in one workspace 
            with smart AI that actually understands your code and helps you ship faster.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20 animate-fade-in animation-delay-1000">
            <a 
              href="#"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary dark:bg-neon-blue text-white font-medium shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Try it free
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a 
              href="#"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 font-medium hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2"
            >
              See how it works
            </a>
          </div>
        </div>
        
        {/* Feature showcase preview */}
        <div className="max-w-6xl mx-auto glassmorphism rounded-3xl shadow-glass overflow-hidden animate-fade-in animation-delay-1500">
          <div className="p-4 border-b border-white/10 bg-black/10 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs opacity-70 ml-2">
              project.js — Working with Alex and Sarah
            </div>
          </div>
          <div className="grid md:grid-cols-3 h-[400px] md:h-[500px]">
            <div className="col-span-2 bg-black/40 p-5 font-mono text-sm text-white/90 overflow-hidden">
              <div className="flex items-center gap-2 opacity-60 mb-4 text-xs">
                <Code size={14} />
                <span>main.js</span>
              </div>
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 mr-4">1</span>
                  <span className="text-blue-400">import</span>
                  <span className="text-white"> React </span>
                  <span className="text-blue-400">from</span>
                  <span className="text-white"> </span>
                  <span className="text-green-300">'react'</span>
                  <span className="text-white">;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">2</span>
                  <span className="text-blue-400">import</span>
                  <span className="text-white"> </span>
                  <span className="text-orange-300">{"{ useState, useEffect }"}</span>
                  <span className="text-white"> </span>
                  <span className="text-blue-400">from</span>
                  <span className="text-white"> </span>
                  <span className="text-green-300">'react'</span>
                  <span className="text-white">;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">3</span>
                </div>
                <div className="flex group">
                  <span className="text-gray-500 mr-4">4</span>
                  <span className="flex items-center">
                    <span className="text-purple-400">const</span>
                    <span className="text-white"> CollabEditor </span>
                    <span className="text-white">= () {"\u007B"}</span>
                    <span className="opacity-0 group-hover:opacity-100 ml-2 text-xs text-neon-purple transition-opacity">
                      <CornerDownRight size={12} className="inline mr-1" /> Sarah is editing
                    </span>
                  </span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">5</span>
                  <span className="pl-4 text-purple-400">const</span>
                  <span className="text-white"> [code, setCode] = </span>
                  <span className="text-yellow-300">useState</span>
                  <span className="text-white">(</span>
                  <span className="text-green-300">''</span>
                  <span className="text-white">);</span>
                </div>
                <div className="flex group relative">
                  <span className="text-gray-500 mr-4">6</span>
                  <span className="pl-4 text-purple-400">const</span>
                  <span className="text-white"> [collaborators, setCollaborators] = </span>
                  <span className="text-yellow-300">useState</span>
                  <span className="text-white">([])</span>
                  <span className="text-white">;</span>
                  <div className="absolute left-[300px] h-full w-40 bg-neon-blue/20 border-l-2 border-neon-blue animate-pulse"></div>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">7</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">8</span>
                  <span className="pl-4 text-purple-400">useEffect</span>
                  <span className="text-white">(() {"\u007B"}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">9</span>
                  <span className="pl-8 text-white">
                    <span className="text-green-300">// Set up realtime connection</span>
                  </span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 mr-4">10</span>
                  <span className="pl-8 text-purple-400">const</span>
                  <span className="text-white"> connection = </span>
                  <span className="text-yellow-300">setupConnection</span>
                  <span className="text-white">();</span>
                </div>
              </div>
            </div>
            <div className="border-l border-white/10 p-4 flex flex-col dark:bg-black/20 bg-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Share2 size={14} />
                  Team
                </h3>
                <button className="text-xs bg-primary/10 dark:bg-neon-blue/20 py-1 px-2 rounded text-primary dark:text-neon-blue">
                  Invite
                </button>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs">AK</div>
                  <div>
                    <div className="text-sm font-medium">Alex Kim</div>
                    <div className="text-xs opacity-60">Working on main.js</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs">SL</div>
                  <div>
                    <div className="text-sm font-medium">Sarah Lee</div>
                    <div className="text-xs opacity-60">Working on main.js</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <Zap size={14} />
                    AI Suggestion
                  </h3>
                </div>
                <div className="glassmorphism rounded-lg p-3 text-sm">
                  <p className="text-xs">Hey, I noticed something:</p>
                  <p className="mt-2 font-medium text-xs">You might want to extract this logic to a custom hook:</p>
                  <div className="mt-2 bg-black/30 rounded p-2 text-xs font-mono">
                    <span className="text-green-300">// Much cleaner this way</span><br/>
                    <span className="text-blue-400">function</span> <span className="text-yellow-300">useTeamSync</span>() {"\u007B"}<br/>
                    <span className="pl-2">...</span><br/>
                    {"\u007D"}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="text-xs bg-neon-blue/80 hover:bg-neon-blue text-white py-1 px-2 rounded transition-colors">
                      Apply
                    </button>
                    <button className="text-xs bg-black/20 hover:bg-black/30 py-1 px-2 rounded transition-colors">
                      Ignore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
