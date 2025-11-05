'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  FaLightbulb, FaCode, FaTools, FaVial,
  FaRocket, FaServer, FaCogs, FaChartLine
} from 'react-icons/fa';

interface DevOpsPhase {
  id: number;
  name: string;
  icon: any;
  color: string;
  position: { x: number; y: number };
  side: 'dev' | 'ops';
  details: {
    tr: { title: string; description: string; };
    en: { title: string; description: string; };
    de: { title: string; description: string; };
  };
}

export default function InteractiveDevOpsFlow() {
  const { t, locale } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  // DevOps Infinity Loop - 8 phases positioned in figure-8 pattern
  const phases: DevOpsPhase[] = [
    {
      id: 0,
      name: 'Plan',
      icon: FaLightbulb,
      color: '#3b82f6', // blue
      position: { x: 20, y: 30 },
      side: 'dev',
      details: {
        tr: {
          title: 'Planlama',
          description: 'Proje gereksinimleri belirlenir, sprint planlaması yapılır ve backlog oluşturulur. Agile ve Scrum metodolojileri ile iş akışı tasarlanır.'
        },
        en: {
          title: 'Planning',
          description: 'Define project requirements, sprint planning, and create backlog. Design workflow with Agile and Scrum methodologies.'
        },
        de: {
          title: 'Planung',
          description: 'Projektanforderungen definieren, Sprint-Planung und Backlog erstellen. Workflow mit Agile und Scrum-Methoden gestalten.'
        }
      }
    },
    {
      id: 1,
      name: 'Code',
      icon: FaCode,
      color: '#8b5cf6', // purple
      position: { x: 35, y: 15 },
      side: 'dev',
      details: {
        tr: {
          title: 'Kodlama',
          description: 'Version control (Git) ile kod geliştirme, code review süreçleri ve collaboration. Modern IDE\'ler ve pair programming.'
        },
        en: {
          title: 'Coding',
          description: 'Code development with version control (Git), code review processes and collaboration. Modern IDEs and pair programming.'
        },
        de: {
          title: 'Kodierung',
          description: 'Codeentwicklung mit Versionskontrolle (Git), Code-Review-Prozesse und Zusammenarbeit. Moderne IDEs und Pair Programming.'
        }
      }
    },
    {
      id: 2,
      name: 'Build',
      icon: FaTools,
      color: '#ec4899', // pink
      position: { x: 50, y: 10 },
      side: 'dev',
      details: {
        tr: {
          title: 'Build',
          description: 'Otomatik build süreçleri, artifact oluşturma, dependency yönetimi. Jenkins, GitLab CI, GitHub Actions ile CI pipeline.'
        },
        en: {
          title: 'Build',
          description: 'Automated build processes, artifact creation, dependency management. CI pipeline with Jenkins, GitLab CI, GitHub Actions.'
        },
        de: {
          title: 'Build',
          description: 'Automatisierte Build-Prozesse, Artefakt-Erstellung, Dependency-Management. CI-Pipeline mit Jenkins, GitLab CI, GitHub Actions.'
        }
      }
    },
    {
      id: 3,
      name: 'Test',
      icon: FaVial,
      color: '#f59e0b', // amber
      position: { x: 65, y: 15 },
      side: 'dev',
      details: {
        tr: {
          title: 'Test',
          description: 'Otomatik test süreçleri: unit test, integration test, E2E test. Test coverage analizi ve quality gates.'
        },
        en: {
          title: 'Testing',
          description: 'Automated testing: unit tests, integration tests, E2E tests. Test coverage analysis and quality gates.'
        },
        de: {
          title: 'Testen',
          description: 'Automatisiertes Testen: Unit-Tests, Integrationstests, E2E-Tests. Testabdeckungsanalyse und Quality Gates.'
        }
      }
    },
    {
      id: 4,
      name: 'Release',
      icon: FaRocket,
      color: '#10b981', // emerald
      position: { x: 80, y: 30 },
      side: 'ops',
      details: {
        tr: {
          title: 'Release',
          description: 'Release management, semantic versioning, changelog oluşturma. Release notes ve deployment hazırlığı.'
        },
        en: {
          title: 'Release',
          description: 'Release management, semantic versioning, changelog generation. Release notes and deployment preparation.'
        },
        de: {
          title: 'Release',
          description: 'Release-Management, semantische Versionierung, Changelog-Generierung. Release Notes und Deployment-Vorbereitung.'
        }
      }
    },
    {
      id: 5,
      name: 'Deploy',
      icon: FaServer,
      color: '#06b6d4', // cyan
      position: { x: 65, y: 55 },
      side: 'ops',
      details: {
        tr: {
          title: 'Deploy',
          description: 'Otomatik deployment ile production ortamına aktarım. Blue-green, canary deployment stratejileri. Kubernetes, Docker orchestration.'
        },
        en: {
          title: 'Deployment',
          description: 'Automated deployment to production environment. Blue-green, canary deployment strategies. Kubernetes, Docker orchestration.'
        },
        de: {
          title: 'Deployment',
          description: 'Automatisiertes Deployment in Produktionsumgebung. Blue-Green-, Canary-Deployment-Strategien. Kubernetes, Docker-Orchestrierung.'
        }
      }
    },
    {
      id: 6,
      name: 'Operate',
      icon: FaCogs,
      color: '#6366f1', // indigo
      position: { x: 50, y: 60 },
      side: 'ops',
      details: {
        tr: {
          title: 'İşletim',
          description: 'Production ortamı yönetimi, scaling, high availability, disaster recovery. Infrastructure as Code ile otomasyon.'
        },
        en: {
          title: 'Operations',
          description: 'Production environment management, scaling, high availability, disaster recovery. Automation with Infrastructure as Code.'
        },
        de: {
          title: 'Betrieb',
          description: 'Produktionsumgebungsverwaltung, Skalierung, Hochverfügbarkeit, Disaster Recovery. Automatisierung mit Infrastructure as Code.'
        }
      }
    },
    {
      id: 7,
      name: 'Monitor',
      icon: FaChartLine,
      color: '#8b5cf6', // purple
      position: { x: 35, y: 55 },
      side: 'ops',
      details: {
        tr: {
          title: 'İzleme',
          description: 'Real-time monitoring, logging, alerting. Prometheus, Grafana, ELK stack ile observability ve performance metrikleri.'
        },
        en: {
          title: 'Monitoring',
          description: 'Real-time monitoring, logging, alerting. Observability and performance metrics with Prometheus, Grafana, ELK stack.'
        },
        de: {
          title: 'Monitoring',
          description: 'Echtzeit-Monitoring, Logging, Alerting. Observability und Performance-Metriken mit Prometheus, Grafana, ELK Stack.'
        }
      }
    },
  ];

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

    // Infinity loop path particle
    class FlowParticle {
      progress: number;
      speed: number;
      size: number;
      opacity: number;

      constructor() {
        this.progress = Math.random();
        this.speed = 0.001 + Math.random() * 0.001;
        this.size = 3 + Math.random() * 2;
        this.opacity = 0.6 + Math.random() * 0.4;
      }

      update() {
        this.progress += this.speed;
        if (this.progress > 1) {
          this.progress = 0;
        }
      }

      getPosition(width: number, height: number) {
        // Create infinity loop (figure-8) path
        const t = this.progress * Math.PI * 2;
        const scale = Math.min(width, height) * 0.35;

        // Infinity loop formula
        const x = width / 2 + scale * Math.sin(t);
        const y = height / 2 + (scale * Math.sin(t) * Math.cos(t)) / 1.5;

        return { x, y };
      }

      draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        const pos = this.getPosition(width, height);

        // Determine color based on position (Dev = blue/purple, Ops = green/cyan)
        const phaseIndex = Math.floor(this.progress * 8);
        const phase = phases[phaseIndex];

        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Gradient with glow
        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, this.size * 3);
        gradient.addColorStop(0, phase.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 15;
        ctx.shadowColor = phase.color;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create particles
    const particles: FlowParticle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push(new FlowParticle());
    }

    const animate = () => {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const scale = Math.min(rect.width, rect.height) * 0.35;

      // Draw infinity loop path
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 3;
      ctx.beginPath();

      for (let t = 0; t < Math.PI * 2; t += 0.01) {
        const x = centerX + scale * Math.sin(t);
        const y = centerY + (scale * Math.sin(t) * Math.cos(t)) / 1.5;

        if (t === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();

      // Draw enhanced path for active/hovered phase
      if (activePhase !== null || hoveredPhase !== null) {
        const targetPhase = activePhase !== null ? activePhase : hoveredPhase;
        const phase = phases[targetPhase!];

        ctx.strokeStyle = phase.color;
        ctx.lineWidth = 5;
        ctx.shadowBlur = 20;
        ctx.shadowColor = phase.color;
        ctx.beginPath();

        const startT = (targetPhase! / 8) * Math.PI * 2;
        const endT = ((targetPhase! + 1) / 8) * Math.PI * 2;

        for (let t = startT; t < endT; t += 0.01) {
          const x = centerX + scale * Math.sin(t);
          const y = centerY + (scale * Math.sin(t) * Math.cos(t)) / 1.5;

          if (t === startT) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx, rect.width, rect.height);
      });

      // Draw center labels
      ctx.font = 'bold 20px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Dev label (left)
      ctx.fillStyle = 'rgba(139, 92, 246, 0.8)';
      ctx.fillText('DEV', centerX - scale * 0.6, centerY);

      // Ops label (right)
      ctx.fillStyle = 'rgba(16, 185, 129, 0.8)';
      ctx.fillText('OPS', centerX + scale * 0.6, centerY);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [activePhase, hoveredPhase]);

  const getPhaseDetails = (phase: DevOpsPhase) => {
    switch (locale) {
      case 'de':
        return phase.details.de;
      case 'en':
        return phase.details.en;
      default:
        return phase.details.tr;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              {locale === 'tr' ? 'Sürekli DevOps Döngüsü' : locale === 'de' ? 'Kontinuierlicher DevOps-Zyklus' : 'Continuous DevOps Flow'}
            </span>
          </h2>
          <p className="text-xl text-blue-100/70 max-w-3xl mx-auto">
            {locale === 'tr'
              ? 'Dev ve Ops ekiplerinin sürekli işbirliği ile kesintisiz yazılım geliştirme ve dağıtım döngüsü'
              : locale === 'de'
              ? 'Kontinuierliche Software-Entwicklung und Bereitstellung durch ständige Zusammenarbeit von Dev- und Ops-Teams'
              : 'Continuous software development and deployment through seamless collaboration between Dev and Ops teams'
            }
          </p>
        </motion.div>

        {/* Infinity Loop Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-[16/9]">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />

            {/* Phase markers positioned along infinity loop */}
            {phases.map((phase) => {
              const Icon = phase.icon;
              const isActive = activePhase === phase.id;
              const isHovered = hoveredPhase === phase.id;
              const isHighlighted = isActive || isHovered;

              return (
                <motion.div
                  key={phase.id}
                  className="absolute"
                  style={{
                    left: `${phase.position.x}%`,
                    top: `${phase.position.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseEnter={() => setHoveredPhase(phase.id)}
                  onMouseLeave={() => setHoveredPhase(null)}
                  onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    scale: isHighlighted ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                  >
                    {/* Phase icon */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-2xl backdrop-blur-sm border border-white/20"
                      style={{
                        backgroundColor: phase.color,
                        boxShadow: isHighlighted ? `0 0 40px ${phase.color}` : `0 0 20px ${phase.color}80`,
                      }}
                      animate={{
                        boxShadow: isHighlighted
                          ? [`0 0 20px ${phase.color}`, `0 0 40px ${phase.color}`, `0 0 20px ${phase.color}`]
                          : `0 0 20px ${phase.color}80`,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isHighlighted ? Infinity : 0,
                      }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>

                    {/* Phase name label */}
                    <motion.div
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div
                        className="px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-md border border-white/20"
                        style={{
                          backgroundColor: `${phase.color}40`,
                          color: 'white',
                        }}
                      >
                        {phase.name}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Phase details card */}
          <AnimatePresence>
            {(activePhase !== null || hoveredPhase !== null) && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                {(() => {
                  const phase = phases[activePhase !== null ? activePhase : hoveredPhase!];
                  const details = getPhaseDetails(phase);
                  const Icon = phase.icon;

                  return (
                    <div
                      className="p-8 rounded-3xl backdrop-blur-xl border-2 shadow-2xl"
                      style={{
                        backgroundColor: `${phase.color}10`,
                        borderColor: `${phase.color}40`,
                        boxShadow: `0 0 60px ${phase.color}20`,
                      }}
                    >
                      <div className="flex items-start gap-6">
                        <motion.div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                          style={{ backgroundColor: phase.color }}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <Icon className="w-10 h-10" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-3xl font-bold text-white">{details.title}</h3>
                            <span
                              className="px-4 py-1 rounded-full text-sm font-semibold"
                              style={{
                                backgroundColor: phase.color,
                                color: 'white',
                              }}
                            >
                              {phase.side === 'dev' ? 'DEV' : 'OPS'}
                            </span>
                          </div>
                          <p className="text-lg text-blue-100/80 leading-relaxed">
                            {details.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-blue-100/60 text-sm">
            {locale === 'tr'
              ? '💡 Bir fazı seçerek detaylı bilgi alabilirsiniz'
              : locale === 'de'
              ? '💡 Wählen Sie eine Phase für detaillierte Informationen'
              : '💡 Click on a phase to see detailed information'
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
}
