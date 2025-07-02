
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-cyan-500/20 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              Abhinav Parmar
            </div>
            <p className="text-muted-foreground">Python & GenAI Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              © {new Date().getFullYear()} Abhinav Parmar. All rights reserved.
            </p>
            <p className="text-muted-foreground/80 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            Designed and developed with ❤️ for innovation and creativity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
