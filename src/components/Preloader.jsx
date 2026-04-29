import { useState, useEffect } from 'react';

const Preloader = ({ onFinish }) => {
  const [phase, setPhase] = useState(0); // 0: line draw, 1: name reveal, 2: role reveal, 3: exit

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2400),
      setTimeout(() => onFinish?.(), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center transition-all duration-700 ${
        phase >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        transform: phase >= 3 ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.6s ease',
      }}
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Background glow */}
      <div className="absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-5">
        {/* Top line */}
        <div className="h-[1px] bg-primary/30 transition-all duration-700 ease-out"
          style={{ width: phase >= 0 ? '120px' : '0px' }} />

        {/* Name */}
        <div className="overflow-hidden">
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight transition-all duration-700 ease-out"
            style={{
              transform: phase >= 1 ? 'translateY(0)' : 'translateY(100%)',
              opacity: phase >= 1 ? 1 : 0,
            }}
          >
            <span className="text-text-main">Kazi </span>
            <span className="gradient-text">Mridul</span>
          </h1>
        </div>

        {/* Role text */}
        <div className="overflow-hidden">
          <p
            className="text-text-muted text-sm sm:text-base font-sans tracking-[4px] uppercase transition-all duration-600 ease-out"
            style={{
              transform: phase >= 2 ? 'translateY(0)' : 'translateY(100%)',
              opacity: phase >= 2 ? 1 : 0,
            }}
          >
            Full Stack Developer
          </p>
        </div>

        {/* Bottom line */}
        <div className="h-[1px] bg-primary/30 transition-all duration-700 ease-out delay-100"
          style={{ width: phase >= 1 ? '60px' : '0px' }} />

        
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
