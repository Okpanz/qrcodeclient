import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpModal = ({ action, onClose }) => {
  const history = useNavigate();

  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const handleVerifyOTP = async () => {
    // Your OTP verification logic goes here
    // Assuming OTP verification is successful, redirect to '/qrcodes'
    // Here you might dispatch an action to verify OTP and handle success/error response accordingly
    try {
      history('/qrcodes');
    } catch (error) {
      console.error('OTP verification failed:', error);
      // Handle OTP verification failure
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-[50vw] transition-opacity duration-300">
        <h2 className="font-bold text-lg mb-4">OTP Verification</h2>

        <div className="mb-4">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter OTP"
          />
        </div>

        <div className="flex justify-between">
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={handleVerifyOTP}>Verify OTP</button>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
