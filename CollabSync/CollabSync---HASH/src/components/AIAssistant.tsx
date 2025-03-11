
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Zap, Check, X, MessageSquare, Lightbulb, AlertCircle, ArrowRightCircle } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const { theme } = useTheme();
  const [activeChat, setActiveChat] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const chatScenarios = [
    {
      title: "Code Review",
      messages: [
        { sender: 'user', content: "Can you check if this auth function has any security issues?" },
        { sender: 'ai', content: "Looking at your auth function, I spotted a few things:\n\n1. You're using an outdated hashing method\n2. There's no rate limiting for login attempts\n3. Token doesn't have an expiration\n\nI'd recommend switching to bcrypt, adding rate limiting middleware, and setting proper JWT expiration. Need help implementing any of these?" }
      ]
    },
    {
      title: "Bug Fix",
      messages: [
        { sender: 'user', content: "My React component is re-rendering too much. Any idea why?" },
        { sender: 'ai', content: "I think I see the issue. This is usually caused by:\n\n1. Missing dependency arrays in useEffect\n2. State updates happening during render\n3. Creating new objects/functions on every render\n\nLooking at your code, you're creating a new callback function on every render. Try wrapping it in useCallback or moving it outside the component." }
      ]
    },
    {
      title: "Feature Ideas",
      messages: [
        { sender: 'user', content: "I need to sync data between users in real-time. What's the best approach?" },
        { sender: 'ai', content: "For real-time syncing between users, you've got a few solid options:\n\n1. Socket.io - great for most use cases, reliable bidirectional comms\n2. Firebase Realtime DB - if you want something managed and easy to set up\n3. Supabase Realtime - PostgreSQL with real-time capabilities\n\nFor your specific case, I'd probably go with Socket.io - it'll integrate nicely with your existing stack and give you the control you need." }
      ]
    }
  ];

  useEffect(() => {
    if (activeChat !== null) {
      const aiMessage = chatScenarios[activeChat].messages.find(m => m.sender === 'ai')?.content || '';
      
      if (currentIndex < aiMessage.length) {
        setIsTyping(true);
        const timer = setTimeout(() => {
          setCurrentMessage(aiMessage.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 15); // Faster typing
        
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
      }
    }
  }, [activeChat, currentIndex]);

  useEffect(() => {
    // Reset typing animation when changing chat
    setCurrentIndex(0);
    setCurrentMessage('');
  }, [activeChat]);

  return (
    <section id="ai-assistant" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-neon-blue/5 dark:to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 dark:bg-neon-blue/20 text-primary dark:text-neon-blue mb-4">
            Smart Assistant
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display tracking-tight">
            Your coding <span className="text-primary dark:text-neon-blue">sidekick</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant help with bugs, code reviews, and feature ideas while you work. 
            It's like having a senior dev looking over your shoulder, but less awkward.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-6 animate-fade-in">
          {/* Chat scenarios sidebar */}
          <div className="md:col-span-4">
            <div className="glassmorphism-light dark:glassmorphism-dark rounded-2xl overflow-hidden shadow-glass h-full">
              <div className="p-4 border-b border-black/5 dark:border-white/10">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Zap size={18} className="text-primary dark:text-neon-blue" />
                  AI Capabilities
                </h3>
              </div>
              <div className="divide-y divide-black/5 dark:divide-white/10">
                {chatScenarios.map((scenario, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 transition-colors duration-200 flex items-start gap-3 ${
                      activeChat === index 
                        ? 'bg-primary/10 dark:bg-neon-blue/10' 
                        : 'hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                    onClick={() => setActiveChat(index)}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      index === 0 ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                      index === 1 ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                      'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                      {index === 0 ? <Check size={18} /> : 
                       index === 1 ? <AlertCircle size={18} /> :
                       <Lightbulb size={18} />}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{scenario.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {scenario.messages[0].content}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Chat interface */}
          <div className="md:col-span-8">
            <div className="glassmorphism-light dark:glassmorphism-dark rounded-2xl overflow-hidden shadow-glass h-full flex flex-col">
              <div className="p-4 border-b border-black/5 dark:border-white/10 flex justify-between items-center">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <MessageSquare size={18} className="text-primary dark:text-neon-blue" />
                  {activeChat !== null ? chatScenarios[activeChat].title : 'AI Chat'}
                </h3>
                <button className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200">
                  <X size={18} />
                </button>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
                {activeChat !== null && chatScenarios[activeChat].messages.map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        message.sender === 'user' 
                          ? 'bg-primary text-white dark:bg-neon-blue' 
                          : 'bg-secondary text-foreground dark:bg-secondary'
                      } ${message.sender === 'ai' && index === chatScenarios[activeChat].messages.length - 1 ? 'ai-message' : ''}`}
                    >
                      {message.sender === 'ai' && index === chatScenarios[activeChat].messages.length - 1 
                        ? <div className="whitespace-pre-line">{currentMessage}</div>
                        : <div className="whitespace-pre-line">{message.content}</div>
                      }
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-center gap-1 px-4 py-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary dark:bg-neon-blue rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-primary dark:bg-neon-blue rounded-full animate-pulse animation-delay-500"></div>
                    <div className="w-1.5 h-1.5 bg-primary dark:bg-neon-blue rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="ml-1">Typing...</span>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-black/5 dark:border-white/10">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask anything about your code..." 
                    className="w-full px-4 py-2 pr-10 rounded-xl bg-white/20 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-neon-blue transition-all duration-200"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary dark:text-neon-blue hover:text-primary/80 dark:hover:text-neon-blue/80 transition-colors duration-200">
                    <ArrowRightCircle size={18} />
                  </button>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Your AI assistant can help with code reviews, bugs, and feature ideas. Just ask!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
