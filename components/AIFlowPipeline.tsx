'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaDatabase, FaCheckCircle, FaCogs, FaBrain, FaChartBar, FaRocket, FaEye, FaSync } from 'react-icons/fa';

export default function AIFlowPipeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const stages = [
    {
      name: 'Data Collection',
      icon: FaDatabase,
      color: '#3b82f6',
      desc: 'Gather raw data from multiple sources',
      detail: 'APIs, databases, IoT sensors, logs'
    },
    {
      name: 'Data Validation',
      icon: FaCheckCircle,
      color: '#8b5cf6',
      desc: 'Verify data quality and integrity',
      detail: 'Schema validation, anomaly detection'
    },
    {
      name: 'Data Processing',
      icon: FaCogs,
      color: '#ec4899',
      desc: 'Clean and transform raw data',
      detail: 'ETL pipelines, data cleaning'
    },
    {
      name: 'Feature Engineering',
      icon: FaBrain,
      color: '#f59e0b',
      desc: 'Extract and create features',
      detail: 'Feature extraction, selection, scaling'
    },
    {
      name: 'Model Training',
      icon: FaBrain,
      color: '#10b981',
      desc: 'Train ML models with data',
      detail: 'Algorithms, hyperparameters, optimization'
    },
    {
      name: 'Model Evaluation',
      icon: FaChartBar,
      color: '#06b6d4',
      desc: 'Validate model performance',
      detail: 'Metrics, A/B testing, validation sets'
    },
    {
      name: 'Model Deployment',
      icon: FaRocket,
      color: '#6366f1',
      desc: 'Deploy to production',
      detail: 'APIs, containers, edge devices'
    },
    {
      name: 'Monitoring',
      icon: FaEye,
      color: '#8b5cf6',
      desc: 'Track model performance',
      detail: 'Drift detection, performance metrics'
    },
    {
      name: 'Retraining',
      icon: FaSync,
      color: '#ec4899',
      desc: 'Update models continuously',
      detail: 'Automated retraining, CI/CD for ML'
    },
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

    class DataParticle {
      x: number;
      y: number;
      speed: number;
      size: number;
      opacity: number;
      color: string;
      stageIndex: number;

      constructor(canvasWidth: number, canvasHeight: number, stageIndex: number) {
        this.stageIndex = stageIndex;
        const stageWidth = canvasWidth / stages.length;
        this.x = stageIndex * stageWidth + Math.random() * stageWidth * 0.3;
        this.y = canvasHeight / 2 + (Math.random() - 0.5) * 60;
        this.speed = 0.5 + Math.random() * 0.5;
        this.size = 3 + Math.random() * 3;
        this.opacity = 0.6 + Math.random() * 0.4;
        this.color = stages[stageIndex].color;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speed;

        // Add wave motion
        this.y += Math.sin(this.x * 0.01) * 0.3;

        // Reset when particle reaches end
        if (this.x > canvasWidth) {
          this.x = 0;
          this.y = canvasHeight / 2 + (Math.random() - 0.5) * 60;
          this.stageIndex = 0;
          this.color = stages[0].color;
        }

        // Update color based on position
        const stageWidth = canvasWidth / stages.length;
        const newStageIndex = Math.floor(this.x / stageWidth);
        if (newStageIndex !== this.stageIndex && newStageIndex < stages.length) {
          this.stageIndex = newStageIndex;
          this.color = stages[newStageIndex].color;
        }
      }

      draw(ctx: CanvasRenderingContext2D, isActive: boolean) {
        ctx.save();
        ctx.globalAlpha = this.opacity * (isActive ? 1 : 0.4);

        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.shadowBlur = isActive ? 10 : 5;
        ctx.shadowColor = this.color;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create particles for each stage
    const particles: DataParticle[] = [];
    const particlesPerStage = 8;

    for (let i = 0; i < stages.length; i++) {
      for (let j = 0; j < particlesPerStage; j++) {
        particles.push(new DataParticle(canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio, i));
      }
    }

    const animate = () => {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw pipeline path
      const centerY = rect.height / 2;
      const stageWidth = rect.width / stages.length;

      // Draw connection lines
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(rect.width, centerY);
      ctx.stroke();

      // Draw stage sections with active highlighting
      for (let i = 0; i < stages.length; i++) {
        const x = i * stageWidth;
        const isActive = i === activeStage;
        const stage = stages[i];

        // Draw stage background
        if (isActive) {
          const gradient = ctx.createLinearGradient(x, 0, x + stageWidth, rect.height);
          gradient.addColorStop(0, stage.color + '10');
          gradient.addColorStop(0.5, stage.color + '20');
          gradient.addColorStop(1, stage.color + '10');

          ctx.fillStyle = gradient;
          ctx.fillRect(x, 0, stageWidth, rect.height);
        }

        // Draw stage connector line
        if (i < stages.length - 1) {
          const nextX = (i + 1) * stageWidth;

          if (isActive) {
            ctx.strokeStyle = stage.color;
            ctx.lineWidth = 3;
            ctx.shadowBlur = 10;
            ctx.shadowColor = stage.color;
          } else {
            ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
            ctx.lineWidth = 2;
            ctx.shadowBlur = 0;
          }

          // Draw arrow
          ctx.beginPath();
          ctx.moveTo(x + stageWidth - 10, centerY);
          ctx.lineTo(nextX, centerY);
          ctx.stroke();

          // Draw arrow head
          ctx.beginPath();
          ctx.moveTo(nextX - 8, centerY - 4);
          ctx.lineTo(nextX, centerY);
          ctx.lineTo(nextX - 8, centerY + 4);
          ctx.stroke();

          ctx.shadowBlur = 0;
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(rect.width, rect.height);
        const isActiveStage = particle.stageIndex === activeStage;
        particle.draw(ctx, isActiveStage);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [activeStage, stages]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI/ML Pipeline Flow
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            End-to-end machine learning operations with automated data pipelines and continuous model improvement
          </p>
        </motion.div>

        {/* Canvas Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12"
        >
          <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-64"
            />

            {/* Stage labels overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="flex h-full">
                {stages.map((stage, index) => {
                  const Icon = stage.icon;
                  const isActive = activeStage === index;
                  const isHovered = hoveredStage === index;

                  return (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center justify-center relative pointer-events-auto"
                      onMouseEnter={() => setHoveredStage(index)}
                      onMouseLeave={() => setHoveredStage(null)}
                      onClick={() => setActiveStage(index)}
                    >
                      <motion.div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300 ${
                          isActive || isHovered ? 'scale-110' : 'scale-100'
                        }`}
                        style={{
                          backgroundColor: stage.color,
                          boxShadow: isActive || isHovered ? `0 0 20px ${stage.color}80` : `0 4px 6px rgba(0,0,0,0.1)`,
                        }}
                        animate={{
                          scale: isActive ? [1, 1.15, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stage Details Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = activeStage === index || hoveredStage === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white border-slate-300 shadow-xl'
                    : 'bg-white/50 border-slate-200 shadow-md'
                }`}
                style={{
                  boxShadow: isActive ? `0 0 30px ${stage.color}30` : undefined,
                }}
                onMouseEnter={() => setHoveredStage(index)}
                onMouseLeave={() => setHoveredStage(null)}
                onClick={() => setActiveStage(index)}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: stage.color }}
                    animate={{
                      rotate: isActive ? [0, 360] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0,
                      ease: "linear",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{stage.name}</h3>
                    <p className="text-sm text-slate-600 mb-2">{stage.desc}</p>
                    <p className="text-xs text-slate-500 italic">{stage.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Model Accuracy', value: '99.2%', color: 'from-purple-500 to-pink-500' },
            { label: 'Training Speed', value: '5x', color: 'from-blue-500 to-cyan-500' },
            { label: 'Data Processed', value: '10TB+', color: 'from-green-500 to-emerald-500' },
            { label: 'Automation', value: '95%', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 text-center shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
