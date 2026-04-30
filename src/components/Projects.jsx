import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const projects = [
  {
    title: 'E-commece-FullStack',
    desc: 'A full-featured e-commerce platform with product management, cart system, payment integration, and admin dashboard.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'RTK Query'],
    gradient: 'from-emerald-500/20 via-teal-500/8 to-cyan-500/20',
    live: 'https://ecommerce-next-js-indol.vercel.app/',
    code: 'https://github.com/midu100/E-commece-FullStack',
  },
  {
    title: 'AI Chat Application',
    desc: 'Real-time AI-powered chat application with conversation history, markdown support, and streaming responses.',
    tags: ['React.js', 'Express.js', 'OpenAI', 'TailwindCSS'],
    gradient: 'from-violet-500/20 via-purple-500/8 to-fuchsia-500/20',
    live: '#',
    code: '#',
  },
  {
    title: 'Real Estate Website',
    desc: 'Premium real estate listing platform with property search, filtering, agent profiles, and interactive maps.',
    tags: ['React.js', 'Firebase', 'TailwindCSS'],
    gradient: 'from-amber-500/20 via-orange-500/8 to-rose-500/20',
    live: 'https://real-estate-black-two.vercel.app/',
    code: 'https://github.com/midu100/real-estate',
  },
  {
    title: 'Ghorer_Bazar_Clone',
    desc: 'This is a popular clone website in Bnagladesh.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Redux'],
    gradient: 'from-blue-500/20 via-indigo-500/8 to-violet-500/20',
    live: 'https://ghorerbazarclone.netlify.app/',
    code: 'https://github.com/midu100/Ghorer_Bazar_Clone',
  },
  {
    title: 'All Project(30+)',
    desc: 'This are my all projects link. ',
    tags: ['React.js', 'Redux', 'Chart.js', 'Express.js'],
    gradient: 'from-pink-500/20 via-rose-500/8 to-red-500/20',
    live: '#',
    code: 'https://github.com/midu100',
  },
  // {
  //   title: 'Portfolio Template',
  //   desc: 'Modern, responsive portfolio template with smooth animations, dark theme, and customizable sections.',
  //   tags: ['React.js', 'TailwindCSS', 'AOS', 'Vite'],
  //   gradient: 'from-cyan-500/20 via-sky-500/8 to-blue-500/20',
  //   live: '#',
  //   code: '#',
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-purple-500/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="shimmer-badge inline-block text-primary text-xs font-semibold tracking-[4px] uppercase px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 text-text-main">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Projects */}
        <div className="flex flex-wrap gap-6">
          {projects.map((project, i) => (
            <div key={i} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] glass-card rounded-2xl overflow-hidden card-hover group" data-aos="fade-up" data-aos-delay={i * 80}>
              {/* Preview */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-15" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl font-extrabold text-white/10 group-hover:text-white/20 transition-all duration-500 group-hover:scale-110">
                    {project.title.split(' ')[0]}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-bg/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4">
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/25 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <FaArrowUpRightFromSquare size={15} />
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center text-white hover:bg-white/15 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <FaGithub size={17} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-text-main mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-[13px] leading-[1.7] mb-4 font-sans line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-0.5 rounded-md bg-white/4 border border-dark-border text-text-muted text-[10px] font-semibold font-sans tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default Projects;
