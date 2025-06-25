
import React, { useEffect, useState } from 'react';

const FuturisticEffects = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate quantum particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute w-px h-20 bg-gradient-to-b from-cyan-400 to-transparent animate-matrix-rain"
            style={{
              left: `${(i * 5) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Scanning Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-lines" />
        <div 
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-lines"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Quantum Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400 animate-quantum-particles"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Electromagnetic Fields */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 animate-electromagnetic" />
        <div 
          className="absolute top-3/4 right-1/4 w-24 h-24 animate-electromagnetic"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 left-3/4 w-20 h-20 animate-electromagnetic"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* 3D Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-cyan-400 animate-cube-3d" />
        <div 
          className="absolute bottom-20 left-20 w-12 h-12 border-2 border-blue-400 animate-cube-3d"
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-10 h-10 border-2 border-purple-400 animate-cube-3d"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Neural Network Nodes */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-1/3 left-1/5 w-4 h-4 bg-cyan-400 rounded-full animate-neural-pulse" />
        <div 
          className="absolute top-2/3 right-1/5 w-3 h-3 bg-blue-400 rounded-full animate-neural-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-5 h-5 bg-purple-400 rounded-full animate-neural-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-neural-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Morphing Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-morph-shape" />
        <div 
          className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-morph-shape"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Data Streams */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-data-stream"
            style={{
              top: `${10 + i * 10}%`,
              left: '0%',
              right: '0%',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FuturisticEffects;
