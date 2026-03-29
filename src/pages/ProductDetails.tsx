import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useAppContext } from '../context/AppContext';
import { formatNaira } from '../lib/utils';
import { Star, Truck, ShieldCheck, ArrowLeft, Heart, ShoppingBag, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();
  
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button onClick={() => navigate('/shop')} className="text-secondary hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  return (
    <div className="pt-24 pb-20 bg-soft-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-12">
            
            {/* Image Gallery */}
            <div className="p-6 md:p-8 flex flex-col gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                {discount > 0 && (
                  <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-sm shadow-md">
                    -{discount}% OFF
                  </span>
                )}
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      activeImage === idx ? 'border-secondary' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="mb-2 text-sm text-secondary font-semibold uppercase tracking-wider">
                {product.category}
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-end gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">{formatNaira(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through mb-1">{formatNaira(product.originalPrice)}</span>
                )}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="font-semibold text-primary mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-md h-12">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 h-full hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(Math.min(product.inStock, quantity + 1))}
                      className="px-4 h-full hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    {product.inStock} items left
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleAddToCart}
                    className={`flex-1 h-14 rounded-md font-semibold flex items-center justify-center gap-2 transition-all ${
                      isAdded 
                        ? 'bg-green-500 text-white' 
                        : 'bg-primary text-white hover:bg-gray-800'
                    }`}
                  >
                    {isAdded ? (
                      <><Check className="w-5 h-5" /> Added to Cart</>
                    ) : (
                      <><ShoppingBag className="w-5 h-5" /> Add to Cart</>
                    )}
                  </button>
                  
                  <button 
                    onClick={handleBuyNow}
                    className="flex-1 h-14 bg-secondary text-white font-semibold rounded-md hover:bg-[#b5952f] transition-colors shadow-md"
                  >
                    Buy Now
                  </button>
                  
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className={`h-14 w-14 flex items-center justify-center rounded-md border-2 transition-colors ${
                      isWishlisted 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <Truck className="w-8 h-8 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-sm">Nationwide Delivery</h4>
                    <p className="text-xs text-gray-500">1-5 working days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-sm">Secure Payment</h4>
                    <p className="text-xs text-gray-500">Paystack / Flutterwave</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
