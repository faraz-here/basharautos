import React from "react";
import { NAV_ITEMS } from "../constants";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-black border-t border-zinc-900 pt-24 pb-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col leading-none">
              <span className="font-script text-4xl text-yellow-400">
                Bashar Autos Ltd
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold pl-1 pt-2 border-t border-white/5 mt-3">
                Auto Repair Services
              </span>
            </div>
            <p
              className="text-zinc-600 
            text-xs leading-relaxed uppercase tracking-[0.2em] font-medium"
            >
              The premier destination for luxury sales and elite automotive
              repair. Experience excellence.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "green",
                  color: "#000",
                  borderColor: "green",
                }}
                href="https://wa.me/447417451384"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm border border-zinc-800 flex items-center justify-center text-zinc-500 transition-all duration-300"
              >
                <span className="sr-only">WhatsApp</span>
                <FaWhatsapp size={16} />
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 border-l-2 border-yellow-400 pl-4">
              Explore
            </h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-zinc-600 hover:text-yellow-400 text-xs uppercase font-bold tracking-widest transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 border-l-2 border-yellow-400 pl-4">
              Concierge
            </h4>
            <ul className="space-y-8 text-[10px] text-zinc-500 font-bold uppercase tracking-[0.4em]">
              <li className="flex items-start space-x-4">
                <svg
                  className="w-5 h-5 text-yellow-400 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="leading-relaxed">
                  32 Hereford Way,
                  <br />
                  Chessington, Surrey, London KT9 2QT
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:07417451384"
                  className="hover:text-yellow-400 transition-colors"
                >
                  07417451384
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 border-l-2 border-yellow-400 pl-4">
              VIP Alerts
            </h4>
            <p className="text-zinc-600 text-[10px] mb-6 uppercase tracking-[0.2em] font-bold">
              Join for exclusive arrivals.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="CONCIERGE EMAIL"
                className="w-full bg-zinc-950 border border-zinc-900 text-white px-4 py-4 text-[10px] font-bold tracking-widest focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 text-black py-4 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-yellow-500 transition-colors"
              >
                Register
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-700 text-[9px] uppercase font-bold  tracking-wider md:tracking-[0.5em] text-center md:text-left">
            © 2024 BASHAR AUTOS LTD. UNCOMPROMISING PRECISION.
          </p>
          <div className="flex space-x-12 text-zinc-700 text-[9px] uppercase font-bold tracking-[0.5em]">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Legal
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
