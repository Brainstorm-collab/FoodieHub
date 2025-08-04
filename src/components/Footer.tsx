import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Utensils,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Shield,
  Truck,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Track Order", path: "/track-order" },
  ];

  const categories = [
    "Pizza",
    "Burgers",
    "Indian",
    "Biryani",
    "Asian",
    "Thai",
    "Salads",
    "Pasta",
    "Seafood",
    "Desserts",
    "Beverages",
  ];

  const supportLinks = [
    { name: "Help Center", path: "/help" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Refund Policy", path: "/refund" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 p-2 rounded-xl shadow-lg"
              >
                <Utensils className="h-6 w-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  FoodieHub
                </span>
                <span className="text-xs text-gray-400 -mt-1">
                  by G. Eesaan
                </span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Bringing you the finest culinary experiences from around the
              world. Fresh, fast, and delicious food delivered to your doorstep.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 p-2 rounded-lg transition-all duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 6).map((category) => (
                  <span
                    key={category}
                    className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full hover:bg-amber-600 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Support & Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Features
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Truck className="h-4 w-4 text-amber-400" />
                  <span className="text-sm">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Shield className="h-4 w-4 text-amber-400" />
                  <span className="text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="h-4 w-4 text-amber-400" />
                  <span className="text-sm">Quality Assured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium">Call Us</p>
                  <p className="text-gray-400 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium">Email Us</p>
                  <p className="text-gray-400 text-sm">hello@foodiehub.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium">Visit Us</p>
                  <p className="text-gray-400 text-sm">
                    123 Food Street, Flavor City, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-amber-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-medium">Opening Hours</p>
                  <p className="text-gray-400 text-sm">
                    Mon-Sun: 10:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} FoodieHub by G. Eesaan. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-sm">Made with love in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
