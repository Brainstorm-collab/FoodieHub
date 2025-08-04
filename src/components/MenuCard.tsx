import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Heart, Star, Clock, Eye, Check } from "lucide-react";
import { useAppContext } from "../hooks/useAppContext";
import { MenuItem } from "../types/index";

interface MenuCardProps {
  item: MenuItem;
  onViewDetails: () => void;
  viewMode?: "grid" | "list";
}

export default function MenuCard({
  item,
  onViewDetails,
  viewMode = "grid",
}: MenuCardProps) {
  const { state, dispatch } = useAppContext();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const isInWishlist = state.wishlistItems.some(
    (wishlistItem) => wishlistItem.id === item.id
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART", payload: item });
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    }
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onViewDetails();
  };

  if (viewMode === "list") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/30 cursor-pointer group hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6">
          {/* Image */}
          <div className="relative w-full sm:w-24 h-48 sm:h-24 flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";
              }}
            />
            <div className="absolute top-1 right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {item.category}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200 mb-2 sm:mb-0">
                {item.name}
              </h3>
              <span className="text-xl sm:text-2xl font-bold text-amber-600">
                ₹{item.price}
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {item.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
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

              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleViewDetails}
                  className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all duration-200"
                >
                  <Eye className="h-4 w-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleToggleWishlist}
                  className={`p-2 rounded-full transition-all duration-200 shadow-md ${
                    isInWishlist
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${isInWishlist ? "fill-current" : ""}`}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  disabled={isAddedToCart}
                  className={`px-3 sm:px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg text-sm sm:text-base ${
                    isAddedToCart
                      ? "bg-green-500 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white hover:from-amber-600 hover:via-orange-600 hover:to-red-600"
                  }`}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span className="hidden sm:inline">Added to Cart</span>
                      <span className="sm:hidden">Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      <span>Add</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/30 cursor-pointer group hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";
          }}
        />

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-200 z-10 ${
            isInWishlist
              ? "bg-red-500 text-white shadow-lg"
              : "bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white shadow-lg"
          }`}
          style={{ pointerEvents: "auto" }}
        >
          <Heart className={`h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
        </motion.button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {item.category}
        </div>

        {/* View Details Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewDetails}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-amber-600 px-3 sm:px-4 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2 shadow-xl backdrop-blur-sm text-sm sm:text-base"
        >
          <Eye className="h-4 w-4" />
          <span className="hidden sm:inline">View Details</span>
          <span className="sm:hidden">View</span>
        </motion.button>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200 line-clamp-1">
            {item.name}
          </h3>
          <span className="text-xl sm:text-2xl font-bold text-amber-600 flex-shrink-0 ml-2">
            ₹{item.price}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Rating and Prep Time */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="font-medium">{item.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span className="font-medium">{item.prepTime}</span>
          </div>
        </div>
      </div>
      {/* Add to Cart Button at Bottom */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleAddToCart}
        disabled={isAddedToCart}
        className={`w-full py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg text-sm sm:text-base ${
          isAddedToCart
            ? "bg-green-500 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white hover:from-amber-600 hover:via-orange-600 hover:to-red-600"
        }`}
      >
        {isAddedToCart ? (
          <>
            <Check className="h-4 w-4" />
            <span className="hidden sm:inline">Added to Cart</span>
            <span className="sm:hidden">Added</span>
          </>
        ) : (
          <>
            <Plus className="h-4 w-4" />
            <span>Add to Cart</span>
          </>
        )}
      </motion.button>
    </motion.div>
  );
}
