
import React, { useEffect, useState, useRef } from 'react';

export const Cursor: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let reticleX = 0;
    let reticleY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (coordsRef.current) {
        coordsRef.current.style.transform = `translate(${mouseX + 20}px, ${mouseY + 20}px)`;
      }
    };

    const animate = () => {
      // Smooth interpolation for the larger reticle (magnetic lag)
      reticleX += (mouseX - reticleX) * 0.12;
      reticleY += (mouseY - reticleY) * 0.12;

      if (reticleRef.current) {
        reticleRef.current.style.transform = `translate(${reticleX}px, ${reticleY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('group');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* 1. Signal Core (Fastest) */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 w-1 h-1 bg-[#ff6b00] rounded-full transition-opacity duration-500 ${isClicking ? 'scale-150' : 'scale-100'}`}
      />

      {/* 2. Tactical Readout (Coordinates) */}
      <div 
        ref={coordsRef}
        className="fixed top-0 left-0 mono text-[8px] text-[#ff6b00]/40 font-bold uppercase tracking-tighter transition-opacity duration-500"
      >
        X:{coords.x} <br /> Y:{coords.y}
      </div>

      {/* 3. Tactical Reticle (Lagged & Reactive) */}
      <div 
        ref={reticleRef}
        className={`fixed top-0 left-0 transition-all duration-500 ease-out flex items-center justify-center
          ${isHovering ? 'w-14 h-14 rotate-45 opacity-100' : 'w-10 h-10 rotate-0 opacity-40'}
        `}
      >
        {/* Corner Brackets */}
        <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ff6b00] transition-all duration-300 ${isHovering ? 'scale-125 translate-x-1 translate-y-1' : ''}`} />
        <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-[#ff6b00] transition-all duration-300 ${isHovering ? 'scale-125 -translate-x-1 translate-y-1' : ''}`} />
        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#ff6b00] transition-all duration-300 ${isHovering ? 'scale-125 translate-x-1 -translate-y-1' : ''}`} />
        <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ff6b00] transition-all duration-300 ${isHovering ? 'scale-125 -translate-x-1 -translate-y-1' : ''}`} />

        {/* Inner Crosshair (Only on hover) */}
        <div className={`w-full h-[1px] bg-[#ff6b00]/20 absolute transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`h-full w-[1px] bg-[#ff6b00]/20 absolute transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Expanding Pulse on Click */}
        {isClicking && (
          <div className="absolute inset-0 border border-[#ff6b00] rounded-full animate-ping opacity-40" />
        )}
      </div>

      {/* 4. Ambient Scanning Shadow (Subtle Glow) */}
      <div 
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-[#ff6b00]/5 blur-[80px] rounded-full transition-transform duration-700 ease-out opacity-20"
        style={{ transform: `translate(${coords.x - 200}px, ${coords.y - 200}px)` }}
      />
    </div>
  );
};
