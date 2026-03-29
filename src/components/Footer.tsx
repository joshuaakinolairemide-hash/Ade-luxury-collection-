import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">
              LUNA'S <span className="text-secondary font-normal italic">Luxury</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Affordable luxury accessories for the modern Nigerian. Timeless elegance that matches your style without breaking the bank.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors text-sm">Shop All</Link></li>
              <li><Link to="/shop?category=Watches" className="text-gray-400 hover:text-white transition-colors text-sm">Luxury Watches</Link></li>
              <li><Link to="/shop?category=Jewelry" className="text-gray-400 hover:text-white transition-colors text-sm">Fine Jewelry</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors text-sm">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors text-sm">Returns & Exchanges</Link></li>
              <li><Link to="/track-order" className="text-gray-400 hover:text-white transition-colors text-sm">Track Order</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">14 Luxury Avenue, Lekki Phase 1, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-gray-400 text-sm">+234 800 LUNAS LUX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-gray-400 text-sm">hello@lunasluxury.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Luna's Luxury Collection. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paystack_Logo.png/800px-Paystack_Logo.png" alt="Paystack" className="h-6 opacity-70 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-6 opacity-70 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 opacity-70 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};
