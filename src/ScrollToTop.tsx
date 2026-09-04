import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Lalabas lang ang button kapag nag-scroll pababa ng 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll pabalik sa pinaka-taas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-surface-container-high/80 backdrop-blur-md border border-purple-500/30 text-purple-400 hover:text-white hover:bg-[#bd34fe] hover:border-[#bd34fe] transition-all duration-300 shadow-[0_0_20px_rgba(189,52,254,0.3)] group cursor-pointer"
        >
          {/* Arrow Up SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}