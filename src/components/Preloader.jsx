import { useState, useEffect } from 'react';

const Preloader = ({ onFinish }) => {
  const [phase, setPhase] = useState(0);

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
      className={`fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center px-4 transition-all duration-700 ${
        phase >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        transform: phase >= 3 ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.6s ease',
      }}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Glow (responsive) */}
      <div className="absolute w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-primary/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-4 sm:gap-5">
        
        {/* Top line */}
        <div
          className="h-[1px] bg-primary/30 transition-all duration-700 ease-out"
          style={{ width: phase >= 0 ? 'clamp(80px, 20vw, 140px)' : '0px' }}
        />

        {/* Name */}
        <div className="overflow-hidden">
          <h1
            className="font-display font-extrabold tracking-tight text-3xl sm:text-5xl lg:text-6xl transition-all duration-700 ease-out text-center"
            style={{
              transform: phase >= 1 ? 'translateY(0)' : 'translateY(100%)',
              opacity: phase >= 1 ? 1 : 0,
            }}
          >
            <span className="text-text-main">Kazi </span>
            <span className="gradient-text">Mridul</span>
          </h1>
        </div>

        {/* Role */}
        <div className="overflow-hidden">
          <p
            className="text-text-muted text-[10px] sm:text-sm lg:text-base font-sans tracking-[3px] sm:tracking-[5px] uppercase transition-all duration-700 ease-out text-center"
            style={{
              transform: phase >= 2 ? 'translateY(0)' : 'translateY(100%)',
              opacity: phase >= 2 ? 1 : 0,
            }}
          >
            Full Stack Developer
          </p>
        </div>

        {/* Bottom line */}
        <div
          className="h-[1px] bg-primary/30 transition-all duration-700 ease-out delay-100"
          style={{ width: phase >= 1 ? 'clamp(40px, 10vw, 80px)' : '0px' }}
        />
      </div>
    </div>
  );
};

export default Preloader;