import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Zap } from "lucide-react";
import ReviewsSection from "../components/ReviewsSection";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";

export default function LandingPage() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Fresh ingredients sourced daily from local farms",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Lightning fast delivery in under 30 minutes",
    },
    {
      icon: Shield,
      title: "Safe & Hygienic",
      description: "Contactless delivery with safety protocols",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "1000+", label: "Dishes Available" },
    { number: "25+", label: "Cities Served" },
    { number: "4.8★", label: "Average Rating" },
  ];
  return (
    <div className="min-h-screen">
      {/* Promo Banner */}
      <PromoBanner />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 via-red-500 to-pink-600 text-white"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Craving Something
                <span className="block text-yellow-300">Delicious?</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                From local favorites to international cuisines, we deliver
                fresh, hot meals straight to your door. Order now and taste the
                difference!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-2xl text-lg"
                  >
                    Order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-amber-600 transition-all duration-200 text-lg"
                >
                  View Menu
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fresh delicious food"
                  className="w-full h-full object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated background shapes */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"
        />
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                FoodieHub?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of quality, speed, and convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl border border-amber-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Hungry? Let's Get Started!
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Browse our extensive menu featuring cuisines from around the world
            </p>

            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-5 bg-white text-amber-600 font-bold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-2xl text-xl"
              >
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
