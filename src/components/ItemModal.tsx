import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Star, Clock, Heart, Check } from "lucide-react";
import { useAppContext } from "../hooks/useAppContext";
import { MenuItem } from "../types/index";

interface ItemModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ItemModal({ item, isOpen, onClose }: ItemModalProps) {
  const { state, dispatch } = useAppContext();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  if (!item) return null;

  const cartItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
  const quantity = cartItem?.quantity || 0;
  const isInWishlist = state.wishlistItems.some(
    (wishlistItem) => wishlistItem.id === item.id
  );

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
    } else {
      dispatch({
        type: "UPDATE_CART_QUANTITY",
        payload: { id: item.id, quantity: newQuantity },
      });
    }
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200"
            >
              <X className="h-5 w-5 text-gray-600" />
            </motion.button>

            {/* Image */}
            <div className="relative h-64 sm:h-80">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {item.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.prepTime}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    ₹{item.price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleToggleWishlist}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isInWishlist
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        isInWishlist ? "fill-current" : ""
                      }`}
                    />
                  </motion.button>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Quantity Controls and Add to Cart */}
              <div className="flex items-center justify-between">
                {quantity > 0 ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-700">
                      Quantity:
                    </span>
                    <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleUpdateQuantity(quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200"
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </motion.button>

                      <span className="text-lg font-semibold text-gray-900 min-w-[2rem] text-center">
                        {quantity}
                      </span>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleUpdateQuantity(quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddToCart}
                    disabled={isAddedToCart}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 ${
                      isAddedToCart
                        ? "bg-green-500 text-white cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                    }`}
                  >
                    {isAddedToCart ? (
                      <>
                        <Check className="h-5 w-5" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <Plus className="h-5 w-5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </motion.button>
                )}

                <div className="text-right">
                  <div className="text-sm text-gray-500">Total</div>
                  <div className="text-2xl font-bold text-orange-600">
                    ₹{(item.price * Math.max(quantity, 1)).toFixed(0)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
