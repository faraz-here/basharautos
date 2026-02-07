
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section className="relative py-32 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-yellow-400 opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-sm border border-yellow-400/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200" 
                alt="Bashar Autos Workshop" 
                className="w-full h-full object-cover grayscale brightness-50 transition-transform duration-2000 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                className="absolute bottom-10 left-10 bg-black/95 border-l-4 border-yellow-400 p-8 backdrop-blur-md shadow-2xl"
              >
                <span className="block text-5xl font-black text-white italic leading-none mb-2">ELITE</span>
                <span className="text-[10px] text-yellow-400 uppercase tracking-[0.5em] font-bold">Bashar Standard</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-10"
          >
            <div className="space-y-4 w-full">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-yellow-400 font-bold uppercase tracking-[0.6em] text-[10px] block"
              >
                Precision Driven Legacy
              </motion.span>
              <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-white">
                ABOUT <span className="text-yellow-400 font-script normal-case text-7xl md:text-9xl block lg:inline-block lg:-ml-6 drop-shadow-lg">Bashar</span>
              </h2>
              <div className="w-32 h-1.5 bg-yellow-400 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <div className="max-w-xl">
              <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-light mb-12 italic">
                "Bashar Autos Ltd is more than just a garage; it is a dedicated automotive powerhouse specializing in the pinnacle of luxury car care and VIP vehicle acquisitions. Built upon precision and passion, we treat every vehicle as a legendary masterpiece."
              </p>
              
              <div className="grid grid-cols-2 gap-12 text-center lg:text-left border-t border-zinc-900 pt-12">
                <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                  <h4 className="text-white font-black uppercase tracking-tighter italic text-4xl">Master</h4>
                  <p className="text-yellow-400 text-[10px] uppercase font-bold tracking-[0.4em] mt-2 opacity-60">Technicians</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                  <h4 className="text-white font-black uppercase tracking-tighter italic text-4xl">Elite</h4>
                  <p className="text-yellow-400 text-[10px] uppercase font-bold tracking-[0.4em] mt-2 opacity-60">Equipment</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Animated Circle */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-64 -right-64 w-200 h-200 border border-yellow-400/5 rounded-full pointer-events-none"
      ></motion.div>
    </section>
  );
};

export default AboutUs;
