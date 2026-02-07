import React from "react";
import { SERVICES } from "../constants.tsx";
import { motion } from "framer-motion";

interface ServicesProps {
  onBookClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-4">
              ELITE <span className="text-yellow-400">AUTO</span> SOLUTIONS
            </h2>
            <div className="h-2 w-48 bg-yellow-400 mb-8"></div>
            <p className="text-zinc-500 text-lg uppercase tracking-widest font-light leading-relaxed">
              Providing world-class technical expertise for high-performance and
              luxury vehicles with precision and care.
            </p>
          </motion.div>

          <div className="hidden md:block">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              transition={{ duration: 1 }}
              className="text-9xl font-black text-white select-none absolute -top-10 right-10"
            >
              EXPERT
            </motion.span>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-zinc-900/20 border border-zinc-800/50 p-6 hover:border-yellow-400/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden rounded-sm"
            >
              {/* Card Image Wrapper */}
              <div className="relative h-48 w-full mb-8 overflow-hidden rounded-sm bg-zinc-800">
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"; // Global fallback
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col grow">
                <h3 className="text-xl font-bold uppercase italic tracking-tighter text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-zinc-500 text-[11px] mb-8 grow leading-relaxed uppercase tracking-widest font-medium">
                  {service.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onBookClick}
                  className="w-full bg-transparent border border-white/10 text-white/40 group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-black py-4 font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-2"
                >
                  Book Now
                  <svg
                    className="w-3 h-3 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Hover Decorative Corner */}
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-yellow-400 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
