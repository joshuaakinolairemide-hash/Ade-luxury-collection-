import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../context/AppContext';
import { useAppContext } from '../context/AppContext';
import { formatNaira } from '../lib/utils';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();
  const isWishlisted = isInWishlist(product.id);

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {discount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
            -{discount}%
          </span>
        )}
        {product.inStock < 5 && (
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
            Only {product.inStock} left
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
      >
        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
      </button>

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate view`} 
            className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </Link>

      {/* Content */}
      <div className="p-5">
        <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-medium text-primary mb-2 line-clamp-1 group-hover:text-secondary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-primary">{formatNaira(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">{formatNaira(product.originalPrice)}</span>
          )}
        </div>

        <button 
          onClick={() => addToCart(product)}
          className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group/btn"
        >
          <ShoppingBag className="w-4 h-4 group-hover/btn:animate-bounce" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};
