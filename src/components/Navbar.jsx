"use client";
import { useState, useEffect } from "react";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiCodeBracket,
  HiRocketLaunch,
  HiPlayCircle,
  HiEnvelope,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";

const navItems = [
  { id: "hero", icon: HiHome, label: "Home" },
  { id: "about", icon: HiUser, label: "About" },
  { id: "services", icon: HiBriefcase, label: "Services" },
  { id: "skills", icon: HiCodeBracket, label: "Skills" },
  { id: "projects", icon: HiRocketLaunch, label: "Projects" },
  { id: "video", icon: HiPlayCircle, label: "Video" },
  { id: "contact", icon: HiEnvelope, label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔥 Smooth scroll spy (optimized)
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const scrollPos = window.scrollY + 150;

        for (let i = navItems.length - 1; i >= 0; i--) {
          const section = document.getElementById(navItems[i].id);
          if (section && section.offsetTop <= scrollPos) {
            setActive(navItems[i].id);
            break;
          }
        }
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* 🔥 Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 h-[90vh] w-[55px] flex-col items-center justify-between py-6 z-50 
      backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg">

        {/* Logo */}
        <div
          onClick={() => scrollTo("hero")}
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          <span className="font-bold text-primary">KM</span>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <div key={item.id} className="group relative">
              <button
                onClick={() => scrollTo(item.id)}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  active === item.id
                    ? "bg-primary/20 text-primary scale-110 shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <item.icon size={20} />
              </button>

              {/* Tooltip */}
              <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 text-xs rounded-md bg-black/80 text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom dot */}
        <div className="w-6 h-1 rounded-full bg-primary/40" />
      </nav>

      {/* 🔥 Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 flex items-center justify-between px-5 h-16">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-sm">KM</span>
          </div>
          <span className="text-white font-semibold text-sm">
            Kazi Mridul
          </span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-9 h-9 flex items-center justify-center text-white"
        >
          {mobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
        </button>
      </div>

      {/* 🔥 Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-lg transition ${
              active === item.id
                ? "bg-primary/20 text-primary"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <item.icon size={22} />
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;