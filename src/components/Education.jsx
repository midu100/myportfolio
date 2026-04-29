import { HiAcademicCap, HiBriefcase } from 'react-icons/hi2';

const education = [
  {
    year: '2020 - 2026',
    title: 'BSc in CSE',
    place: 'American international university bangladesh (AIUB)',
    desc: 'Studying computer science with focus on software engineering and web/app development and ai automation also.',
  },
  {
    year: '2017 - 2019',
    title: 'Higher Secondary (HSC)',
    place: 'Govt. Debendra College,Manikganj',
    desc: 'Completed HSC with science background.',
  },
];

const experience = [
  {
    year: 'jan,2026 - apr,2026',
    title: 'Web Developer Intern',
    place: 'Unified IT',
    desc: 'Building complete web applications using MERN stack. Working with many clients on diverse projects.',
  },
];

const TimelineItem = ({ item }) => (
  <div className="relative mb-10 last:mb-0 pl-8 group">
    {/* Timeline dot */}
    <div className="absolute left-0 top-1.5 w-[10px] h-[10px] rounded-full bg-primary/20 border-2 border-primary/60 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(0,230,138,0.5)] transition-all duration-300" />
    {/* Timeline line */}
    <div className="absolute left-[4px] top-[14px] bottom-[-24px] w-[2px] bg-dark-border group-last:hidden" />
    
    <span className="text-primary text-[11px] font-bold tracking-[2px] uppercase font-sans">{item.year}</span>
    <h4 className="font-display text-lg font-bold text-text-main mt-1.5 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
    <p className="text-text-secondary text-sm mt-0.5 font-sans font-medium">{item.place}</p>
    <p className="text-text-muted text-[13px] mt-2 leading-[1.7] font-sans">{item.desc}</p>
  </div>
);

const Education = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="shimmer-badge inline-block text-primary text-xs font-semibold tracking-[4px] uppercase px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15">My Journey</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 text-text-main">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Two columns */}
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Education */}
          <div className="flex-1" data-aos="fade-right" data-aos-duration="800">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                <HiAcademicCap className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-text-main">Education</h3>
            </div>
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>

          {/* Experience */}
          <div className="flex-1" data-aos="fade-left" data-aos-duration="800">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                <HiBriefcase className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-text-main">Experience</h3>
            </div>
            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default Education;
