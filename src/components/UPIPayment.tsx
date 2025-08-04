import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, Copy, Check } from 'lucide-react';

interface UPIPaymentProps {
  amount: number;
}

export default function UPIPayment({ amount }: UPIPaymentProps) {
  const [selectedUPI, setSelectedUPI] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  const upiApps = [
    { id: 'gpay', name: 'Google Pay', icon: '🟢', color: 'from-green-500 to-green-600' },
    { id: 'phonepe', name: 'PhonePe', icon: '🟣', color: 'from-purple-500 to-purple-600' },
    { id: 'paytm', name: 'Paytm', icon: '🔵', color: 'from-blue-500 to-blue-600' },
    { id: 'bhim', name: 'BHIM UPI', icon: '🟠', color: 'from-orange-500 to-orange-600' },
  ];

  const upiId = 'foodiehub@upi';
  const qrData = `upi://pay?pa=${upiId}&pn=FoodieHub&am=${amount.toFixed(2)}&cu=USD&tn=Food Order Payment`;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateQRCode = () => {
    // Simple QR code placeholder - in real app, use a QR code library
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <Smartphone className="h-5 w-5 mr-2 text-blue-600" />
        UPI Payment Options
      </h3>

      {/* UPI Apps */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {upiApps.map((app) => (
          <motion.button
            key={app.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedUPI(app.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              selectedUPI === app.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{app.icon}</span>
              <div className="text-left">
                <div className="font-semibold text-gray-900">{app.name}</div>
                <div className="text-xs text-gray-600">Tap to pay</div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* UPI ID */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-700">UPI ID</div>
            <div className="text-lg font-bold text-gray-900">{upiId}</div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCopyUPI}
            className={`p-2 rounded-lg transition-all duration-200 ${
              copied ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </motion.button>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowQR(!showQR)}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
        >
          <QrCode className="h-4 w-4 mr-2" />
          {showQR ? 'Hide QR Code' : 'Show QR Code'}
        </motion.button>

        {showQR && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 p-4 bg-white rounded-xl border border-gray-200"
          >
            <img
              src={generateQRCode()}
              alt="UPI QR Code"
              className="w-48 h-48 mx-auto mb-3"
            />
            <p className="text-sm text-gray-600">
              Scan with any UPI app to pay ₹{amount.toFixed(2)}
            </p>
          </motion.div>
        )}
      </div>

      {/* Payment Amount */}
      <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
        <div className="text-center">
          <div className="text-sm font-medium text-green-700">Amount to Pay</div>
          <div className="text-2xl font-bold text-green-800">₹{amount.toFixed(2)}</div>
        </div>
      </div>
    </motion.div>
  );
}