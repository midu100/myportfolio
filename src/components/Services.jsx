import { HiComputerDesktop, HiServerStack, HiCommandLine, HiCpuChip } from 'react-icons/hi2';

const services = [
  {
    icon: HiComputerDesktop,
    title: 'Frontend Development',
    desc: 'Building beautiful, responsive user interfaces with React.js, TailwindCSS, and modern JavaScript. Pixel-perfect designs with smooth animations.',
    tags: ['React.js', 'TailwindCSS', 'JavaScript'],
    accent: 'from-cyan-400/10 to-blue-500/5',
  },
  {
    icon: HiServerStack,
    title: 'Backend Development',
    desc: 'Creating robust server-side applications with Node.js and Express.js. RESTful APIs, database management, and authentication systems.',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    accent: 'from-green-400/10 to-emerald-500/5',
  },
  {
    icon: HiCommandLine,
    title: 'Full Stack Solutions',
    desc: 'End-to-end web application development using the MERN stack. From concept to deployment with scalable architecture.',
    tags: ['MERN', 'Redux', 'Firebase'],
    accent: 'from-violet-400/10 to-purple-500/5',
  },
  {
    icon: HiCpuChip,
    title: 'AI Automation',
    desc: 'Leveraging AI tools to automate workflows, enhance productivity, and build intelligent features into web applications.',
    tags: ['AI Tools', 'Automation', 'Integration'],
    accent: 'from-amber-400/10 to-orange-500/5',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="shimmer-badge inline-block text-primary text-xs font-semibold tracking-[4px] uppercase px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15">What I Do</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 text-text-main">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap gap-6">
          {services.map((service, i) => (
            <div key={i} className="w-full md:w-[calc(50%-12px)] glass-card rounded-2xl p-7 card-hover group relative overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
              {/* Subtle gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="w-14 h-14 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                <service.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-[1.8] mb-5 font-sans">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 text-primary/80 text-xs font-medium font-sans">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default Services;
