'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGitlab,
  SiGithubactions,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiDatadog,
  SiHashicorp,
  SiHelm,
  SiAnsible
} from 'react-icons/si';
import { FaShieldAlt, FaRocket } from 'react-icons/fa';

interface Technology {
  name: string;
  icon: any;
  color: string;
  category: string;
  description?: string;
}

export default function TechStack() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Cloud platforms - the stars of the show
  const cloudPlatforms: Technology[] = [
    {
      name: 'AWS',
      icon: SiAmazonaws,
      color: '#FF9900',
      category: 'cloud',
      description: 'EKS, ECS, Lambda, RDS, S3, CloudFormation, CodePipeline'
    },
    {
      name: 'Microsoft Azure',
      icon: SiMicrosoftazure,
      color: '#0089D6',
      category: 'cloud',
      description: 'AKS, Azure DevOps, Functions, Cosmos DB, Azure Storage'
    },
    {
      name: 'Google Cloud',
      icon: SiGooglecloud,
      color: '#4285F4',
      category: 'cloud',
      description: 'GKE, Cloud Run, BigQuery, Cloud Storage, Cloud Build'
    },
  ];

  // Other technologies grouped by category
  const technologies: Technology[] = [
    // GitOps & Deployment
    { name: 'ArgoCD', icon: SiArgo, color: '#EF7B4D', category: 'gitops' },
    { name: 'Helm', icon: SiHelm, color: '#0F1689', category: 'gitops' },
    { name: 'Flux CD', icon: FaRocket, color: '#5468FF', category: 'gitops' },

    // CI/CD & Automation
    { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF', category: 'cicd' },
    { name: 'GitLab', icon: SiGitlab, color: '#FC6D26', category: 'cicd' },

    // Container & Orchestration
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'container' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'container' },

    // Infrastructure as Code
    { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', category: 'iac' },
    { name: 'Ansible', icon: SiAnsible, color: '#EE0000', category: 'iac' },
    { name: 'Vault', icon: SiHashicorp, color: '#000000', category: 'iac' },

    // Monitoring & Observability
    { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C', category: 'monitoring' },
    { name: 'Grafana', icon: SiGrafana, color: '#F46800', category: 'monitoring' },
    { name: 'Datadog', icon: SiDatadog, color: '#632CA6', category: 'monitoring' },

    // Security
    { name: 'Security Tools', icon: FaShieldAlt, color: '#00A86B', category: 'security' },
  ];

  const categories = [
    { id: 'gitops', label: t.techStack.categories.gitops, color: '#EF7B4D' },
    { id: 'cicd', label: t.techStack.categories.cicd, color: '#2088FF' },
    { id: 'container', label: t.techStack.categories.container, color: '#326CE5' },
    { id: 'iac', label: t.techStack.categories.iac, color: '#7B42BC' },
    { id: 'monitoring', label: t.techStack.categories.monitoring, color: '#E6522C' },
    { id: 'security', label: t.techStack.categories.security, color: '#00A86B' },
  ];

  const filteredTechnologies = activeCategory
    ? technologies.filter(tech => tech.category === activeCategory)
    : technologies;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.techStack.title}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t.techStack.subtitle}
          </p>
        </motion.div>

        {/* Cloud Platforms - Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {t.techStack.cloudPlatforms.title}
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.techStack.cloudPlatforms.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cloudPlatforms.map((platform, index) => {
              const Icon = platform.icon;

              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                      style={{ backgroundColor: `${platform.color}15` }}
                    />

                    {/* Content */}
                    <div className="relative flex flex-col items-center text-center">
                      {/* Large icon */}
                      <motion.div
                        className="w-28 h-28 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg group-hover:shadow-xl transition-shadow"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon
                          className="w-16 h-16"
                          style={{ color: platform.color }}
                        />
                      </motion.div>

                      {/* Platform name */}
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">
                        {platform.name}
                      </h4>

                      {/* Services */}
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {platform.description}
                      </p>

                      {/* Market share indicator */}
                      <div className="mt-6 flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: platform.color,
                                opacity: index === 0 ? 1 : index === 1 ? 0.8 : 0.6
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div
                      className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: platform.color }}
                    />
                    <div
                      className="absolute bottom-4 left-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: platform.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
              activeCategory === null
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
            }`}
          >
            All Tools
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                activeCategory === cat.id
                  ? 'text-white shadow-lg'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
              style={{
                backgroundColor: activeCategory === cat.id ? cat.color : undefined,
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Other Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {filteredTechnologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={`${tech.category}-${tech.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                    style={{ backgroundColor: `${tech.color}20` }}
                  />

                  {/* Content */}
                  <div className="relative flex flex-col items-center gap-3">
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-slate-100"
                      whileHover={{ rotateY: 360 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{ color: tech.color }}
                      />
                    </motion.div>

                    <div className="text-center">
                      <div className="text-sm font-bold text-slate-900">{tech.name}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            t.techStack.badges.cloudNative,
            t.techStack.badges.multiCloud,
            t.techStack.badges.production,
            t.techStack.badges.enterprise,
          ].map((badge, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 text-blue-700 font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
