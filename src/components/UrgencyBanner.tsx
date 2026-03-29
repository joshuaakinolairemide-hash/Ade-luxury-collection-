import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UrgencyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-secondary text-primary py-12 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
              <Timer className="w-4 h-4" />
              Flash Sale Ending Soon
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Up to 40% Off Selected Items</h2>
            <p className="text-gray-600">Limited stock available. Don't miss out on these premium pieces.</p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center text-2xl font-bold font-mono shadow-inner">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <span className="text-xs font-semibold mt-2 uppercase tracking-wider">Hours</span>
              </div>
              <div className="text-3xl font-bold text-primary mt-3">:</div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center text-2xl font-bold font-mono shadow-inner">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <span className="text-xs font-semibold mt-2 uppercase tracking-wider">Mins</span>
              </div>
              <div className="text-3xl font-bold text-primary mt-3">:</div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center text-2xl font-bold font-mono shadow-inner">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <span className="text-xs font-semibold mt-2 uppercase tracking-wider">Secs</span>
              </div>
            </div>
            
            <Link 
              to="/shop" 
              className="group flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors w-full justify-center"
            >
              Shop Sale Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
