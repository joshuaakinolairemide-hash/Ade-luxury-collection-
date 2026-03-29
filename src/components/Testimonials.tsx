import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: 'Chidinma O.',
    location: 'Lagos',
    text: "I bought the Obsidian Chronograph for my husband's birthday and he hasn't stopped wearing it. The quality is unbelievable for the price. Delivery was also very fast!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Adebayo T.',
    location: 'Abuja',
    text: "Luna's Luxury is now my go-to for accessories. The packaging alone screams premium. I've recommended them to all my colleagues at the office.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Ngozi E.',
    location: 'Port Harcourt',
    text: "The Eternity Diamond Pendant is so beautiful! It looks exactly like the pictures, maybe even better in person. Customer service on WhatsApp was also very helpful.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-bg text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Loved by Nigerians</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their Luna's Luxury experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 text-secondary mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                />
                <div>
                  <h4 className="font-serif font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-6xl text-white/5 font-serif leading-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
