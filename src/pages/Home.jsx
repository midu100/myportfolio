import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import VideoIntro from '../components/VideoIntro';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <Skills />
      <Projects />
      <VideoIntro />
      <Education />
      <Contact />
    </>
  );
};

export default Home;