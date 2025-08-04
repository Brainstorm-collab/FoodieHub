import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Clock } from 'lucide-react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center relative">
          <div className="flex items-center space-x-2">
            <Gift className="h-5 w-5 animate-bounce" />
            <span className="font-semibold">
              🎉 Special Offer: Get 25% OFF on orders above $30! Use code: FOODIE25
            </span>
            <Clock className="h-4 w-4 ml-2" />
            <span className="text-sm">Limited time only!</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsVisible(false)}
            className="absolute right-0 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </motion.button>
        </div>
        
        {/* Animated background elements */}
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-10 w-2 h-2 bg-white/30 rounded-full"
        />
        <motion.div
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-20 w-3 h-3 bg-white/20 rounded-full"
        />
      </motion.div>
    </AnimatePresence>
  );
}