
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    opacity: number;
    vx: number;
    vy: number;
    size: number;
  }>>([]);

  useEffect(() => {
    let particleId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add particle trail with random velocity
      const newParticle = {
        id: particleId++,
        x: e.clientX + (Math.random() - 0.5) * 10,
        y: e.clientY + (Math.random() - 0.5) * 10,
        opacity: 1,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1
      };
      
      setParticles(prev => [...prev.slice(-15), newParticle]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          opacity: particle.opacity - 0.05,
          vx: particle.vx * 0.98,
          vy: particle.vy * 0.98
        })).filter(particle => particle.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate3d(${mousePosition.x - 16}px, ${mousePosition.y - 16}px, 0)`,
          transition: isHovering ? 'transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)' : 'transform 0.05s ease-out'
        }}
      >
        <div
          className={`relative rounded-full border-2 transition-all duration-300 ${
            isClicking 
              ? 'w-4 h-4 border-purple-400 bg-purple-400/40 scale-75' 
              : isHovering 
                ? 'w-12 h-12 border-cyan-300 bg-cyan-300/20 scale-125' 
                : 'w-8 h-8 border-cyan-400 bg-cyan-400/10'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 30px rgba(6, 182, 212, 0.8), inset 0 0 20px rgba(6, 182, 212, 0.3)' 
              : '0 0 20px rgba(6, 182, 212, 0.5)',
            animation: isHovering ? 'pulse 1.5s infinite' : 'none'
          }}
        >
          {/* Inner dot */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
            isClicking ? 'w-1 h-1 bg-purple-400' : 'w-2 h-2 bg-cyan-400'
          }`} />
        </div>
      </div>

      {/* Cursor glow effect with multiple layers */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate3d(${mousePosition.x - 30}px, ${mousePosition.y - 30}px, 0)`,
          transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        <div
          className={`w-16 h-16 rounded-full transition-all duration-500 ${
            isHovering ? 'scale-300 opacity-100' : 'scale-100 opacity-40'
          }`}
          style={{
            background: isHovering 
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
            animation: isHovering ? 'pulse 2s infinite' : 'none'
          }}
        />
      </div>

      {/* Secondary glow layer */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          transform: `translate3d(${mousePosition.x - 50}px, ${mousePosition.y - 50}px, 0)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div
          className={`w-24 h-24 rounded-full transition-all duration-700 ${
            isHovering ? 'scale-200 opacity-60' : 'scale-50 opacity-20'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
            filter: 'blur(8px)'
          }}
        />
      </div>

      {/* Enhanced particle trail */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="fixed top-0 left-0 pointer-events-none z-[9996]"
          style={{
            transform: `translate3d(${particle.x - particle.size/2}px, ${particle.y - particle.size/2}px, 0)`,
            opacity: particle.opacity * (1 - index * 0.05)
          }}
        >
          <div 
            className="bg-cyan-400 rounded-full animate-pulse"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: `0 0 ${particle.size * 3}px rgba(6, 182, 212, ${particle.opacity * 0.8})`,
              background: `radial-gradient(circle, rgba(6, 182, 212, ${particle.opacity}) 0%, rgba(147, 51, 234, ${particle.opacity * 0.5}) 100%)`
            }}
          />
        </div>
      ))}

      {/* Orbital rings when hovering */}
      {isHovering && (
        <>
          <div
            className="fixed top-0 left-0 pointer-events-none z-[9995]"
            style={{
              transform: `translate3d(${mousePosition.x - 40}px, ${mousePosition.y - 40}px, 0)`,
            }}
          >
            <div className="w-20 h-20 border border-cyan-300/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <div
            className="fixed top-0 left-0 pointer-events-none z-[9995]"
            style={{
              transform: `translate3d(${mousePosition.x - 35}px, ${mousePosition.y - 35}px, 0)`,
            }}
          >
            <div className="w-16 h-16 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
          </div>
        </>
      )}
    </>
  );
};

export default CustomCursor;
