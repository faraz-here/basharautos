
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBooking = () => setIsBookingModalOpen(true);
  const closeBooking = () => setIsBookingModalOpen(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      <Navbar onBookClick={openBooking} />
      
      <main>
        <div id="home">
          <Hero onBookClick={openBooking} />
        </div>
        
        <div id="services">
          <Services onBookClick={openBooking} />
        </div>
        
        <div id="about">
          <AboutUs />
        </div>
      </main>

      <Footer />

      <AnimatePresence>
        {isBookingModalOpen && (
          <BookingModal isOpen={isBookingModalOpen} onClose={closeBooking} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
