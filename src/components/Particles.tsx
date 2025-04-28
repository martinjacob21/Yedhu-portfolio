import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  className?: string;
}

export default function Particles({ className }: ParticleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const createParticle = () => {
      const size = Math.random() * 5 + 2;
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      particle.style.position = 'absolute';
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
      particle.style.pointerEvents = 'none';
      
      container.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
        }
      }, 7000);
    };
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }
    
    // Create particles at intervals
    const interval = setInterval(createParticle, 500);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <motion.div 
      ref={containerRef}
      className={`absolute top-0 left-0 w-full h-full overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
