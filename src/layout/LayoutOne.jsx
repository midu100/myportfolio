import { useEffect, useState, useCallback } from 'react';
import { Outlet } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

const LayoutOne = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderFinish = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
      });
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Preloader */}
      {loading && <Preloader onFinish={handlePreloaderFinish} />}

      {/* Main Layout */}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease 0.3s' }}>
        <Navbar />

        <div className="flex">
          {/* Profile Card - Fixed on Desktop */}
          <aside className="hidden lg:block fixed left-[70px] top-0 h-screen w-[300px] z-40">
            <ProfileCard />
          </aside>

          {/* Profile Card - Mobile */}
          <div className="lg:hidden w-full">
            <div className="mt-16 mx-4 rounded-2xl overflow-hidden border border-dark-border">
              <ProfileCard />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <main className="lg:ml-[370px]">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default LayoutOne;