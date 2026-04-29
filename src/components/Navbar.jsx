import { useState, useEffect } from 'react';
import { HiHome, HiUser, HiBriefcase, HiCodeBracket, HiRocketLaunch, HiPlayCircle, HiEnvelope, HiBars3, HiXMark } from 'react-icons/hi2';

const navItems = [
  { id: 'hero', icon: HiHome, label: 'Home' },
  { id: 'about', icon: HiUser, label: 'About' },
  { id: 'services', icon: HiBriefcase, label: 'Services' },
  { id: 'skills', icon: HiCodeBracket, label: 'Skills' },
  { id: 'projects', icon: HiRocketLaunch, label: 'Projects' },
  { id: 'video', icon: HiPlayCircle, label: 'Video' },
  { id: 'contact', icon: HiEnvelope, label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-[70px] flex-col items-center justify-between py-6 z-50 glass-card border-r border-dark-border border-t-0 border-b-0 border-l-0">
        {/* Logo */}
        <div 
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center cursor-pointer hover:from-primary/30 hover:to-primary/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,230,138,0.1)]" 
          onClick={() => scrollTo('hero')}
          title="Kazi Mridul"
        >
          <span className="font-display font-extrabold text-primary text-base tracking-tight">KM</span>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col gap-1.5">
          {navItems.map((item) => (
            <div key={item.id} className="nav-item relative group">
              <button
                onClick={() => scrollTo(item.id)}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  active === item.id
                    ? 'bg-primary/15 text-primary shadow-[0_0_20px_rgba(0,230,138,0.15)]'
                    : 'text-text-muted hover:text-text-main hover:bg-white/5'
                }`}
              >
                <item.icon size={20} />
              </button>
              <span className="nav-tooltip absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-dark-card border border-dark-border text-xs text-text-main whitespace-nowrap font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="w-8 h-1 rounded-full bg-primary/30" />
      </nav>

      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-card z-50 flex items-center justify-between px-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
            <span className="font-display font-extrabold text-primary text-sm">KM</span>
          </div>
          <span className="font-display font-bold text-text-main text-sm">Kazi Mridul</span>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="w-9 h-9 rounded-lg flex items-center justify-center text-text-main hover:bg-white/5 transition-colors">
          {mobileOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-3" onClick={() => setMobileOpen(false)}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all font-sans ${
                active === item.id ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:text-text-main'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;