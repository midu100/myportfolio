import { FaGithub, FaLinkedinIn, FaFacebookF, FaXTwitter, FaDownload } from 'react-icons/fa6';
import { HiEnvelope } from 'react-icons/hi2';
import mridul from '../assets/mridul.png'

const ProfileCard = () => {
  return (
    <div className="h-full w-full flex flex-col bg-dark-card border-r border-dark-border overflow-y-auto">
      {/* Profile Photo */}
      <div className="w-full aspect-square overflow-hidden relative shrink-0">
        <div className="w-full h-full bg-gradient-to-b from-primary/10 via-dark-card to-dark-card flex items-center justify-center">
          {/* img */}
          <img src={mridul} alt="Kazi Mridul" className="w-full h-full object-cover" />
          {/* <span className="text-7xl font-display font-extrabold gradient-text">KM</span> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-card to-transparent" />
      </div>

      {/* Info Section */}
      <div className="flex flex-col items-center text-center px-5 py-5 flex-1">
        {/* Role Tag */}
        <span className="text-primary text-[10px] font-semibold tracking-[3px] uppercase mb-3 font-sans">
          MERN Stack Developer
        </span>

        {/* Name */}
        <h2 className="font-display text-lg font-extrabold text-text-main leading-tight mb-5">
          Hi, I'm <span className="gradient-text">Kazi Mridul</span>
        </h2>

        {/* Social Icons */}
        <div className="flex items-center gap-2 mb-5">
          {[
            { icon: FaGithub, href: 'https://github.com/midu100' },
            { icon: FaLinkedinIn, href: '#' },
            { icon: FaFacebookF, href: 'https://www.facebook.com/kajzzi.mridul.al.taimur/' },
            { icon: FaXTwitter, href: '#' },
          ].map((social, i) => (
            <a key={i} href={social.href} target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-dark-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
              <social.icon size={14} />
            </a>
          ))}
        </div>

        <div className="flex-1" />

        {/* Action Buttons */}
        <div className="w-full flex gap-2 mt-4">
          <a href="#contact"
            className="flex-1 py-3 rounded-xl bg-primary text-dark-bg font-semibold text-xs text-center hover:bg-primary-light transition-all duration-300 shadow-[0_0_20px_rgba(0,230,138,0.15)] font-sans">
            <span className="flex items-center justify-center gap-1.5">
              <HiEnvelope size={14} /> Contact Me
            </span>
          </a>
          <a href="#"
            className="flex-1 py-3 rounded-xl border border-dark-border text-text-secondary font-semibold text-xs text-center hover:border-primary/40 hover:text-primary transition-all duration-300 font-sans">
            <span className="flex items-center justify-center gap-1.5">
              <FaDownload size={12} /> Resume
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
