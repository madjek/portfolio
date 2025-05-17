import { Particle } from '@/utils/particle';
import { useEffect, useRef } from 'react';

export const useParticleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArray = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const PARTICLE_DENSITY = 0.00005; // pixels per particle
    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particlesArray.current = [];
      const area = canvas.width * canvas.height;
      const numberOfParticles = Math.min(
        150,
        Math.floor(area * PARTICLE_DENSITY),
      );
      const colors = ['#6366f1', '#8b5cf6', '#3b82f6'];

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.current.push(new Particle(canvas, colors));
      }
    };

    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.current.length; i++) {
        const p1 = particlesArray.current[i];
        p1.update();
        p1.draw(ctx);

        for (let j = i + 1; j < particlesArray.current.length; j++) {
          const p2 = particlesArray.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 - distance / 500})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setupCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return canvasRef;
};
