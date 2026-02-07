import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Sports Car"
          className="w-full h-full object-cover grayscale brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white opacity-10"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Re-creation in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-48 md:w-80 h-auto mx-auto mb-6 text-white"
            viewBox="0 0 200 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M10,40 Q30,40 50,30 T90,28 T130,30 T170,28 T190,40 L185,45 Q160,35 130,35 T70,35 Q40,35 15,45 Z" />
          </motion.svg>

          <div className="inline-block relative">
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, type: "spring" }}
              className="font-script text-6xl md:text-9xl text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.5)] block"
            >
              Bashar Autos Ltd
            </motion.span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1 }}
              className="h-px bg-white/30 my-2 mx-auto"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 2 }}
              className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.8em] block"
            >
              Auto Repair Services
            </motion.span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 leading-tight text-white/90"
        >
          PREMIUM <span className="text-yellow-400">VIP</span> PERFORMANCE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="text-sm md:text-lg font-light text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed uppercase tracking-widest"
        >
          Luxury Auto Care & Car Dealership <br />
          <span className="text-white font-bold italic">
            Brand New & Certified Pre-Owned Cars
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(250,204,21,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookClick}
            className="group relative w-full sm:w-auto overflow-hidden bg-yellow-400 text-black px-12 py-5 rounded-sm font-black uppercase tracking-[0.2em] transition-all"
          >
            <span className="relative z-10">Book Service</span>
            <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-20"></div>
          </motion.button>

          <motion.a
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(250,204,21,1)",
              color: "rgba(250,204,21,1)",
            }}
            whileTap={{ scale: 0.95 }}
            href="tel:07417451384"
            className="w-full sm:w-auto border-2 border-white/20 text-white px-12 py-5 rounded-sm font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative side element */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-yellow-400/50"></div>
          <span className="rotate-90 text-[10px] font-bold uppercase tracking-[0.5em] text-yellow-400">
            EST 2024
          </span>
        </div>
      </motion.div>

      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
