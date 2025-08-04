import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "../data/menuData";

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-200" />

              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.userName}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop";
                  }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {review.userName}
                  </h4>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                "{review.comment}"
              </p>

              <div className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-white/20">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">4.8/5</div>
              <div className="text-sm text-gray-600">
                Based on 2,500+ reviews
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
