import { useState } from 'react';
import { HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane } from 'react-icons/hi2';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa6';

const contactInfo = [
  { icon: HiEnvelope, label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { icon: HiPhone, label: 'Phone', value: '+880 1XXXXXXXXX', href: 'tel:+8801XXXXXXXXX' },
  { icon: HiMapPin, label: 'Location', value: 'Bangladesh', href: '#' },
];

const socials = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (Connect your backend to make this functional)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="shimmer-badge inline-block text-primary text-xs font-semibold tracking-[4px] uppercase px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15">Get In Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 text-text-main">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Contact Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left */}
          <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-5" data-aos="fade-right" data-aos-duration="800">
            <h3 className="font-display text-xl font-bold text-text-main mb-1">
              Let's work <span className="text-primary">together</span>
            </h3>
            <p className="text-text-secondary text-[14px] leading-[1.7] mb-1 font-sans">
              Feel free to reach out for collaborations, freelance work, or just to say hi!
            </p>

            {contactInfo.map((info, i) => (
              <a key={i} href={info.href}
                className="glass-card rounded-xl p-4 flex items-center gap-4 card-hover group">
                <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                  <info.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-[10px] uppercase tracking-[2px] font-sans font-semibold">{info.label}</p>
                  <p className="text-text-main text-sm font-semibold font-sans mt-0.5">{info.value}</p>
                </div>
              </a>
            ))}

            <div className="pt-3">
              <p className="text-text-muted text-[10px] uppercase tracking-[2px] mb-3 font-sans font-semibold">Follow Me</p>
              <div className="flex gap-2.5">
                {socials.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noreferrer" title={social.label}
                    className="w-10 h-10 rounded-xl bg-white/4 border border-dark-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex-1" data-aos="fade-left" data-aos-duration="800">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label className="text-text-muted text-[10px] uppercase tracking-[2px] mb-2.5 block font-sans font-semibold">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/4 border border-dark-border text-text-main text-sm font-sans placeholder:text-text-muted/40 focus:outline-none focus:border-primary/40 focus:bg-white/6 focus:shadow-[0_0_20px_rgba(0,230,138,0.05)] transition-all duration-300" />
                </div>
                <div className="flex-1">
                  <label className="text-text-muted text-[10px] uppercase tracking-[2px] mb-2.5 block font-sans font-semibold">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/4 border border-dark-border text-text-main text-sm font-sans placeholder:text-text-muted/40 focus:outline-none focus:border-primary/40 focus:bg-white/6 focus:shadow-[0_0_20px_rgba(0,230,138,0.05)] transition-all duration-300" />
                </div>
              </div>
              <div>
                <label className="text-text-muted text-[10px] uppercase tracking-[2px] mb-2.5 block font-sans font-semibold">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project discussion"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/4 border border-dark-border text-text-main text-sm font-sans placeholder:text-text-muted/40 focus:outline-none focus:border-primary/40 focus:bg-white/6 focus:shadow-[0_0_20px_rgba(0,230,138,0.05)] transition-all duration-300" />
              </div>
              <div>
                <label className="text-text-muted text-[10px] uppercase tracking-[2px] mb-2.5 block font-sans font-semibold">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/4 border border-dark-border text-text-main text-sm font-sans placeholder:text-text-muted/40 focus:outline-none focus:border-primary/40 focus:bg-white/6 focus:shadow-[0_0_20px_rgba(0,230,138,0.05)] transition-all duration-300 resize-none" />
              </div>
              <button type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-dark-bg font-bold text-sm hover:bg-primary-light transition-all duration-300 shadow-[0_0_25px_rgba(0,230,138,0.15)] hover:shadow-[0_0_40px_rgba(0,230,138,0.3)] flex items-center justify-center gap-2 cursor-pointer font-sans tracking-wide group">
                <HiPaperAirplane size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
