import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-10 right-[10%] w-[600px] h-[600px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-[15%] right-[15%] w-3 h-3 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-[40%] right-[8%] w-2 h-2 rounded-full bg-primary/15 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[25%] right-[20%] w-1.5 h-1.5 rounded-full bg-primary/25 animate-float" style={{ animationDelay: '4s' }} />

      <div className="w-full max-w-5xl mx-auto px-6 lg:px-10 pt-20 lg:pt-0">
        <div data-aos="fade-up" data-aos-duration="1000">
          {/* Badge */}
          <div className="shimmer-badge inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/6 border border-primary/15 mb-10">
            <div className="glow-dot" />
            <span className="text-primary text-sm font-medium font-sans tracking-wide">Available for work</span>
          </div>

          {/* Greeting */}
          <p className="text-text-secondary text-lg sm:text-xl font-sans font-medium mb-3 tracking-wide" data-aos="fade-up" data-aos-delay="100">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[1.05] mb-5" data-aos="fade-up" data-aos-delay="200">
            <span className="gradient-text">Kazi Mridul</span>
          </h1>

          {/* Typewriter Role */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-text-main leading-tight">
              <Typewriter
                words={[
                  'Full-Stack MERN Developer',
                  'React.js Specialist',
                  'Node.js & Express.js Developer',
                  'UI/UX Enthusiast',
                  'AI Automation Expert',
                ]}
                speed={80}
                deleteSpeed={40}
                delay={2500}
                className="text-primary"
              />
            </h2>
          </div>

          <h3 className="text-base sm:text-lg font-sans font-medium text-text-muted mb-8 tracking-wide" data-aos="fade-up" data-aos-delay="400">
            React.js, Node.js & Express.js Specialist
          </h3>

          <p className="text-text-secondary text-base lg:text-[17px] max-w-2xl leading-[1.8] mb-12 font-sans" data-aos="fade-up" data-aos-delay="500">
            With <span className="text-primary font-semibold">2+ years</span> hands on 
            <span className="text-primary font-semibold"> experience</span>, working and building 
            fully functional scalable web applications. Specialized in MERN Stack development 
            with expertise in modern UI/UX design and AI automation tools.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-10" data-aos="fade-up" data-aos-delay="600">
            {[
              { num: '50+', label: 'Projects\nCompleted' },
              { num: '30+', label: 'Happy\nClients' },
              { num: '2+', label: 'Years\nExperience' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3.5">
                <span className="text-4xl lg:text-5xl font-display font-extrabold text-primary leading-none">{stat.num}</span>
                <span className="text-text-muted text-xs font-sans leading-snug uppercase tracking-wider whitespace-pre-line">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
    </section>
  );
};

export default Hero;
