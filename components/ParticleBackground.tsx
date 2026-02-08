import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      targetAlpha: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5 + 0.5; // Small, subtle particles
        this.speedX = Math.random() * 0.4 - 0.2; 
        this.speedY = Math.random() * 0.4 - 0.2;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.targetAlpha = this.alpha;
      }

      update(w: number, h: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction: Gentle avoidance
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;
        
        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const repulsion = force * 2; // Strength
            const angle = Math.atan2(dy, dx);
            
            this.x -= Math.cos(angle) * repulsion;
            this.y -= Math.sin(angle) * repulsion;
        }

        // Screen wrapping
        if (this.x > w) this.x = 0;
        if (this.x < 0) this.x = w;
        if (this.y > h) this.y = 0;
        if (this.y < 0) this.y = h;
        
        // Twinkle effect (randomly changing alpha target)
        if (Math.random() < 0.01) {
            this.targetAlpha = Math.random() * 0.6 + 0.1;
        }
        this.alpha += (this.targetAlpha - this.alpha) * 0.05;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }
    }

    const initParticles = (w: number, h: number) => {
      particles = [];
      const particleCount = (w * h) / 12000; // Adjust density here
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      
      initParticles(w, h);
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      // Clear with logical dimensions since we scaled the context
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      particles.forEach(p => {
        p.update(rect.width, rect.height);
        p.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial calls
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-30 mix-blend-overlay opacity-70"
    />
  );
};