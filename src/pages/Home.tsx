import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { ProductCard } from '../components/ProductCard';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { UrgencyBanner } from '../components/UrgencyBanner';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const bestSellers = products.slice(0, 4);

  return (
    <div>
      <Hero />
      <FeaturedCategories />
      
      {/* Best Sellers Section */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Best Sellers</h2>
              <div className="w-24 h-1 bg-secondary"></div>
            </div>
            <Link 
              to="/shop" 
              className="group flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors mt-4 md:mt-0"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <UrgencyBanner />
      <Features />
      <Testimonials />
    </div>
  );
};
