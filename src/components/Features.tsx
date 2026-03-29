import React from 'react';
import { ShieldCheck, Truck, Gem, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Gem className="w-8 h-8 text-secondary" />,
    title: 'Affordable Luxury',
    description: 'Premium quality accessories at prices that make sense for the Nigerian market.'
  },
  {
    icon: <Truck className="w-8 h-8 text-secondary" />,
    title: 'Nationwide Delivery',
    description: 'Fast and reliable delivery across all 36 states in Nigeria. 1-3 days in Lagos/Abuja.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
    title: 'High Quality Materials',
    description: 'Crafted with precision using stainless steel, 18k gold plating, and premium stones.'
  },
  {
    icon: <CreditCard className="w-8 h-8 text-secondary" />,
    title: 'Secure Payment',
    description: '100% secure checkout via Paystack and Flutterwave. Bank transfers accepted.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-soft-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Luna's</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-soft-bg rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
