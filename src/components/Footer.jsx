import { FaGithub, FaLinkedinIn, FaFacebookF, FaHeart } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative border-t border-dark-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
              <span className="font-display font-extrabold text-primary text-xs">KM</span>
            </div>
            <span className="text-text-secondary text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Center */}
          <p className="text-text-muted text-sm flex items-center gap-1.5">
            Developed by Kazi Mridul
          </p>

          {/* Right */}
          <div className="flex gap-3">
            {[
              { icon: FaGithub, href: '#' },
              { icon: FaLinkedinIn, href: '#' },
              { icon: FaFacebookF, href: '#' },
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-dark-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-300">
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
