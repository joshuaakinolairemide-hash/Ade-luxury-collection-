import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export const Shop: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'featured'
        // Keep original order
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="pt-24 pb-20 bg-soft-bg min-h-screen">
      {/* Page Header */}
      <div className="bg-dark-bg text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {activeCategory === 'All' ? 'All Collections' : activeCategory}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our curated selection of premium accessories designed to elevate your style.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-28">
              <div className="flex items-center justify-between md:hidden mb-4 cursor-pointer" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                  <Filter className="w-5 h-5" /> Filters
                </h3>
                <ChevronDown className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
                <h3 className="font-serif text-xl font-semibold mb-4 hidden md:flex items-center gap-2">
                  <Filter className="w-5 h-5" /> Categories
                </h3>
                <ul className="space-y-3">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => setActiveCategory(category)}
                        className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                          activeCategory === category 
                            ? 'bg-secondary text-white font-medium' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">Sort By</h3>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 text-gray-500">
              Showing {filteredProducts.length} results
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-xl text-center shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try changing your filters or category selection.</p>
                <button 
                  onClick={() => {
                    setActiveCategory('All');
                    setSortBy('featured');
                  }}
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
