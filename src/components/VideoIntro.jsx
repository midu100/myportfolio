import { HiPlayCircle } from 'react-icons/hi2';
import { useState } from 'react';

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = ''; // তোমার video URL এখানে বসাও

  return (
    <section id="video" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="shimmer-badge inline-block text-primary text-xs font-semibold tracking-[4px] uppercase px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15">Introduction</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 text-text-main">
            Video <span className="gradient-text">Intro</span>
          </h2>
          <div className="section-line" />
          <p className="text-text-secondary text-[15px] mt-5 max-w-lg mx-auto font-sans leading-relaxed">
            Watch a short introduction about me and my development journey.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-3xl mx-auto" data-aos="zoom-in" data-aos-duration="800">
          <div className="relative rounded-2xl overflow-hidden neon-border aspect-video">
            {!isPlaying ? (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-dark-card to-primary/4 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-grid opacity-15" />
                <div className="absolute top-10 left-10 w-24 h-24 rounded-full border border-primary/8 animate-spin-slow" />
                <div className="absolute bottom-10 right-10 w-36 h-36 rounded-full border border-primary/5 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/20 animate-float" />

                <button onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center group cursor-pointer hover:bg-primary/25 hover:border-primary/60 transition-all duration-300 animate-pulse-glow">
                  <HiPlayCircle className="text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
                </button>
                <p className="relative z-10 text-text-muted text-sm mt-5 font-sans font-medium tracking-wide">Click to play</p>

                <div className="absolute bottom-5 left-5 flex items-center gap-2">
                  <div className="glow-dot" />
                  <span className="text-text-muted text-[11px] font-sans tracking-wider uppercase">Video Intro</span>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-dark-card flex items-center justify-center">
                {videoUrl.includes('youtube') || videoUrl.includes('youtu.be') ? (
                  <iframe src={videoUrl + '?autoplay=1'} title="Video Introduction" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                ) : videoUrl ? (
                  <video src={videoUrl} controls autoPlay className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-8">
                    <HiPlayCircle className="text-primary/20 mx-auto mb-4" size={64} />
                    <p className="text-text-secondary text-lg font-display font-bold">Video Coming Soon</p>
                    <p className="text-text-muted text-sm mt-2 font-sans">VideoIntro.jsx এ তোমার video URL বসাও</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default VideoIntro;
