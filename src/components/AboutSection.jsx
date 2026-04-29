import { HiCheckBadge, HiGlobeAlt, HiCpuChip, HiPaintBrush } from 'react-icons/hi2';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="shimmer-badge inline-block text-primary text-xs font-semibold tracking-[4px] uppercase px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 text-text-main">
            Know Me <span className="gradient-text">Better</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Left - About Text */}
          <div className="flex-1" data-aos="fade-right" data-aos-duration="800">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-5 text-text-main leading-snug">
              Passionate <span className="text-primary">Developer</span><br />Based in Bangladesh
            </h3>
            <p className="text-text-secondary leading-[1.85] mb-4 font-sans text-[15px]">
              I am a dedicated Full Stack Web Developer with expertise in building modern, 
              responsive, and high-performance web applications. With a strong foundation in 
              the MERN stack, I create seamless digital experiences that combine beautiful 
              design with robust functionality.
            </p>
            <p className="text-text-secondary leading-[1.85] mb-8 font-sans text-[15px]">
              My passion lies in transforming complex problems into simple, beautiful, and 
              intuitive solutions. I also work with AI automation tools and various modern 
              development workflows to deliver cutting-edge solutions.
            </p>

            {/* Info List */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-8">
              {[
                { label: 'Name', value: 'Kazi Mridul' },
                { label: 'Email', value: 'your@email.com' },
                { label: 'Location', value: 'Bangladesh' },
                { label: 'Experience', value: '2+ Years' },
              ].map((info, i) => (
                <div key={i} className="flex gap-3 items-center sm:w-[calc(50%-8px)]">
                  <span className="text-text-muted text-sm font-sans min-w-[85px]">{info.label}:</span>
                  <span className="text-text-main text-sm font-semibold font-sans">{info.value}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary/8 border border-primary/25 text-primary font-semibold text-sm hover:bg-primary/15 hover:border-primary/40 transition-all duration-300 font-sans group">
              Let's Talk 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Right - Feature Cards */}
          <div className="w-full lg:w-[280px] shrink-0" data-aos="fade-left" data-aos-duration="800">
            <div className="flex flex-wrap gap-3">
              {[
                { icon: HiCheckBadge, label: 'Clean Code', color: 'text-emerald-400', bg: 'bg-emerald-400/5 border-emerald-400/15' },
                { icon: HiGlobeAlt, label: 'Responsive', color: 'text-blue-400', bg: 'bg-blue-400/5 border-blue-400/15' },
                { icon: HiCpuChip, label: 'Performance', color: 'text-purple-400', bg: 'bg-purple-400/5 border-purple-400/15' },
                { icon: HiPaintBrush, label: 'Modern UI', color: 'text-amber-400', bg: 'bg-amber-400/5 border-amber-400/15' },
              ].map((item, i) => (
                <div key={i} className={`w-[calc(50%-6px)] rounded-xl ${item.bg} border p-5 flex flex-col items-center justify-center gap-3 aspect-square card-hover`}>
                  <item.icon className={item.color} size={30} />
                  <span className="text-text-secondary text-xs font-semibold font-sans">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section bottom divider */}
      <div className="section-divider mt-20" />
    </section>
  );
};

export default AboutSection;
