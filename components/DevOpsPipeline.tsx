'use client';

import { useState, useEffect } from 'react';
import { FaCode, FaFlask, FaRocket, FaCheckCircle } from 'react-icons/fa';

const stages = [
  { name: 'Code', icon: FaCode, color: 'from-blue-500 to-blue-600', delay: 0 },
  { name: 'Build', icon: FaFlask, color: 'from-purple-500 to-purple-600', delay: 1000 },
  { name: 'Test', icon: FaCheckCircle, color: 'from-green-500 to-green-600', delay: 2000 },
  { name: 'Deploy', icon: FaRocket, color: 'from-orange-500 to-orange-600', delay: 3000 },
];

export default function DevOpsPipeline() {
  const [activeStage, setActiveStage] = useState(0);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => {
        const next = (prev + 1) % stages.length;
        if (next === 0) {
          setCompletedStages([]);
        } else {
          setCompletedStages((completed) => {
            if (!completed.includes(prev)) {
              return [...completed, prev];
            }
            return completed;
          });
        }
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="relative">
        {/* Pipeline stages */}
        <div className="grid grid-cols-4 gap-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = activeStage === index;
            const isCompleted = completedStages.includes(index);

            return (
              <div key={stage.name} className="relative">
                {/* Connector line */}
                {index < stages.length - 1 && (
                  <div className="absolute top-1/2 left-full w-full h-1 -translate-y-1/2 z-0">
                    <div
                      className={`h-full transition-all duration-1000 ${
                        isCompleted || isActive
                          ? 'bg-gradient-to-r from-primary-500 to-primary-600'
                          : 'bg-secondary-300'
                      }`}
                      style={{
                        width: isCompleted ? '100%' : isActive ? '50%' : '0%',
                      }}
                    />
                  </div>
                )}

                {/* Stage box */}
                <div
                  className={`relative z-10 flex flex-col items-center p-4 rounded-xl transition-all duration-500 ${
                    isActive
                      ? `bg-gradient-to-br ${stage.color} scale-110 shadow-2xl`
                      : isCompleted
                      ? 'bg-gradient-to-br from-green-100 to-green-200 scale-105'
                      : 'bg-white border-2 border-secondary-200'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isActive || isCompleted ? 'text-white' : 'text-secondary-600'
                    } ${isActive ? 'animate-pulse' : ''}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`mt-2 text-sm font-semibold ${
                      isActive || isCompleted ? 'text-white' : 'text-secondary-700'
                    }`}
                  >
                    {stage.name}
                  </span>

                  {/* Loading indicator */}
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}

                  {/* Checkmark for completed */}
                  {isCompleted && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Status text */}
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-secondary-700">
            Pipeline Status:{' '}
            <span className="text-primary-600">
              {activeStage === 0 && completedStages.length === 0
                ? 'Starting...'
                : completedStages.length === stages.length - 1
                ? 'Completed!'
                : `Running ${stages[activeStage].name}...`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
