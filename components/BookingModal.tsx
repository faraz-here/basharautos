import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "oil-change",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={onClose}
          ></motion.div>

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-zinc-950 border border-yellow-400/20 p-8 md:p-12 shadow-[0_0_120px_rgba(250,204,21,0.15)] rounded-sm"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors p-2"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-10"
              >
                <div className="border-b border-zinc-900 pb-8">
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2">
                    <span className="text-yellow-400">BASHAR</span> VIP BOOKING
                  </h2>
                  <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em]">
                    Priority service reservation
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] text-yellow-400 font-bold uppercase tracking-[0.3em] opacity-60">
                        Client Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="ENTER NAME"
                        className="w-full bg-zinc-900/50 border-b border-zinc-800 p-4 text-white text-sm focus:outline-none focus:border-yellow-400 uppercase font-bold transition-all"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-yellow-400 font-bold uppercase tracking-[0.3em] opacity-60">
                        Mobile Contact
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="ENTER PHONE"
                        className="w-full bg-zinc-900/50 border-b border-zinc-800 p-4 text-white text-sm focus:outline-none focus:border-yellow-400 uppercase font-bold transition-all"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] text-yellow-400 font-bold uppercase tracking-[0.3em] opacity-60">
                      VIP Service Tier
                    </label>
                    <select
                      className="w-full bg-zinc-900/50 border-b border-zinc-800 p-4 text-white text-sm focus:outline-none focus:border-yellow-400 uppercase font-bold appearance-none cursor-pointer transition-all"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      <option value="oil-change">Performance Oil Change</option>
                      <option value="brakes">Elite Brake Calibration</option>
                      <option value="diagnostics">Computer Diagnostics</option>
                      <option value="transmission">Transmission Systems</option>
                      <option value="other">Bespoke Requests</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] text-yellow-400 font-bold uppercase tracking-[0.3em] opacity-60">
                      Scheduled Date
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full bg-zinc-900/50 border-b border-zinc-800 p-4 text-white text-sm focus:outline-none focus:border-yellow-400 uppercase font-bold transition-all"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 50px rgba(250,204,21,0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-yellow-400 text-black py-6 font-black uppercase tracking-[0.4em] transition-all text-xs"
                  >
                    Confirm Priority Booking
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-12"
              >
                <motion.div
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(250,204,21,0.4)]"
                >
                  <svg
                    className="w-12 h-12 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>

                <div className="space-y-4">
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">
                    RESERVATION <span className="text-yellow-400">SECURED</span>
                  </h2>
                  <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-[0.4em] max-w-xs mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our concierge will finalize your
                    appointment shortly.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-12 py-4 border border-yellow-400 text-yellow-400 font-black uppercase tracking-widest text-[10px] hover:bg-yellow-400 hover:text-black transition-all"
                >
                  Close Concierge
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
