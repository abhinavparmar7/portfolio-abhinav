
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    let particleId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add particle trail
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1
      };
      
      setParticles(prev => [...prev.slice(-8), newParticle]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Fade out particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: particle.opacity - 0.1
        })).filter(particle => particle.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate3d(${mousePosition.x - 12}px, ${mousePosition.y - 12}px, 0)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border-2 border-cyan-400 transition-all duration-300 ${
            isHovering ? 'scale-150 bg-cyan-400/20' : 'scale-100'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
          }}
        />
      </div>

      {/* Cursor glow effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate3d(${mousePosition.x - 25}px, ${mousePosition.y - 25}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div
          className={`w-12 h-12 rounded-full bg-gradient-radial from-cyan-400/20 to-transparent transition-all duration-300 ${
            isHovering ? 'scale-200 opacity-100' : 'scale-100 opacity-60'
          }`}
        />
      </div>

      {/* Particle trail */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            transform: `translate3d(${particle.x - 2}px, ${particle.y - 2}px, 0)`,
            opacity: particle.opacity * (1 - index * 0.1)
          }}
        >
          <div className="w-1 h-1 bg-cyan-400 rounded-full" />
        </div>
      ))}
    </>
  );
};

export default CustomCursor;
