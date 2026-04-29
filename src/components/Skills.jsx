import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa6';
import { SiExpress, SiMongodb, SiTailwindcss, SiRedux, SiFirebase, SiJquery } from 'react-icons/si';
import { HiCpuChip, HiWrenchScrewdriver } from 'react-icons/hi2';
import { RiNextjsFill } from 'react-icons/ri';

const skills = [
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: RiNextjsFill, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'RTK Query', icon: SiRedux, color: '#764ABC' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
  { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
  { name: 'AI Automation', icon: HiCpuChip, color: '#00e68a' },
  { name: 'Dev Tools', icon: HiWrenchScrewdriver, color: '#FF6B6B' },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="shimmer-badge inline-block text-primary text-xs font-semibold tracking-[4px] uppercase px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15">My Expertise</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 text-text-main">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <div key={i}
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)] glass-card rounded-xl p-5 flex flex-col items-center gap-3 skill-card-hover group cursor-default"
              data-aos="zoom-in" data-aos-delay={i * 40} data-aos-duration="500"
            >
              <div className="w-13 h-13 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}08`, border: `1px solid ${skill.color}20` }}>
                <skill.icon size={26} style={{ color: skill.color }} className="transition-transform duration-300" />
              </div>
              <span className="text-text-secondary text-[11px] font-semibold text-center group-hover:text-text-main transition-colors font-sans tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-12 font-sans" data-aos="fade-up">
          ...and many more tools & technologies I work with daily
        </p>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default Skills;
