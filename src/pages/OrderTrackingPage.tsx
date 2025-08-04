import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Clock,
  CheckCircle,
  Truck,
  ChefHat,
  Package,
} from "lucide-react";

interface OrderStatus {
  id: string;
  status: "confirmed" | "preparing" | "ready" | "picked_up" | "delivered";
  timestamp: string;
  estimatedTime: string;
}

export default function OrderTrackingPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingData, setTrackingData] = useState<OrderStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock tracking data
  const mockOrders = {
    FH123456: {
      id: "FH123456",
      status: "preparing" as const,
      timestamp: new Date().toISOString(),
      estimatedTime: "15-20 minutes",
      items: ["Chicken Biryani", "Mango Smoothie"],
      restaurant: "Spice Garden",
      deliveryAddress: "123 Main St, Apartment 4B",
      orderTotal: "$24.99",
    },
    FH789012: {
      id: "FH789012",
      status: "ready" as const,
      timestamp: new Date().toISOString(),
      estimatedTime: "5-10 minutes",
      items: ["Margherita Pizza", "Caesar Salad"],
      restaurant: "Italian Corner",
      deliveryAddress: "456 Oak Avenue",
      orderTotal: "$29.98",
    },
  };

  const statusSteps = [
    {
      key: "confirmed",
      label: "Order Confirmed",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      key: "preparing",
      label: "Preparing",
      icon: ChefHat,
      color: "text-orange-600",
    },
    {
      key: "ready",
      label: "Ready for Pickup",
      icon: Package,
      color: "text-blue-600",
    },
    {
      key: "picked_up",
      label: "Out for Delivery",
      icon: Truck,
      color: "text-purple-600",
    },
    {
      key: "delivered",
      label: "Delivered",
      icon: MapPin,
      color: "text-green-600",
    },
  ];

  const handleTrackOrder = async () => {
    if (!orderNumber.trim()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const order = mockOrders[orderNumber as keyof typeof mockOrders];
    setTrackingData(order || null);
    setIsLoading(false);
  };

  const getStatusIndex = (status: string) => {
    return statusSteps.findIndex((step) => step.key === status);
  };

  const isStepCompleted = (stepIndex: number, currentStatus: string) => {
    return stepIndex <= getStatusIndex(currentStatus);
  };

  const isStepActive = (stepIndex: number, currentStatus: string) => {
    return stepIndex === getStatusIndex(currentStatus);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Track Your Order
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter your order number to see real-time updates on your delivery
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
                placeholder="Enter order number (e.g., FH123456)"
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/50 text-lg"
                onKeyPress={(e) => e.key === "Enter" && handleTrackOrder()}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTrackOrder}
              disabled={isLoading || !orderNumber.trim()}
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:from-amber-600 hover:via-orange-600 hover:to-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Tracking...</span>
                </div>
              ) : (
                "Track Order"
              )}
            </motion.button>
          </div>

          {/* Sample Order Numbers */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 mb-2">
              Try these sample order numbers:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {Object.keys(mockOrders).map((orderNum) => (
                <motion.button
                  key={orderNum}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOrderNumber(orderNum)}
                  className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors duration-200"
                >
                  {orderNum}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tracking Results */}
        <AnimatePresence>
          {trackingData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Order Info */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Order Details
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-semibold">Order #:</span>{" "}
                        {trackingData.id}
                      </p>
                      <p>
                        <span className="font-semibold">Restaurant:</span>{" "}
                        {trackingData.restaurant}
                      </p>
                      <p>
                        <span className="font-semibold">Items:</span>{" "}
                        {trackingData.items.join(", ")}
                      </p>
                      <p>
                        <span className="font-semibold">Total:</span>{" "}
                        {trackingData.orderTotal}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Delivery Info
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-semibold">Address:</span>{" "}
                        {trackingData.deliveryAddress}
                      </p>
                      <p>
                        <span className="font-semibold">Estimated Time:</span>{" "}
                        {trackingData.estimatedTime}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-amber-600" />
                        <span className="text-amber-600 font-semibold">
                          {trackingData.status === "delivered"
                            ? "Delivered!"
                            : "In Progress"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30">
                <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
                  Order Status
                </h3>

                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: `${
                        (getStatusIndex(trackingData.status) /
                          (statusSteps.length - 1)) *
                        100
                      }%`,
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-amber-500 to-orange-500"
                  />

                  {/* Status Steps */}
                  <div className="space-y-8">
                    {statusSteps.map((step, index) => {
                      const isCompleted = isStepCompleted(
                        index,
                        trackingData.status
                      );
                      const isActive = isStepActive(index, trackingData.status);

                      return (
                        <motion.div
                          key={step.key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2, duration: 0.6 }}
                          className="relative flex items-center"
                        >
                          {/* Step Icon */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: index * 0.2 + 0.3,
                              duration: 0.4,
                            }}
                            className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                              isCompleted
                                ? "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg"
                                : "bg-gray-200 text-gray-400"
                            }`}
                          >
                            <step.icon className="h-6 w-6" />
                            {isActive && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-30"
                              />
                            )}
                          </motion.div>

                          {/* Step Content */}
                          <div className="ml-6">
                            <h4
                              className={`text-lg font-semibold ${
                                isCompleted ? "text-gray-900" : "text-gray-500"
                              }`}
                            >
                              {step.label}
                            </h4>
                            {isActive && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-amber-600 font-medium"
                              >
                                Currently in progress...
                              </motion.p>
                            )}
                            {isCompleted && !isActive && (
                              <p className="text-green-600 font-medium">
                                Completed
                              </p>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Live Updates */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200"
              >
                <div className="text-center">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Live Updates
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We'll send you real-time notifications about your order
                    status
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center space-x-2 text-sm text-blue-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span>SMS Updates</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-blue-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span>Push Notifications</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* No Results */}
          {!trackingData && orderNumber && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/30 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Order Not Found
                </h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find an order with number "{orderNumber}"
                </p>
                <p className="text-sm text-gray-500">
                  Please check your order number and try again
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
