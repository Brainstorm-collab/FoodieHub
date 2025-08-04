import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  User,
  Utensils,
  Truck,
  Menu,
  X,
} from "lucide-react";
import { useAppContext } from "../hooks/useAppContext";

interface NavbarProps {
  onLogout: () => void;
}

export default function Navbar({ onLogout }: NavbarProps) {
  const { state } = useAppContext();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItemCount = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const wishlistItemCount = state.wishlistItems.length;

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About Us" },
    { path: "/track-order", label: "Track Order" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="bg-white/95 backdrop-blur-md shadow-xl border-b border-amber-200 sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 p-2 rounded-xl shadow-lg"
            >
              <Utensils className="h-6 w-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                FoodieHub
              </span>
              <span className="text-xs text-gray-500 -mt-1">Fresh & Fast</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 transition-all duration-200 shadow-md"
              >
                <ShoppingCart className="h-5 w-5 text-amber-700" />
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-lg"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Wishlist Icon */}
            <Link to="/wishlist" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gradient-to-r from-pink-100 to-red-100 hover:from-pink-200 hover:to-red-200 transition-all duration-200 shadow-md"
              >
                <Heart className="h-5 w-5 text-red-600" />
                {wishlistItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-lg"
                  >
                    {wishlistItemCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Track Order Icon */}
            <Link to="/track-order" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 transition-all duration-200 shadow-md"
              >
                <Truck className="h-5 w-5 text-green-600" />
              </motion.div>
            </Link>

            {/* Profile Menu */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:via-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:block text-sm font-medium">
                  {state.user?.name || "Guest"}
                </span>
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                className="p-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 transition-all duration-200 shadow-md"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-amber-700" />
                ) : (
                  <Menu className="h-5 w-5 text-amber-700" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-amber-600 bg-amber-50"
                        : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
