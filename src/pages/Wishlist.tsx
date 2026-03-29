import React from 'react';
import { useAppContext } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Wishlist: React.FC = () => {
  const { wishlist } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-20 bg-soft-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-secondary fill-secondary" />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary">Your Wishlist</h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white p-12 rounded-xl text-center shadow-sm">
            <Heart className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-6">Save items you love to your wishlist to easily find them later.</p>
            <Link 
              to="/shop" 
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-gray-800 transition-colors inline-block"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
