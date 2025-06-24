
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              Abhinav Parmar
            </div>
            <p className="text-gray-400">Python & GenAI Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              © {new Date().getFullYear()} Abhinav Parmar. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Designed and developed with ❤️ for innovation and creativity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
