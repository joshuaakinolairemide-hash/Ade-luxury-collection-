import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const categories = [
  {
    name: 'Watches',
    image: 'https://images.unsplash.com/photo-1524592094714-a1f2e4b4cd70?auto=format&fit=crop&q=80&w=800',
    path: '/shop?category=Watches'
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f70d00ea?auto=format&fit=crop&q=80&w=800',
    path: '/shop?category=Necklaces'
  },
  {
    name: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    path: '/shop?category=Bracelets'
  },
  {
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f6612523e?auto=format&fit=crop&q=80&w=800',
    path: '/shop?category=Rings'
  }
];

export const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Shop by Category</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={category.path}
                className="group relative block h-80 overflow-hidden rounded-xl shadow-md"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div className="w-full flex justify-between items-center">
                    <h3 className="font-serif text-2xl font-semibold text-white">{category.name}</h3>
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
