
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)] animate-pulse"></div>
      
      {/* Enhanced Neural Network Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-cyan-400/30 to-transparent transform rotate-45 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-0.5 bg-gradient-to-l from-blue-400/30 to-transparent transform -rotate-45 animate-pulse delay-1200"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 border border-cyan-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 border border-blue-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 border border-cyan-300/30 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              {text}
            </span>
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]">
            Crafting intelligent solutions with Python and cutting-edge AI technologies. 
            Building the future, one algorithm at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fade-in_0.8s_ease-out_1s_forwards]">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ArrowDown className="text-cyan-400 animate-pulse" size={24} />
          <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
