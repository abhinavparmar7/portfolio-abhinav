
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import FuturisticEffects from './FuturisticEffects';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Abhinav Parmar — Python & GenAI Developer";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-container">
      {/* Futuristic Background Effects */}
      <FuturisticEffects />
      
      {/* Enhanced Matrix Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black matrix-bg"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)] animate-electromagnetic"></div>
      
      {/* Holographic Grid Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 cyberpunk-glow" style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 25px 25px',
          animation: 'grid-float 20s ease-in-out infinite, hologram-glitch 5s ease-in-out infinite'
        }}></div>
      </div>

      {/* Advanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full cyberpunk-glow animate-quantum-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `rgba(${Math.random() > 0.5 ? '6,182,212' : '59,130,246'}, 0.7)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Ultra-Enhanced Neural Network */}
      <div className="absolute inset-0 opacity-30">
        {/* Main Nodes */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-cyan-400 rounded-full animate-neural-pulse cyberpunk-glow"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-neural-pulse cyberpunk-glow" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-5 h-5 bg-purple-400 rounded-full animate-neural-pulse cyberpunk-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-neural-pulse cyberpunk-glow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-5 h-5 bg-emerald-400 rounded-full animate-neural-pulse cyberpunk-glow" style={{animationDelay: '2s'}}></div>
        
        {/* Connecting Lines with Animation */}
        <svg className="absolute inset-0 w-full h-full" style={{animation: 'hologram-glitch 3s ease-in-out infinite'}}>
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6,182,212,0.6)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.8)" />
              <stop offset="100%" stopColor="rgba(147,51,234,0.6)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <line x1="25%" y1="25%" x2="75%" y2="50%" stroke="url(#lineGradient1)" strokeWidth="2" filter="url(#glow)" className="animate-data-stream" />
          <line x1="75%" y1="75%" x2="33%" y2="67%" stroke="url(#lineGradient1)" strokeWidth="2" filter="url(#glow)" className="animate-data-stream" style={{animationDelay: '1s'}} />
          <line x1="50%" y1="50%" x2="67%" y2="33%" stroke="url(#lineGradient1)" strokeWidth="2" filter="url(#glow)" className="animate-data-stream" style={{animationDelay: '2s'}} />
        </svg>
      </div>

      {/* 3D Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-12 h-12 neon-border animate-cube-3d rotate-3d"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 neon-border animate-cube-3d rotate-3d" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 neon-border animate-cube-3d rotate-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-14 h-14 neon-border animate-cube-3d rotate-3d" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Morphing Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-morph-shape cyberpunk-glow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-morph-shape cyberpunk-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 animate-morph-shape cyberpunk-glow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Electromagnetic Field Visualizations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/5 left-1/5 w-40 h-40 animate-electromagnetic"></div>
        <div className="absolute bottom-1/4 right-1/5 w-32 h-32 animate-electromagnetic" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-2/3 w-28 h-28 animate-electromagnetic" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content with Holographic Effects */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto perspective-container">
        <div className="mb-8 rotate-3d">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transform hover:scale-105 transition-all duration-500 perspective-container">
            <span className="holographic-text animate-holo-text cyberpunk-glow">
              {text}
            </span>
            <span className="animate-pulse text-cyan-400">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 animate-[holo-text_1.5s_ease-out_0.5s_forwards] cyberpunk-glow">
            Crafting intelligent solutions with Python and cutting-edge AI technologies. 
            Building the future, one algorithm at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[holo-text_1.5s_ease-out_1s_forwards]">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-2 cyberpunk-glow neon-border animate-neural-pulse"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cyberpunk-glow neon-border animate-hologram-glitch"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Ultra-Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce perspective-container">
        <div className="flex flex-col items-center space-y-2 cyberpunk-glow animate-neural-pulse">
          <ArrowDown className="text-cyan-400 animate-pulse" size={24} />
          <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 animate-data-stream"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-quantum-particles"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
