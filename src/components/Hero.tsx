import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Watch and Jewelry" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-semibold tracking-widest uppercase mb-6">
            Affordable Luxury, Timeless Elegance
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto"
        >
          Luxury Watches & Jewelry That Match Your Style
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
        >
          Premium quality accessories designed for the modern Nigerian. Elevate your everyday look at prices you'll love.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            to="/shop?category=Watches" 
            className="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Shop Watches
          </Link>
          <Link 
            to="/shop?category=Jewelry" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all duration-300"
          >
            Shop Jewelry
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
