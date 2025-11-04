'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaCode, FaTools, FaVial, FaRocket, FaChartLine, FaSync } from 'react-icons/fa';

const DevOpsStage = {
  PLAN: 0,
  CODE: 1,
  BUILD: 2,
  TEST: 3,
  RELEASE: 4,
  DEPLOY: 5,
  OPERATE: 6,
  MONITOR: 7,
};

export default function InteractiveDevOpsFlow() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const stages = [
    { name: 'Plan', icon: FaSync, color: '#3b82f6', desc: 'Strategic Planning' },
    { name: 'Code', icon: FaCode, color: '#8b5cf6', desc: 'Development' },
    { name: 'Build', icon: FaTools, color: '#ec4899', desc: 'Compilation' },
    { name: 'Test', icon: FaVial, color: '#f59e0b', desc: 'Quality Assurance' },
    { name: 'Release', icon: FaRocket, color: '#10b981', desc: 'Release Management' },
    { name: 'Deploy', icon: FaRocket, color: '#06b6d4', desc: 'Deployment' },
    { name: 'Operate', icon: FaChartLine, color: '#6366f1', desc: 'Operations' },
    { name: 'Monitor', icon: FaChartLine, color: '#8b5cf6', desc: 'Monitoring' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [stages.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let animationId: number;
    let progress = 0;

    class Particle {
      x: number;
      y: number;
      angle: number;
      speed: number;
      radius: number;
      color: string;
      alpha: number;

      constructor(angle: number, color: string) {
        this.angle = angle;
        this.speed = 0.02;
        this.radius = 3;
        this.color = color;
        this.alpha = 1;
        this.x = 0;
        this.y = 0;
      }

      update(centerX: number, centerY: number, radius: number) {
        this.x = centerX + Math.cos(this.angle) * radius;
        this.y = centerY + Math.sin(this.angle) * radius;
        this.angle += this.speed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      particles.push(new Particle(angle, stages[i].color));
    }

    const animate = () => {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.35;

      // Draw outer ring
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw connections between stages
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < stages.length; i++) {
        const angle1 = (i / stages.length) * Math.PI * 2 - Math.PI / 2;
        const angle2 = ((i + 1) / stages.length) * Math.PI * 2 - Math.PI / 2;
        const x1 = centerX + Math.cos(angle1) * radius;
        const y1 = centerY + Math.sin(angle1) * radius;
        const x2 = centerX + Math.cos(angle2) * radius;
        const y2 = centerY + Math.sin(angle2) * radius;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Draw progress arc
      const progressAngle = (progress / 100) * Math.PI * 2;
      const gradient = ctx.createLinearGradient(
        centerX - radius,
        centerY,
        centerX + radius,
        centerY
      );
      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(0.5, '#8b5cf6');
      gradient.addColorStop(1, '#ec4899');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + progressAngle);
      ctx.stroke();

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update(centerX, centerY, radius);
        particle.alpha = index === activeStage ? 1 : 0.3;
        particle.draw(ctx);
      });

      // Draw center glow
      const centerGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 0.3
      );
      centerGradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
      centerGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = centerGradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      progress = (progress + 0.5) % 100;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [activeStage, stages]);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Continuous DevOps Flow
            </span>
          </h2>
          <p className="text-xl text-blue-100/70 max-w-3xl mx-auto">
            Kesintisiz entegrasyon ve dağıtım döngüsü ile yazılım geliştirme sürecinizi hızlandırın
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Canvas visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />

            {/* Stage indicators */}
            <div className="absolute inset-0">
              {stages.map((stage, index) => {
                const angle = (index / stages.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 45; // percentage
                const x = 50 + Math.cos(angle) * radius;
                const y = 50 + Math.sin(angle) * radius;
                const Icon = stage.icon;

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => setHoveredStage(index)}
                    onMouseLeave={() => setHoveredStage(null)}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 cursor-pointer ${
                        activeStage === index ? 'scale-125' : 'scale-100'
                      }`}
                      style={{
                        backgroundColor: stage.color,
                        boxShadow: activeStage === index ? `0 0 30px ${stage.color}` : 'none',
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stage details */}
          <div className="space-y-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStage === index || hoveredStage === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white/10 border-white/30 shadow-2xl'
                      : 'bg-white/5 border-white/10'
                  }`}
                  style={{
                    boxShadow: isActive ? `0 0 30px ${stage.color}40` : 'none',
                  }}
                  onMouseEnter={() => setHoveredStage(index)}
                  onMouseLeave={() => setHoveredStage(null)}
                  onClick={() => setActiveStage(index)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: stage.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{stage.name}</h3>
                      <p className="text-sm text-blue-100/70">{stage.desc}</p>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                      }`}
                      style={{ backgroundColor: stage.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Faster Deployment', value: '10x', color: 'from-blue-500 to-cyan-500' },
            { label: 'Reduced Errors', value: '95%', color: 'from-purple-500 to-pink-500' },
            { label: 'Uptime', value: '99.9%', color: 'from-green-500 to-emerald-500' },
            { label: 'Time Saved', value: '87%', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center"
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-blue-100/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
