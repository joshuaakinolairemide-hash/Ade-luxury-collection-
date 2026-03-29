import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { formatNaira } from '../lib/utils';
import { ShieldCheck, ArrowLeft, CreditCard, Banknote, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export const Checkout: React.FC = () => {
  const { cart, cartTotal } = useAppContext();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('paystack');
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingFee = 2500; // Flat rate for simplicity
  const total = cartTotal + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Order placed successfully! In a real app, this would redirect to the payment gateway.');
      navigate('/');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/shop" className="text-secondary hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-soft-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Checkout Form */}
          <div className="flex-1">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm mb-6">
              <h2 className="font-serif text-2xl font-bold mb-6">Delivery Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="08012345678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    placeholder="123 Luxury Street, Phase 1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <select 
                      required
                      className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      <option value="">Select State</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja (FCT)</option>
                      <option value="rivers">Rivers</option>
                      <option value="ogun">Ogun</option>
                      <option value="oyo">Oyo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City / LGA</label>
                    <input 
                      type="text" 
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="Lekki"
                    />
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <h2 className="font-serif text-2xl font-bold mb-6">Payment Method</h2>
                  
                  <div className="space-y-4">
                    <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'paystack' ? 'border-secondary bg-secondary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input 
                        type="radio" 
                        name="payment" 
                        value="paystack" 
                        checked={paymentMethod === 'paystack'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-secondary focus:ring-secondary"
                      />
                      <div className="ml-4 flex-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-gray-500" />
                          <span className="font-medium">Paystack (Card, Bank Transfer, USSD)</span>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Paystack_Logo.png/800px-Paystack_Logo.png" alt="Paystack" className="h-5 object-contain" />
                      </div>
                    </label>

                    <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'flutterwave' ? 'border-secondary bg-secondary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input 
                        type="radio" 
                        name="payment" 
                        value="flutterwave" 
                        checked={paymentMethod === 'flutterwave'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-secondary focus:ring-secondary"
                      />
                      <div className="ml-4 flex-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-gray-500" />
                          <span className="font-medium">Flutterwave</span>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-5 object-contain" />
                      </div>
                    </label>

                    <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${paymentMethod === 'transfer' ? 'border-secondary bg-secondary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input 
                        type="radio" 
                        name="payment" 
                        value="transfer" 
                        checked={paymentMethod === 'transfer'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-secondary focus:ring-secondary"
                      />
                      <div className="ml-4 flex items-center gap-2">
                        <Banknote className="w-5 h-5 text-gray-500" />
                        <span className="font-medium">Direct Bank Transfer</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-primary text-white font-bold rounded-md hover:bg-gray-800 transition-colors mt-8 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="animate-pulse">Processing Payment...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5" />
                      Pay {formatNaira(total)} Securely
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm sticky top-28">
              <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                        <span className="text-sm font-semibold">{formatNaira(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">{formatNaira(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">{formatNaira(shippingFee)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-gray-100 pt-3 mt-3">
                  <span>Total</span>
                  <span className="text-secondary">{formatNaira(total)}</span>
                </div>
              </div>

              <div className="mt-8 bg-soft-bg p-4 rounded-lg flex items-start gap-3">
                <Truck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold mb-1">Nationwide Delivery</h4>
                  <p className="text-xs text-gray-500">Your order will be delivered within 1-5 working days depending on your location.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
