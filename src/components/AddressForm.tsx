import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Briefcase, Plus, Check, X } from 'lucide-react';

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

interface AddressFormProps {
  onSave: (address: AddressData) => void;
  onCancel: () => void;
}

export default function AddressForm({ onSave, onCancel }: AddressFormProps) {
  const [formData, setFormData] = useState({
    type: 'home',
    fullName: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const addressTypes = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'other', label: 'Other', icon: Plus },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.addressLine1.trim()) newErrors.addressLine1 = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    
    // Validate pincode format (assuming US zip code)
    if (formData.pincode && !/^\d{5}(-\d{4})?$/.test(formData.pincode)) {
      newErrors.pincode = 'Invalid pincode format';
    }

    // Validate phone number
    if (formData.phoneNumber && !/^\+?[\d\s-()]{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const fullAddress = `${formData.addressLine1}, ${formData.addressLine2 ? formData.addressLine2 + ', ' : ''}${formData.city}, ${formData.state} ${formData.pincode}`;
      onSave({
        ...formData,
        fullAddress,
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
          Add New Address
        </h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onCancel}
          className="p-2 text-gray-500 hover:text-red-600 transition-colors duration-200"
        >
          <X className="h-4 w-4" />
        </motion.button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Address Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
          <div className="flex space-x-3">
            {addressTypes.map((type) => (
              <motion.button
                key={type.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleInputChange('type', type.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl border-2 transition-all duration-200 ${
                  formData.type === type.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <type.icon className="h-4 w-4" />
                <span className="font-medium">{type.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
              autoComplete="name"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+1 (555) 123-4567"
              autoComplete="tel"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>
        </div>

        {/* Address Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1 *</label>
          <input
            type="text"
            value={formData.addressLine1}
            onChange={(e) => handleInputChange('addressLine1', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
              errors.addressLine1 ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Street address, apartment, suite, etc."
            autoComplete="address-line1"
          />
          {errors.addressLine1 && <p className="text-red-500 text-xs mt-1">{errors.addressLine1}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
          <input
            type="text"
            value={formData.addressLine2}
            onChange={(e) => handleInputChange('addressLine2', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Building, floor, etc. (optional)"
            autoComplete="address-line2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="City"
              autoComplete="address-level2"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.state ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="State"
              autoComplete="address-level1"
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
            <input
              type="text"
              value={formData.pincode}
              onChange={(e) => handleInputChange('pincode', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.pincode ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="12345"
              autoComplete="postal-code"
              maxLength={10}
            />
            {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Landmark</label>
          <input
            type="text"
            value={formData.landmark}
            onChange={(e) => handleInputChange('landmark', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Nearby landmark (optional)"
            autoComplete="off"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Check className="h-4 w-4" />
            <span>Save Address</span>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCancel}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
          >
            Cancel
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}