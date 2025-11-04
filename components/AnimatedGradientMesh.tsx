'use client';

import { useEffect, useRef } from 'react';

const AnimatedGradientMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class GradientOrb {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      color: string;
      speed: number;
      angle: number;

      constructor(x: number, y: number, radius: number, color: string, speed: number) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        this.x = this.baseX + Math.sin(time * this.speed) * 100;
        this.y = this.baseY + Math.cos(time * this.speed * 0.8) * 100;
        this.angle += 0.001;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const orbs: GradientOrb[] = [
      new GradientOrb(canvas.width * 0.2, canvas.height * 0.3, 400, 'rgba(14, 165, 233, 0.15)', 0.3),
      new GradientOrb(canvas.width * 0.8, canvas.height * 0.4, 450, 'rgba(168, 85, 247, 0.12)', 0.25),
      new GradientOrb(canvas.width * 0.5, canvas.height * 0.6, 380, 'rgba(236, 72, 153, 0.1)', 0.35),
      new GradientOrb(canvas.width * 0.7, canvas.height * 0.2, 420, 'rgba(59, 130, 246, 0.13)', 0.28),
      new GradientOrb(canvas.width * 0.3, canvas.height * 0.7, 400, 'rgba(6, 182, 212, 0.11)', 0.32),
    ];

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.005;

      orbs.forEach(orb => {
        orb.update(time);
        orb.draw(ctx);
      });

      // Add blend mode for smooth color mixing
      ctx.globalCompositeOperation = 'screen';

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      style={{ filter: 'blur(60px)' }}
    />
  );
};

export default AnimatedGradientMesh;
