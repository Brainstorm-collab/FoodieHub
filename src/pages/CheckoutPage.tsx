import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin, CreditCard, Check, ArrowLeft } from "lucide-react";
import { useAppContext } from "../hooks/useAppContext";
import UPIPayment from "../components/UPIPayment";
import AddressForm from "../components/AddressForm";
import OrderSuccess from "../components/OrderSuccess";

interface AddressData {
  type: string;
  fullName: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
  fullAddress: string;
}

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [customAddress, setCustomAddress] = useState<AddressData | null>(null);
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const addresses = [
    {
      id: "1",
      label: "Home",
      address: "123 Main St, Apartment 4B, New York, NY 10001",
    },
    {
      id: "2",
      label: "Work",
      address: "456 Business Ave, Suite 200, New York, NY 10002",
    },
    {
      id: "3",
      label: "Add New Address",
      address: "Click to add a new delivery address",
    },
  ];

  const paymentMethods = [
    {
      id: "1",
      type: "UPI Payment",
      details: "Pay via UPI (GPay, PhonePe, Paytm)",
      icon: "📱",
    },
    {
      id: "2",
      type: "Credit/Debit Card",
      details: "**** **** **** 1234",
      icon: "💳",
    },
    {
      id: "3",
      type: "Cash on Delivery",
      details: "Pay when you receive your order",
      icon: "💵",
    },
    {
      id: "4",
      type: "Digital Wallet",
      details: "PayPal, Apple Pay, Google Pay",
      icon: "💰",
    },
  ];

  const subtotal = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 25 ? 0 : 3.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setShowOrderSuccess(true);

    // Clear cart after showing success
    setTimeout(() => {
      dispatch({ type: "CLEAR_CART" });
      setShowOrderSuccess(false);
      navigate("/home");
    }, 5000);
  };

  const handleAddressSelect = (addressId: string) => {
    if (addressId === "3") {
      // Show address form for new address
      setSelectedAddress("3");
      return;
    }
    setSelectedAddress(addressId);
  };
  const steps = [
    { number: 1, title: "Address", icon: MapPin },
    { number: 2, title: "Payment", icon: CreditCard },
    { number: 3, title: "Review", icon: Check },
  ];

  if (showOrderSuccess) {
    return <OrderSuccess />;
  }
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Checkout
          </h1>

          {/* Progress Steps */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step.number
                      ? "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <step.icon className="h-5 w-5" />
                </div>
                <span
                  className={`ml-2 font-medium ${
                    currentStep >= step.number
                      ? "text-amber-600"
                      : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 h-0.5 ml-4 ${
                      currentStep > step.number
                        ? "bg-gradient-to-r from-amber-500 to-orange-500"
                        : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Address */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Delivery Address
                </h2>

                {selectedAddress === "3" ? (
                  <AddressForm
                    onSave={(address) => {
                      setCustomAddress(address);
                      setSelectedAddress("custom");
                    }}
                    onCancel={() => setSelectedAddress("")}
                  />
                ) : (
                  <div className="space-y-3">
                    {addresses.map((address) => (
                      <motion.label
                        key={address.id}
                        whileHover={{ scale: 1.02 }}
                        className={`block p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedAddress === address.id
                            ? "border-amber-500 bg-amber-50"
                            : "border-gray-200 hover:border-amber-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="address"
                          value={address.id}
                          checked={selectedAddress === address.id}
                          onChange={(e) => handleAddressSelect(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-gray-900">
                              {address.label}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {address.address}
                            </div>
                          </div>
                          {selectedAddress === address.id && (
                            <Check className="h-5 w-5 text-amber-600" />
                          )}
                        </div>
                      </motion.label>
                    ))}

                    {/* Show custom address if added */}
                    {customAddress && (
                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        className={`block p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedAddress === "custom"
                            ? "border-amber-500 bg-amber-50"
                            : "border-gray-200 hover:border-amber-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="address"
                          value="custom"
                          checked={selectedAddress === "custom"}
                          onChange={(e) => setSelectedAddress(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-gray-900">
                              New Address
                            </div>
                            <div className="text-gray-600 text-sm">
                              {customAddress.fullAddress}
                            </div>
                          </div>
                          {selectedAddress === "custom" && (
                            <Check className="h-5 w-5 text-amber-600" />
                          )}
                        </div>
                      </motion.label>
                    )}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (selectedAddress && selectedAddress !== "3") {
                      setCurrentStep(2);
                    }
                  }}
                  disabled={!selectedAddress || selectedAddress === "3"}
                  className="mt-6 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-4 rounded-xl font-bold hover:from-amber-600 hover:via-orange-600 hover:to-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  Continue to Payment
                </motion.button>
              </motion.div>
            )}

            {/* Step 2: Payment */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Payment Method
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentStep(1)}
                    className="p-2 text-gray-500 hover:text-amber-600 transition-colors duration-200"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </motion.button>
                </div>

                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <motion.label
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      className={`block p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedPayment === method.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <div className="font-bold text-gray-900">
                              {method.type}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {method.details}
                            </div>
                          </div>
                        </div>
                        {selectedPayment === method.id && (
                          <Check className="h-5 w-5 text-amber-600" />
                        )}
                      </div>
                    </motion.label>
                  ))}
                </div>

                {/* UPI Payment Details */}
                {selectedPayment === "1" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6"
                  >
                    <UPIPayment amount={total} />
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectedPayment && setCurrentStep(3)}
                  disabled={!selectedPayment}
                  className="mt-6 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-4 rounded-xl font-bold hover:from-amber-600 hover:via-orange-600 hover:to-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  Review Order
                </motion.button>
              </motion.div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Review Order
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentStep(2)}
                    className="p-2 text-gray-500 hover:text-amber-600 transition-colors duration-200"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Order Items */}
                <div className="space-y-3 mb-6">
                  {state.cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";
                          }}
                        />
                        <div>
                          <div className="font-bold text-gray-900">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            Qty: {item.quantity}
                          </div>
                        </div>
                      </div>
                      <div className="font-bold text-amber-600 text-lg">
                        ₹{(item.price * item.quantity).toFixed(0)}
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-xl text-lg"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing Order...</span>
                    </>
                  ) : (
                    <>
                      <span>Place Order</span>
                      <Check className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 h-fit sticky top-24"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">₹{subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className="font-semibold">
                  {deliveryFee === 0 ? "Free" : `₹${deliveryFee.toFixed(0)}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-semibold">₹{tax.toFixed(0)}</span>
              </div>
              <div className="border-t border-amber-200 pt-3">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-amber-600">₹{total.toFixed(0)}</span>
                </div>
              </div>
            </div>

            {/* Selected Details */}
            {selectedAddress && (
              <div className="mb-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="text-sm font-bold text-amber-800">
                  Delivery Address
                </div>
                <div className="text-sm text-amber-700">
                  {selectedAddress === "custom"
                    ? customAddress?.fullAddress
                    : addresses.find((a) => a.id === selectedAddress)?.address}
                </div>
              </div>
            )}

            {selectedPayment && (
              <div className="mb-4 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="text-sm font-bold text-green-800">
                  Payment Method
                </div>
                <div className="text-sm text-green-700">
                  {paymentMethods.find((p) => p.id === selectedPayment)?.type}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
