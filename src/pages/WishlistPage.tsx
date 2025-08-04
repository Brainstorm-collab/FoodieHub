import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  ArrowRight,
  Trash2,
  Star,
  Clock,
  Plus,
  Check,
} from "lucide-react";
import { useAppContext } from "../hooks/useAppContext";
import { MenuItem } from "../types/index";

export default function WishlistPage() {
  const { state, dispatch } = useAppContext();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const [isAddingAll, setIsAddingAll] = useState(false);

  const handleRemoveFromWishlist = (itemId: string) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: itemId });
  };

  const handleAddToCart = (item: MenuItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    setAddedItems((prev) => new Set(prev).add(item.id));

    // Reset the "Added" state after 2 seconds
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 2000);
  };

  const handleAddAllToCart = () => {
    setIsAddingAll(true);

    // Add all items to cart with a slight delay for visual feedback
    state.wishlistItems.forEach((item, index) => {
      setTimeout(() => {
        dispatch({ type: "ADD_TO_CART", payload: item });
        setAddedItems((prev) => new Set(prev).add(item.id));
      }, index * 100); // Stagger the additions
    });

    // Reset states after all items are added
    setTimeout(() => {
      setIsAddingAll(false);
      setAddedItems(new Set());
    }, state.wishlistItems.length * 100 + 2000);
  };

  if (state.wishlistItems.length === 0) {
    return (
      <div className="min-h-screen pt-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-100 to-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-12 w-12 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Save your favorite dishes for later!
          </p>
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-200 flex items-center space-x-2 mx-auto"
            >
              <span>Browse Menu</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
            Your Wishlist
          </h1>
          <p className="text-gray-600">
            {state.wishlistItems.length} favorite dish
            {state.wishlistItems.length !== 1 ? "es" : ""} saved
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <AnimatePresence>
            {state.wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";
                    }}
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-orange-600">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{item.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.prepTime}</span>
                        </div>
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddToCart(item)}
                          disabled={addedItems.has(item.id)}
                          className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg ${
                            addedItems.has(item.id)
                              ? "bg-green-500 text-white cursor-not-allowed"
                              : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                          }`}
                        >
                          {addedItems.has(item.id) ? (
                            <>
                              <Check className="h-4 w-4" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="h-4 w-4" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleRemoveFromWishlist(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddAllToCart}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2"
            disabled={isAddingAll}
          >
            {isAddingAll ? (
              <>
                <Check className="h-5 w-5 animate-spin" />
                <span>Adding All...</span>
              </>
            ) : (
              <>
                <ShoppingCart className="h-5 w-5" />
                <span>Add All to Cart</span>
              </>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to clear your entire wishlist?"
                )
              ) {
                state.wishlistItems.forEach((item) => {
                  dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id });
                });
              }
            }}
            className="px-6 py-3 border-2 border-red-300 text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Trash2 className="h-5 w-5" />
            <span>Clear Wishlist</span>
          </motion.button>
        </motion.div>

        {/* Continue Shopping */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center space-x-2 mx-auto"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Continue Shopping</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
