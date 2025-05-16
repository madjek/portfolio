import { Particle } from '@/components/Particle';
import { useEffect, useRef } from 'react';

export const useParticleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 10));
    const colors = ['#6366f1', '#8b5cf6', '#3b82f6'];

    // Create particles
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(canvas!, colors));
      }
    }

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(ctx!);

        // Connect particles
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(99, 102, 241, ${0.2 - distance / 500})`;
            ctx!.lineWidth = 1;
            ctx!.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx!.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx!.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return canvasRef;
};
