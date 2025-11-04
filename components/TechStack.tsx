'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions, SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiPrometheus, SiGrafana, SiElasticsearch, SiRedis, SiPostgresql, SiMongodb, SiRabbitmq, SiApachekafka } from 'react-icons/si';

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotations, setRotations] = useState<{ [key: number]: number }>({});

  const technologies = [
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'Container' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'Orchestration' },
    { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', category: 'IaC' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939', category: 'CI/CD' },
    { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF', category: 'CI/CD' },
    { name: 'AWS', icon: SiAmazonaws, color: '#FF9900', category: 'Cloud' },
    { name: 'Azure', icon: SiMicrosoftazure, color: '#0089D6', category: 'Cloud' },
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4', category: 'Cloud' },
    { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C', category: 'Monitoring' },
    { name: 'Grafana', icon: SiGrafana, color: '#F46800', category: 'Monitoring' },
    { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571', category: 'Search' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Cache' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600', category: 'Message Queue' },
    { name: 'Kafka', icon: SiApachekafka, color: '#231F20', category: 'Streaming' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    show: { opacity: 1, y: 0, rotateX: 0 },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Enterprise Technology Stack
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Endüstri standardı araçlar ve teknolojilerle güçlendirilmiş DevOps çözümleri
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const currentRotation = rotations[index] || 0;

            const handleHoverStart = () => {
              setHoveredIndex(index);
              setRotations(prev => ({
                ...prev,
                [index]: (prev[index] || 0) + 360
              }));
            };

            const handleHoverEnd = () => {
              setHoveredIndex(null);
              setRotations(prev => ({
                ...prev,
                [index]: (prev[index] || 0) - 360
              }));
            };

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                }}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                    style={{ backgroundColor: `${tech.color}20` }}
                  />

                  {/* Icon */}
                  <div className="relative flex flex-col items-center gap-3">
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 group-hover:shadow-lg transition-shadow"
                      style={{
                        boxShadow: `0 0 0 1px ${tech.color}20`,
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                      }}
                      animate={{
                        rotateY: currentRotation,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Icon
                        className="w-10 h-10"
                        style={{ color: tech.color }}
                      />
                    </motion.div>

                    {/* Name */}
                    <div className="text-center">
                      <div className="text-sm font-bold text-slate-900">{tech.name}</div>
                      <div className="text-xs text-slate-500 mt-1">{tech.category}</div>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: tech.color }}
                  />
                  <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Modern altyapı ve araçlarla donatılmış çözümlerimiz ile işletmenizin dijital dönüşümünü hızlandırıyoruz
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Cloud Native', 'Scalable', 'High Performance', 'Secure'].map((badge, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 font-semibold text-sm"
              >
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
