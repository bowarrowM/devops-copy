'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  FaBrain, FaDatabase, FaSearch, FaTags, FaRobot,
  FaCog, FaCheckCircle, FaRocket, FaChartLine, FaSync,
  FaLightbulb, FaNetworkWired
} from 'react-icons/fa';

interface AIWorkflowPhase {
  id: number;
  name: string;
  icon: any;
  color: string;
  category: 'llmops' | 'agentops' | 'rag';
  position: { x: number; y: number };
  details: {
    tr: { title: string; description: string; tools: string; };
    en: { title: string; description: string; tools: string; };
    de: { title: string; description: string; tools: string; };
  };
}

export default function AIFlowPipeline() {
  const { t, locale } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'llmops' | 'agentops' | 'rag' | null>(null);

  // Modern AI Workflow - LLMOps, AgentOps, RAG
  const phases: AIWorkflowPhase[] = [
    // LLMOps Circle (Left - Model Operations)
    {
      id: 0,
      name: 'Prompt Engineering',
      icon: FaLightbulb,
      color: '#3b82f6', // blue
      category: 'llmops',
      position: { x: 15, y: 30 },
      details: {
        tr: {
          title: 'Prompt Mühendisliği',
          description: 'System promptları, few-shot örnekler, chain-of-thought reasoning. Template yönetimi ve versiyonlama.',
          tools: 'LangChain, Prompt flow, OpenAI API'
        },
        en: {
          title: 'Prompt Engineering',
          description: 'System prompts, few-shot examples, chain-of-thought reasoning. Template management and versioning.',
          tools: 'LangChain, Prompt flow, OpenAI API'
        },
        de: {
          title: 'Prompt Engineering',
          description: 'System-Prompts, Few-Shot-Beispiele, Chain-of-Thought-Reasoning. Template-Verwaltung und Versionierung.',
          tools: 'LangChain, Prompt flow, OpenAI API'
        }
      }
    },
    {
      id: 1,
      name: 'LLM Fine-tuning',
      icon: FaBrain,
      color: '#8b5cf6', // purple
      category: 'llmops',
      position: { x: 10, y: 50 },
      details: {
        tr: {
          title: 'LLM Fine-tuning',
          description: 'LoRA, QLoRA, PEFT teknikleri ile model fine-tuning. RLHF ile insan geri bildirimi entegrasyonu.',
          tools: 'Hugging Face, Axolotl, DeepSpeed'
        },
        en: {
          title: 'LLM Fine-tuning',
          description: 'Model fine-tuning with LoRA, QLoRA, PEFT techniques. Human feedback integration with RLHF.',
          tools: 'Hugging Face, Axolotl, DeepSpeed'
        },
        de: {
          title: 'LLM Fine-tuning',
          description: 'Modell-Feinabstimmung mit LoRA, QLoRA, PEFT-Techniken. Integration von menschlichem Feedback mit RLHF.',
          tools: 'Hugging Face, Axolotl, DeepSpeed'
        }
      }
    },
    {
      id: 2,
      name: 'Model Evaluation',
      icon: FaCheckCircle,
      color: '#ec4899', // pink
      category: 'llmops',
      position: { x: 20, y: 70 },
      details: {
        tr: {
          title: 'Model Değerlendirme',
          description: 'Benchmark testleri, A/B testing, human evaluation. Hallucination detection ve bias analizi.',
          tools: 'HELM, LM Evaluation Harness, Anthropic'
        },
        en: {
          title: 'Model Evaluation',
          description: 'Benchmark testing, A/B testing, human evaluation. Hallucination detection and bias analysis.',
          tools: 'HELM, LM Evaluation Harness, Anthropic'
        },
        de: {
          title: 'Modell-Evaluierung',
          description: 'Benchmark-Tests, A/B-Tests, menschliche Evaluation. Halluzinationserkennung und Bias-Analyse.',
          tools: 'HELM, LM Evaluation Harness, Anthropic'
        }
      }
    },

    // AgentOps Circle (Top - Agent Orchestration)
    {
      id: 3,
      name: 'Agent Design',
      icon: FaRobot,
      color: '#f59e0b', // amber
      category: 'agentops',
      position: { x: 35, y: 10 },
      details: {
        tr: {
          title: 'Agent Tasarımı',
          description: 'Multi-agent sistem mimarisi, agent rolleri ve yetenekleri. Tool use ve function calling entegrasyonu.',
          tools: 'AutoGPT, CrewAI, LangGraph'
        },
        en: {
          title: 'Agent Design',
          description: 'Multi-agent system architecture, agent roles and capabilities. Tool use and function calling integration.',
          tools: 'AutoGPT, CrewAI, LangGraph'
        },
        de: {
          title: 'Agent-Design',
          description: 'Multi-Agent-Systemarchitektur, Agent-Rollen und -Fähigkeiten. Tool-Nutzung und Function-Calling-Integration.',
          tools: 'AutoGPT, CrewAI, LangGraph'
        }
      }
    },
    {
      id: 4,
      name: 'Orchestration',
      icon: FaNetworkWired,
      color: '#10b981', // emerald
      category: 'agentops',
      position: { x: 50, y: 5 },
      details: {
        tr: {
          title: 'Orkestrasyon',
          description: 'Agent iş akışı yönetimi, task delegation, agent-to-agent communication. Memory ve context yönetimi.',
          tools: 'Apache Airflow, Prefect, Temporal'
        },
        en: {
          title: 'Orchestration',
          description: 'Agent workflow management, task delegation, agent-to-agent communication. Memory and context management.',
          tools: 'Apache Airflow, Prefect, Temporal'
        },
        de: {
          title: 'Orchestrierung',
          description: 'Agent-Workflow-Management, Task-Delegation, Agent-zu-Agent-Kommunikation. Speicher- und Kontextverwaltung.',
          tools: 'Apache Airflow, Prefect, Temporal'
        }
      }
    },
    {
      id: 5,
      name: 'Agent Monitoring',
      icon: FaChartLine,
      color: '#06b6d4', // cyan
      category: 'agentops',
      position: { x: 65, y: 10 },
      details: {
        tr: {
          title: 'Agent İzleme',
          description: 'Agent performans metrikleri, cost tracking, success rate analysis. Real-time observability ve debugging.',
          tools: 'LangSmith, Helicone, Weights & Biases'
        },
        en: {
          title: 'Agent Monitoring',
          description: 'Agent performance metrics, cost tracking, success rate analysis. Real-time observability and debugging.',
          tools: 'LangSmith, Helicone, Weights & Biases'
        },
        de: {
          title: 'Agent-Monitoring',
          description: 'Agent-Performance-Metriken, Kostenverfolgung, Erfolgsratenanalyse. Echtzeit-Observability und Debugging.',
          tools: 'LangSmith, Helicone, Weights & Biases'
        }
      }
    },

    // RAG Circle (Right - Knowledge Retrieval)
    {
      id: 6,
      name: 'Data Indexing',
      icon: FaDatabase,
      color: '#6366f1', // indigo
      category: 'rag',
      position: { x: 80, y: 30 },
      details: {
        tr: {
          title: 'Veri İndeksleme',
          description: 'Döküman chunking, embedding generation, vector database storage. Semantic search optimizasyonu.',
          tools: 'Pinecone, Weaviate, Chroma, FAISS'
        },
        en: {
          title: 'Data Indexing',
          description: 'Document chunking, embedding generation, vector database storage. Semantic search optimization.',
          tools: 'Pinecone, Weaviate, Chroma, FAISS'
        },
        de: {
          title: 'Daten-Indexierung',
          description: 'Dokumenten-Chunking, Embedding-Generierung, Vector-Datenbank-Speicherung. Semantische Suchoptimierung.',
          tools: 'Pinecone, Weaviate, Chroma, FAISS'
        }
      }
    },
    {
      id: 7,
      name: 'Semantic Search',
      icon: FaSearch,
      color: '#8b5cf6', // purple
      category: 'rag',
      position: { x: 85, y: 50 },
      details: {
        tr: {
          title: 'Semantik Arama',
          description: 'Query embedding, similarity search, re-ranking. Hybrid search ve metadata filtering.',
          tools: 'Milvus, Qdrant, Elasticsearch'
        },
        en: {
          title: 'Semantic Search',
          description: 'Query embedding, similarity search, re-ranking. Hybrid search and metadata filtering.',
          tools: 'Milvus, Qdrant, Elasticsearch'
        },
        de: {
          title: 'Semantische Suche',
          description: 'Query-Embedding, Ähnlichkeitssuche, Re-Ranking. Hybride Suche und Metadaten-Filterung.',
          tools: 'Milvus, Qdrant, Elasticsearch'
        }
      }
    },
    {
      id: 8,
      name: 'Context Augmentation',
      icon: FaTags,
      color: '#ec4899', // pink
      category: 'rag',
      position: { x: 75, y: 70 },
      details: {
        tr: {
          title: 'Context Zenginleştirme',
          description: 'Retrieved context ile prompt augmentation. Multi-query retrieval ve context compression.',
          tools: 'LlamaIndex, Haystack, LangChain'
        },
        en: {
          title: 'Context Augmentation',
          description: 'Prompt augmentation with retrieved context. Multi-query retrieval and context compression.',
          tools: 'LlamaIndex, Haystack, LangChain'
        },
        de: {
          title: 'Kontext-Augmentation',
          description: 'Prompt-Augmentation mit abgerufenem Kontext. Multi-Query-Retrieval und Kontext-Kompression.',
          tools: 'LlamaIndex, Haystack, LangChain'
        }
      }
    },

    // Center Integration
    {
      id: 9,
      name: 'Deployment',
      icon: FaRocket,
      color: '#10b981', // emerald
      category: 'llmops',
      position: { x: 35, y: 40 },
      details: {
        tr: {
          title: 'Deployment',
          description: 'Production deployment, API endpoints, streaming responses. Rate limiting ve load balancing.',
          tools: 'FastAPI, vLLM, TGI, Kubernetes'
        },
        en: {
          title: 'Deployment',
          description: 'Production deployment, API endpoints, streaming responses. Rate limiting and load balancing.',
          tools: 'FastAPI, vLLM, TGI, Kubernetes'
        },
        de: {
          title: 'Deployment',
          description: 'Produktions-Deployment, API-Endpunkte, Streaming-Antworten. Rate-Limiting und Load-Balancing.',
          tools: 'FastAPI, vLLM, TGI, Kubernetes'
        }
      }
    },
    {
      id: 10,
      name: 'Monitoring & Ops',
      icon: FaCog,
      color: '#06b6d4', // cyan
      category: 'agentops',
      position: { x: 50, y: 50 },
      details: {
        tr: {
          title: 'Monitoring & Ops',
          description: 'Cost tracking, latency monitoring, token usage analysis. Alert sistemi ve incident management.',
          tools: 'Prometheus, Grafana, DataDog'
        },
        en: {
          title: 'Monitoring & Ops',
          description: 'Cost tracking, latency monitoring, token usage analysis. Alert system and incident management.',
          tools: 'Prometheus, Grafana, DataDog'
        },
        de: {
          title: 'Monitoring & Ops',
          description: 'Kostenverfolgung, Latenz-Monitoring, Token-Nutzungsanalyse. Alarmsystem und Incident-Management.',
          tools: 'Prometheus, Grafana, DataDog'
        }
      }
    },
    {
      id: 11,
      name: 'Continuous Improvement',
      icon: FaSync,
      color: '#8b5cf6', // purple
      category: 'rag',
      position: { x: 65, y: 40 },
      details: {
        tr: {
          title: 'Sürekli İyileştirme',
          description: 'User feedback loops, A/B testing, model retraining. Performance optimization ve quality improvement.',
          tools: 'MLflow, Weights & Biases, Arize'
        },
        en: {
          title: 'Continuous Improvement',
          description: 'User feedback loops, A/B testing, model retraining. Performance optimization and quality improvement.',
          tools: 'MLflow, Weights & Biases, Arize'
        },
        de: {
          title: 'Kontinuierliche Verbesserung',
          description: 'Benutzer-Feedback-Schleifen, A/B-Tests, Modell-Retraining. Performance-Optimierung und Qualitätsverbesserung.',
          tools: 'MLflow, Weights & Biases, Arize'
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

    // Flowing particles through the three circles
    class AIParticle {
      progress: number;
      speed: number;
      size: number;
      opacity: number;
      category: 'llmops' | 'agentops' | 'rag';

      constructor(category: 'llmops' | 'agentops' | 'rag') {
        this.category = category;
        this.progress = Math.random();
        this.speed = 0.0008 + Math.random() * 0.0005;
        this.size = 2 + Math.random() * 2;
        this.opacity = 0.5 + Math.random() * 0.5;
      }

      update() {
        this.progress += this.speed;
        if (this.progress > 1) {
          this.progress = 0;
        }
      }

      getPosition(width: number, height: number) {
        const t = this.progress * Math.PI * 2;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.3;

        let x, y;

        if (this.category === 'llmops') {
          // Left circle
          x = centerX - radius * 0.6 + Math.cos(t) * radius * 0.3;
          y = centerY + Math.sin(t) * radius * 0.3;
        } else if (this.category === 'agentops') {
          // Top circle
          x = centerX + Math.cos(t + Math.PI / 2) * radius * 0.3;
          y = centerY - radius * 0.4 + Math.sin(t + Math.PI / 2) * radius * 0.3;
        } else {
          // Right circle (RAG)
          x = centerX + radius * 0.6 + Math.cos(t) * radius * 0.3;
          y = centerY + Math.sin(t) * radius * 0.3;
        }

        return { x, y };
      }

      getColor() {
        switch (this.category) {
          case 'llmops':
            return '#8b5cf6'; // purple
          case 'agentops':
            return '#10b981'; // emerald
          case 'rag':
            return '#06b6d4'; // cyan
        }
      }

      draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        const pos = this.getPosition(width, height);
        const color = this.getColor();

        ctx.save();
        ctx.globalAlpha = this.opacity;

        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, this.size * 2);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Create particles for each category
    const particles: AIParticle[] = [];
    ['llmops', 'agentops', 'rag'].forEach((category) => {
      for (let i = 0; i < 15; i++) {
        particles.push(new AIParticle(category as any));
      }
    });

    const animate = () => {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.3;

      // Draw three interconnected circles
      const circles = [
        { x: centerX - radius * 0.6, y: centerY, color: '#8b5cf6', category: 'llmops' },
        { x: centerX, y: centerY - radius * 0.4, color: '#10b981', category: 'agentops' },
        { x: centerX + radius * 0.6, y: centerY, color: '#06b6d4', category: 'rag' },
      ];

      // Draw connection lines between circles
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);

      for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
          ctx.beginPath();
          ctx.moveTo(circles[i].x, circles[i].y);
          ctx.lineTo(circles[j].x, circles[j].y);
          ctx.stroke();
        }
      }

      ctx.setLineDash([]);

      // Draw circles
      circles.forEach((circle, index) => {
        const isActive = activeCategory === circle.category;

        ctx.strokeStyle = circle.color + (isActive ? '80' : '30');
        ctx.lineWidth = isActive ? 3 : 2;
        ctx.shadowBlur = isActive ? 20 : 0;
        ctx.shadowColor = circle.color;

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, radius * 0.3, 0, Math.PI * 2);
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Draw category label
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.fillStyle = circle.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let label = '';
        switch (circle.category) {
          case 'llmops':
            label = 'LLMOps';
            break;
          case 'agentops':
            label = 'AgentOps';
            break;
          case 'rag':
            label = 'RAG';
            break;
        }

        ctx.fillText(label, circle.x, circle.y);
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx, rect.width, rect.height);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [activeCategory]);

  const getPhaseDetails = (phase: AIWorkflowPhase) => {
    switch (locale) {
      case 'de':
        return phase.details.de;
      case 'en':
        return phase.details.en;
      default:
        return phase.details.tr;
    }
  };

  const getCategoryTitle = (category: 'llmops' | 'agentops' | 'rag') => {
    const titles = {
      tr: {
        llmops: 'LLMOps - Model Operations',
        agentops: 'AgentOps - AI Agent Orchestration',
        rag: 'RAG - Retrieval Augmented Generation'
      },
      en: {
        llmops: 'LLMOps - Model Operations',
        agentops: 'AgentOps - AI Agent Orchestration',
        rag: 'RAG - Retrieval Augmented Generation'
      },
      de: {
        llmops: 'LLMOps - Modell-Operationen',
        agentops: 'AgentOps - KI-Agent-Orchestrierung',
        rag: 'RAG - Retrieval Augmented Generation'
      }
    };

    return titles[locale as 'tr' | 'en' | 'de'][category];
  };

  const categories = [
    { id: 'llmops' as const, color: '#8b5cf6', label: 'LLMOps' },
    { id: 'agentops' as const, color: '#10b981', label: 'AgentOps' },
    { id: 'rag' as const, color: '#06b6d4', label: 'RAG' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              {locale === 'tr' ? 'Modern AI Operations' : locale === 'de' ? 'Moderne KI-Operationen' : 'Modern AI Operations'}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {locale === 'tr'
              ? 'LLMOps, AgentOps ve RAG ile end-to-end AI workflow yönetimi. 2025 AI era teknolojileri ile production-ready çözümler.'
              : locale === 'de'
              ? 'End-to-End-KI-Workflow-Management mit LLMOps, AgentOps und RAG. Produktionsreife Lösungen mit 2025 KI-Ära-Technologien.'
              : 'End-to-end AI workflow management with LLMOps, AgentOps, and RAG. Production-ready solutions with 2025 AI era technologies.'
            }
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-300'
              }`}
              style={{
                backgroundColor: activeCategory === cat.id ? cat.color : undefined,
                boxShadow: activeCategory === cat.id ? `0 0 30px ${cat.color}40` : undefined,
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Three Circles Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto mb-12"
        >
          <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />

            {/* Phase markers */}
            {phases
              .filter(phase => !activeCategory || phase.category === activeCategory)
              .map((phase) => {
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
                    onClick={() => {
                      setActivePhase(activePhase === phase.id ? null : phase.id);
                      setActiveCategory(phase.category);
                    }}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      scale: isHighlighted ? 1.3 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-2xl cursor-pointer backdrop-blur-sm border border-white/30"
                      style={{
                        backgroundColor: phase.color,
                        boxShadow: isHighlighted ? `0 0 30px ${phase.color}` : `0 0 15px ${phase.color}80`,
                      }}
                      animate={{
                        boxShadow: isHighlighted
                          ? [`0 0 15px ${phase.color}`, `0 0 30px ${phase.color}`, `0 0 15px ${phase.color}`]
                          : `0 0 15px ${phase.color}80`,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isHighlighted ? Infinity : 0,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>

                    {/* Phase name tooltip */}
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div
                        className="px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-md border border-white/20 text-white"
                        style={{ backgroundColor: `${phase.color}E6` }}
                      >
                        {phase.name}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>

        {/* Phase Details Card */}
        <AnimatePresence>
          {activePhase !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="mb-12"
            >
              {(() => {
                const phase = phases[activePhase];
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
                          <h3 className="text-3xl font-bold text-slate-900">{details.title}</h3>
                          <span
                            className="px-4 py-1 rounded-full text-sm font-semibold text-white"
                            style={{ backgroundColor: phase.color }}
                          >
                            {getCategoryTitle(phase.category).split(' - ')[0]}
                          </span>
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed mb-4">
                          {details.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="font-semibold">
                            {locale === 'tr' ? '🛠️ Araçlar:' : locale === 'de' ? '🛠️ Tools:' : '🛠️ Tools:'}
                          </span>
                          <span>{details.tools}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Sections */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const categoryPhases = phases.filter(p => p.category === cat.id);
            const isActive = activeCategory === null || activeCategory === cat.id;

            if (!isActive) return null;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div
                    className="w-1 h-8 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  {getCategoryTitle(cat.id)}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {categoryPhases.map((phase) => {
                    const Icon = phase.icon;
                    const details = getPhaseDetails(phase);
                    const isHighlighted = activePhase === phase.id || hoveredPhase === phase.id;

                    return (
                      <motion.div
                        key={phase.id}
                        className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isHighlighted
                            ? 'bg-white border-slate-300 shadow-xl'
                            : 'bg-white/70 border-slate-200 shadow-md hover:shadow-lg'
                        }`}
                        style={{
                          boxShadow: isHighlighted ? `0 0 30px ${phase.color}30` : undefined,
                        }}
                        onMouseEnter={() => setHoveredPhase(phase.id)}
                        onMouseLeave={() => setHoveredPhase(null)}
                        onClick={() => {
                          setActivePhase(activePhase === phase.id ? null : phase.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                            style={{ backgroundColor: phase.color }}
                            animate={{
                              rotate: isHighlighted ? [0, 360] : 0,
                            }}
                            transition={{
                              duration: 3,
                              repeat: isHighlighted ? Infinity : 0,
                              ease: "linear",
                            }}
                          >
                            <Icon className="w-7 h-7" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{details.title}</h4>
                            <p className="text-sm text-slate-600 line-clamp-2">{details.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            {locale === 'tr'
              ? '💡 Kategorileri filtreleyebilir ve fazları tıklayarak detayları görebilirsiniz'
              : locale === 'de'
              ? '💡 Filtern Sie Kategorien und klicken Sie auf Phasen für Details'
              : '💡 Filter categories and click on phases to see details'
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
}
