
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Terminal, Users, PlayCircle, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const CodePreview: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  
  const tabs = ['Code Editor', 'Terminal', 'Live Preview'];
  
  const codeSteps = [
    {
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,
      cursor: { line: 7, ch: 15 },
      user: 'You'
    },
    {
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Current Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,
      cursor: { line: 7, ch: 24 },
      user: 'Alex'
    },
    {
      code: `import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countHistory, setCountHistory] = useState([]);
  
  useEffect(() => {
    setCountHistory([...countHistory, count]);
  }, [count]);
  
  return (
    <div className="counter">
      <h2>Current Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,
      cursor: { line: 4, ch: 42 },
      user: 'Sarah'
    }
  ];
  
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % codeSteps.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [isPlaying, codeSteps.length]);
  
  const formatCode = (code: string, cursor: { line: number, ch: number }) => {
    const lines = code.split('\n');
    
    return lines.map((line, i) => {
      // Add cursor to the specific line
      if (i === cursor.line) {
        const before = line.substring(0, cursor.ch);
        const after = line.substring(cursor.ch);
        
        return (
          <div key={i} className="flex">
            <span className="text-gray-500 mr-4 select-none">{i + 1}</span>
            <span>
              {before}
              <span className="animate-pulse border-r-2 border-neon-blue mx-[1px]"></span>
              {after}
            </span>
          </div>
        );
      }
      
      return (
        <div key={i} className="flex">
          <span className="text-gray-500 mr-4 select-none">{i + 1}</span>
          <span>{line}</span>
        </div>
      );
    });
  };
  
  const currentCodeStep = codeSteps[currentStep];

  return (
    <section id="code-preview" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-primary/5 dark:bg-transparent -z-10"></div>
      <div className="absolute top-40 left-5 w-24 h-24 bg-neon-blue/30 rounded-full blur-3xl opacity-30 dark:opacity-50 -z-10"></div>
      <div className="absolute bottom-40 right-5 w-40 h-40 bg-neon-purple/30 rounded-full blur-3xl opacity-30 dark:opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 dark:bg-neon-blue/20 text-primary dark:text-neon-blue mb-4">
            Seamless Experience
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display tracking-tight">
            Real-time <span className="text-primary dark:text-neon-blue">collaborative</span> coding
          </h2>
          <p className="text-lg text-muted-foreground">
            See how CollabSync enables multiple team members to work on the same code simultaneously with real-time updates and presence.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto glassmorphism-light dark:glassmorphism-dark rounded-2xl overflow-hidden shadow-glass animate-fade-in">
          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 p-3 bg-black/5 dark:bg-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 text-xs rounded-md transition-colors ${
                    activeTab === index 
                      ? 'bg-black/10 dark:bg-white/10' 
                      : 'hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-black/10 dark:bg-white/10 rounded-full px-2 py-0.5">
                <Users size={12} className="mr-1" />
                <span className="text-xs">3 online</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4">
            {/* Code editor area */}
            <div className="md:col-span-3 bg-white dark:bg-black/50 p-4 font-mono text-sm overflow-auto h-[450px]">
              {formatCode(currentCodeStep.code, currentCodeStep.cursor)}
            </div>
            
            {/* Sidebar */}
            <div className="border-l border-black/5 dark:border-white/10 p-4 flex flex-col">
              <h3 className="text-sm font-medium mb-3">Collaborators</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                    You
                  </div>
                  <div>
                    <div className="text-sm font-medium">You</div>
                    <div className="text-xs opacity-60">Online</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                    AL
                  </div>
                  <div>
                    <div className="text-sm font-medium">Alex Lee</div>
                    <div className="text-xs opacity-60">Online</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                    SJ
                  </div>
                  <div>
                    <div className="text-sm font-medium">Sarah Jones</div>
                    <div className="text-xs opacity-60">
                      <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse mr-1 inline-block"></span>
                      Typing...
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-sm font-medium mb-2">Playback Controls</h3>
                <div className="flex items-center gap-2">
                  <button 
                    className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5"
                    onClick={() => setCurrentStep((prev) => (prev - 1 + codeSteps.length) % codeSteps.length)}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  
                  <button 
                    className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause size={18} /> : <PlayCircle size={18} />}
                  </button>
                  
                  <button 
                    className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5"
                    onClick={() => setCurrentStep((prev) => (prev + 1) % codeSteps.length)}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
                <div className="text-xs mt-2">
                  Currently editing: <span className="font-medium">{currentCodeStep.user}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodePreview;
