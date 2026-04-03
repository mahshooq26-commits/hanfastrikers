import { motion } from "framer-motion";
import stadiumBg from "@/assets/stadium-bg.jpg";
import logo from "@/assets/logo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={stadiumBg}
        alt="Cricket stadium"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="Hanfa Cricketers Adkar Logo"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto border-4 border-gold glow-gold object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-lg md:text-xl tracking-[0.3em] uppercase text-primary mb-2"
        >
          Adkar Premier League
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-gold-gradient tracking-wider mb-6"
        >
          HANFA STRIKERS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-6 text-muted-foreground font-body text-sm md:text-base"
        >
          <span>📍 School Ground, Adkar</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>📅 April 5, 2025</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10"
        >
          <a
            href="#players"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading text-lg tracking-wider rounded-sm hover:bg-gold-light transition-colors"
          >
            MEET THE SQUAD
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
