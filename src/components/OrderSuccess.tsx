import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, MapPin, Phone } from 'lucide-react';

export default function OrderSuccess() {
  const orderNumber = `FH${Date.now().toString().slice(-6)}`;
  const estimatedTime = '25-30 minutes';

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="max-w-md w-full text-center"
      >
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-green-200 border-t-green-500"
            />
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Placed Successfully! 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your order. We're preparing your delicious meal!
          </p>
        </motion.div>

        {/* Order Details */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 mb-8"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Order Number</span>
              <span className="font-bold text-amber-600">#{orderNumber}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-gray-600">Estimated Time</span>
              </div>
              <span className="font-semibold text-gray-900">{estimatedTime}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-gray-600">Status</span>
              </div>
              <span className="font-semibold text-green-600">Confirmed</span>
            </div>
          </div>
        </motion.div>

        {/* Animated Food Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center space-x-4 mb-8"
        >
          {['🍕', '🍔', '🍜', '🥗'].map((emoji, index) => (
            <motion.div
              key={index}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
              className="text-3xl"
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200"
        >
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Phone className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Need Help?</span>
          </div>
          <p className="text-sm text-blue-700">
            Call us at <span className="font-bold">+1 (555) 123-FOOD</span>
          </p>
          <p className="text-xs text-blue-600 mt-1">
            We'll keep you updated via SMS
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.2, duration: 3 }}
          className="mt-8 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-sm text-gray-500 mt-2"
        >
          Redirecting to home page...
        </motion.p>
      </motion.div>
    </div>
  );
}