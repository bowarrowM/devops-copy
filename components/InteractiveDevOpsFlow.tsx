'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaCode, FaTools, FaVial, FaRocket, FaChartLine, FaSync, FaServer } from 'react-icons/fa';

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
    { name: 'Deploy', icon: FaServer, color: '#06b6d4', desc: 'Deployment' },
    { name: 'Release', icon: FaRocket, color: '#10b981', desc: 'Release Management' },
    { name: 'Operate', icon: FaChartLine, color: '#6366f1', desc: 'Operations' },
    { name: 'Monitor', icon: FaChartLine, color: '#8b5cf6', desc: 'Monitoring' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [stages.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class FlowParticle {
      angle: number;
      speed: number;
      radius: number;
      size: number;
      colorIndex: number;
      opacity: number;

      constructor(startAngle: number, colorIndex: number) {
        this.angle = startAngle;
        this.speed = 0.008;
        this.radius = 0;
        this.size = 4;
        this.colorIndex = colorIndex;
        this.opacity = 1;
      }

      update(centerRadius: number) {
        this.angle += this.speed;
        this.radius = centerRadius;

        // Keep angle within 0-2π range
        if (this.angle > Math.PI * 2) {
          this.angle -= Math.PI * 2;
        }
      }

      draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, activeColor: string) {
        const x = centerX + Math.cos(this.angle) * this.radius;
        const y = centerY + Math.sin(this.angle) * this.radius;

        // Determine if particle is near active stage
        const stageAngle = (this.colorIndex / stages.length) * Math.PI * 2 - Math.PI / 2;
        const angleDiff = Math.abs(this.angle - stageAngle);
        const isNearActive = angleDiff < 0.3;

        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Use active stage color with glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 3);
        gradient.addColorStop(0, activeColor);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.shadowBlur = isNearActive ? 20 : 10;
        ctx.shadowColor = activeColor;

        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create multiple particles for flowing effect
    const particles: FlowParticle[] = [];
    for (let i = 0; i < 24; i++) {
      const startAngle = (i / 24) * Math.PI * 2;
      const colorIndex = Math.floor((i / 24) * stages.length);
      particles.push(new FlowParticle(startAngle, colorIndex));
    }

    const animate = () => {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.35;

      // Draw outer ring with gradient based on active stage
      const ringGradient = ctx.createLinearGradient(
        centerX - radius,
        centerY,
        centerX + radius,
        centerY
      );

      // Create gradient that follows active stage
      const activeColor = stages[activeStage].color;
      ringGradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
      ringGradient.addColorStop(0.5, activeColor + '40');
      ringGradient.addColorStop(1, 'rgba(139, 92, 246, 0.2)');

      ctx.strokeStyle = ringGradient;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw connection lines between stages with color
      for (let i = 0; i < stages.length; i++) {
        const angle1 = (i / stages.length) * Math.PI * 2 - Math.PI / 2;
        const angle2 = ((i + 1) / stages.length) * Math.PI * 2 - Math.PI / 2;
        const x1 = centerX + Math.cos(angle1) * radius;
        const y1 = centerY + Math.sin(angle1) * radius;
        const x2 = centerX + Math.cos(angle2) * radius;
        const y2 = centerY + Math.sin(angle2) * radius;

        // Highlight active connection
        const isActiveConnection = i === activeStage || i === (activeStage - 1 + stages.length) % stages.length;

        ctx.strokeStyle = isActiveConnection ? activeColor + '80' : 'rgba(139, 92, 246, 0.15)';
        ctx.lineWidth = isActiveConnection ? 3 : 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Draw active stage arc with animation
      const activeAngleStart = (activeStage / stages.length) * Math.PI * 2 - Math.PI / 2;
      const activeAngleEnd = ((activeStage + 1) / stages.length) * Math.PI * 2 - Math.PI / 2;

      ctx.strokeStyle = activeColor;
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.shadowBlur = 15;
      ctx.shadowColor = activeColor;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, activeAngleStart, activeAngleEnd);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Update and draw flowing particles with active stage color
      particles.forEach((particle, index) => {
        particle.update(radius);
        particle.draw(ctx, centerX, centerY, activeColor);
      });

      // Draw center glow with active color
      const centerGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 0.4
      );
      centerGradient.addColorStop(0, activeColor + '20');
      centerGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.4, 0, Math.PI * 2);
      ctx.fill();

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
                const isActive = activeStage === index;
                const isHovered = hoveredStage === index;

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
                    onClick={() => setActiveStage(index)}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      scale: isActive ? 1.3 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 cursor-pointer`}
                      style={{
                        backgroundColor: stage.color,
                        boxShadow: isActive || isHovered ? `0 0 40px ${stage.color}` : `0 0 20px ${stage.color}80`,
                      }}
                      animate={{
                        boxShadow: isActive
                          ? [`0 0 20px ${stage.color}`, `0 0 40px ${stage.color}`, `0 0 20px ${stage.color}`]
                          : `0 0 20px ${stage.color}80`,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isActive ? Infinity : 0,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stage details */}
          <div className="space-y-4">
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
                  className={`p-5 rounded-2xl backdrop-blur-xl border transition-all duration-300 cursor-pointer ${
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
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: stage.color }}
                      animate={{
                        scale: isActive ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: isActive ? Infinity : 0,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{stage.name}</h3>
                      <p className="text-sm text-blue-100/70">{stage.desc}</p>
                    </div>
                    <motion.div
                      className={`w-3 h-3 rounded-full transition-all duration-300`}
                      style={{ backgroundColor: stage.color }}
                      animate={{
                        opacity: isActive ? [1, 0.3, 1] : 0,
                        scale: isActive ? [1, 1.5, 1] : 0.5,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isActive ? Infinity : 0,
                      }}
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
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-blue-100/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
