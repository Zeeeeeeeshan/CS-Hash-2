
import React from 'react';
import { Code, Users, Zap, Shield, GitBranch, Workflow } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <div 
      className="glassmorphism-light dark:glassmorphism-dark rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
      style={{ 
        animationDelay: `${100 * index}ms`,
      }}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 dark:bg-white/5 text-primary dark:text-neon-blue group-hover:scale-110 transform transition-transform duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: <Code size={24} />,
      title: "Real-time Collaboration",
      description: "Work together in real-time with your team. See cursors, edits, and changes instantly as they happen."
    },
    {
      icon: <Zap size={24} />,
      title: "AI-Powered Insights",
      description: "Get smart suggestions that actually understand your code. Fix bugs faster and write better code with contextual help."
    },
    {
      icon: <Users size={24} />,
      title: "Team Workflows",
      description: "Connect with the tools your team already uses. Seamlessly integrate with GitHub, Slack, and more."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "Keep your code safe with end-to-end encryption and granular access controls that meet enterprise requirements."
    },
    {
      icon: <GitBranch size={24} />,
      title: "Version Control",
      description: "Connect to GitHub, GitLab or Bitbucket. Create branches, make commits, and review PRs without switching contexts."
    },
    {
      icon: <Workflow size={24} />,
      title: "Custom Environment",
      description: "Make it yours with custom themes, keyboard shortcuts, and extensions that boost your productivity."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent dark:from-neon-purple/20 dark:to-transparent blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-accent/10 to-transparent dark:from-neon-blue/20 dark:to-transparent blur-3xl opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 dark:bg-neon-blue/20 text-primary dark:text-neon-blue mb-4">
            What You Get
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display tracking-tight">
            Everything needed to <span className="text-primary dark:text-neon-blue">ship faster</span> together
          </h2>
          <p className="text-lg text-muted-foreground">
            We've packed CollabSync with tools that eliminate the friction in collaborative development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in [view-timeline-name:--reveal] [view-timeline-axis:block] [animation-timeline:--reveal] [animation-range:entry 10%_30%]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
