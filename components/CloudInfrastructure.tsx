'use client';

export default function CloudInfrastructure() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-64">
      {/* Cloud servers */}
      <svg viewBox="0 0 800 300" className="w-full h-full">
        {/* Background clouds */}
        <g className="animate-float">
          <path
            d="M150 100c0-20 16-36 36-36 20 0 36 16 36 36h-72z"
            fill="url(#cloudGradient1)"
            opacity="0.3"
          />
        </g>

        {/* Main infrastructure */}
        <g>
          {/* Servers */}
          <g className="animate-pulse-slow">
            <rect x="100" y="150" width="80" height="100" rx="8" fill="url(#serverGradient)" />
            <line x1="110" y1="170" x2="170" y2="170" stroke="#0ea5e9" strokeWidth="2" />
            <line x1="110" y1="190" x2="170" y2="190" stroke="#0ea5e9" strokeWidth="2" />
            <circle cx="120" cy="220" r="4" fill="#10b981" className="animate-pulse" />
            <circle cx="135" cy="220" r="4" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="150" cy="220" r="4" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          </g>

          <g className="animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
            <rect x="360" y="150" width="80" height="100" rx="8" fill="url(#serverGradient)" />
            <line x1="370" y1="170" x2="430" y2="170" stroke="#0ea5e9" strokeWidth="2" />
            <line x1="370" y1="190" x2="430" y2="190" stroke="#0ea5e9" strokeWidth="2" />
            <circle cx="380" cy="220" r="4" fill="#10b981" className="animate-pulse" />
            <circle cx="395" cy="220" r="4" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="410" cy="220" r="4" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          </g>

          <g className="animate-pulse-slow" style={{ animationDelay: '1s' }}>
            <rect x="620" y="150" width="80" height="100" rx="8" fill="url(#serverGradient)" />
            <line x1="630" y1="170" x2="690" y2="170" stroke="#0ea5e9" strokeWidth="2" />
            <line x1="630" y1="190" x2="690" y2="190" stroke="#0ea5e9" strokeWidth="2" />
            <circle cx="640" cy="220" r="4" fill="#10b981" className="animate-pulse" />
            <circle cx="655" cy="220" r="4" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="670" cy="220" r="4" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          </g>

          {/* Connections */}
          <path
            d="M 180 200 L 360 200"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="5,5"
            className="animate-dash"
          />
          <path
            d="M 440 200 L 620 200"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="5,5"
            className="animate-dash"
          />

          {/* Data packets */}
          <circle cx="0" cy="200" r="6" fill="#f59e0b" className="animate-flow-1" />
          <circle cx="0" cy="200" r="6" fill="#f59e0b" className="animate-flow-2" />
          <circle cx="0" cy="200" r="6" fill="#f59e0b" className="animate-flow-3" />
        </g>

        {/* Cloud at top */}
        <g className="animate-float" style={{ animationDelay: '0.5s' }}>
          <ellipse cx="400" cy="60" rx="80" ry="30" fill="url(#cloudGradient2)" opacity="0.9" />
          <ellipse cx="360" cy="70" rx="50" ry="25" fill="url(#cloudGradient2)" opacity="0.9" />
          <ellipse cx="440" cy="70" rx="50" ry="25" fill="url(#cloudGradient2)" opacity="0.9" />
          <text x="370" y="70" fill="white" fontSize="20" fontWeight="bold">CLOUD</text>
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="serverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="cloudGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="cloudGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        @keyframes flow1 {
          0% { cx: 180; }
          100% { cx: 360; }
        }
        @keyframes flow2 {
          0% { cx: 360; }
          100% { cx: 440; }
        }
        @keyframes flow3 {
          0% { cx: 440; }
          100% { cx: 620; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
        .animate-flow-1 {
          animation: flow1 2s ease-in-out infinite;
        }
        .animate-flow-2 {
          animation: flow2 2s ease-in-out infinite 0.7s;
        }
        .animate-flow-3 {
          animation: flow3 2s ease-in-out infinite 1.4s;
        }
      `}</style>
    </div>
  );
}
