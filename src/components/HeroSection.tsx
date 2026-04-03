import { motion, useScroll, useTransform } from "framer-motion";
import stadiumBg from "@/assets/stadium-bg.jpg";
import logo from "@/assets/logo.jpeg";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img
          src={stadiumBg}
          alt="Cricket stadium"
          className="w-full h-full object-cover select-none"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glassmorphism rounded-3xl p-8 md:p-16 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-10 relative"
          >
            <div className="absolute inset-0 bg-gold blur-[60px] opacity-20 rounded-full scale-150 pointer-events-none" />
            <img
              src={logo}
              alt="Hanfa Cricketers Adkar Logo"
              className="relative w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto border-4 border-gold shadow-[0_0_30px_rgba(255,191,0,0.4)] object-cover bg-black"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="font-heading text-sm md:text-xl uppercase text-gold font-bold mb-4 drop-shadow-md"
          >
            Adkar Premier League 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight leading-none mb-8 drop-shadow-lg"
          >
            HANFA <br className="md:hidden" /> STRIKERS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 font-body text-sm md:text-base bg-black/40 w-fit mx-auto px-6 py-3 rounded-full border border-white/5"
          >
            <span className="flex items-center gap-2">📍 School Ground, Adkar</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="flex items-center gap-2">📅 April 5, 2025</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-12"
          >
            <a
              href="#players"
              className="inline-block px-10 py-4 bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-heading text-lg md:text-xl font-bold tracking-widest rounded-full shadow-[0_0_20px_rgba(255,191,0,0.4)] hover:shadow-[0_0_40px_rgba(255,191,0,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              MEET THE SQUAD
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-gray-400 font-body tracking-widest text-xs uppercase">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-gold to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
