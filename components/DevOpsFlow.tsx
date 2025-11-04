'use client';

import { useEffect, useState } from 'react';
import { FaCode, FaDocker, FaServer, FaChartLine, FaCheckCircle } from 'react-icons/fa';

export default function DevOpsFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: FaCode,
      title: 'Code',
      desc: 'Geliştirme',
      detail: 'Geliştiriciler kod yazar',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaDocker,
      title: 'Build',
      desc: 'Derleme',
      detail: 'Otomatik build süreçleri',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaCheckCircle,
      title: 'Test',
      desc: 'Test',
      detail: 'Otomatik testler çalışır',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaServer,
      title: 'Deploy',
      desc: 'Yayınlama',
      detail: 'Production\'a gönderilir',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FaChartLine,
      title: 'Monitor',
      desc: 'İzleme',
      detail: 'Sürekli izleme ve iyileştirme',
      color: 'from-pink-500 to-pink-600'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="relative py-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DevOps Sürekli Döngüsü
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Günde 10+ deployment ile hızlı, güvenilir yazılım teslimatı
          </p>
        </div>

        {/* Circular Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center circle with rotating ring */}
          <div className="relative w-64 h-64 mx-auto">
            {/* Rotating outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary-400 opacity-30"
                 style={{
                   animation: 'spin 15s linear infinite'
                 }}></div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex flex-col items-center justify-center shadow-2xl">
                <div className="text-white text-4xl font-bold">
                  {activeStep + 1}/{steps.length}
                </div>
                <div className="text-white/80 text-xs mt-1">Aktif</div>
              </div>
            </div>

            {/* Steps arranged in circle */}
            {steps.map((step, index) => {
              const angle = (index * 360) / steps.length - 90; // Start from top
              const radius = 180;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isPassed = index < activeStep;

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transition: 'all 0.5s ease'
                  }}
                >
                  {/* Connecting line to center */}
                  <div className={`absolute top-1/2 left-1/2 w-32 h-0.5 origin-left transition-all duration-500 ${
                    isActive ? 'bg-primary-400 opacity-100' : 'bg-gray-600 opacity-20'
                  }`}
                       style={{
                         transform: `rotate(${angle + 180}deg)`,
                         transformOrigin: '0 50%'
                       }}></div>

                  {/* Step node */}
                  <div className={`relative transform transition-all duration-500 ${
                    isActive ? 'scale-125' : 'scale-100'
                  }`}>
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl ${
                      isActive ? 'animate-pulse' : ''
                    } ${isPassed || isActive ? 'opacity-100' : 'opacity-40'}`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Checkmark for passed steps */}
                    {isPassed && !isActive && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}

                    {/* Label */}
                    <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 text-center whitespace-nowrap transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-60'
                    }`}>
                      <div className={`text-sm font-bold ${isActive ? 'text-primary-400 text-lg' : 'text-white'}`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-400">{step.desc}</div>
                      {isActive && (
                        <div className="text-xs text-primary-300 mt-1 animate-pulse">
                          {step.detail}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats below */}
          <div className="grid grid-cols-3 gap-6 mt-32 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-primary-400">87%</div>
              <div className="text-sm text-gray-400 mt-1">Daha Hızlı</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-green-400">10x</div>
              <div className="text-sm text-gray-400 mt-1">Deploy Sayısı</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-pink-400">99.9%</div>
              <div className="text-sm text-gray-400 mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
    </div>
  );
}
