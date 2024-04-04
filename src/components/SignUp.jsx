import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, selectError, selectLoading, selectSuccess } from '../redux/authSlice'; // Import the necessary Redux toolkit functions
import Modal from './Modal'; // Import your modal component
import signUpImage from '../assets/undraw_secure_login_pdn4.svg'; // Import your image file
import OtpModal from './OtpModal';

const SignUp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading); // Get loading state from Redux store
  const error = useSelector(selectError); // Get error state from Redux store
  const success = useSelector(selectSuccess); // Get success state from Redux store

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [showOTPModal, setShowOTPModal] = useState(false); // State to control OTP modal visibility
  const [userId, setUserId] = useState(null); // State to store user ID

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(signup(userData));
    // If signup is successful, response will contain the user data including user ID
    if (!response.error) {
      setUserId(response.payload.userId); 
      setShowOTPModal(true); 
    }
  };

  return (
    <div className="flex justify-center items-center w-full bg-gray-100">
      <div className="flex max-w-screen-xl w-full">
        <div className="w-1/2 p-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-md p-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md mb-4">
                {success}
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
              <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="First Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
              <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Last Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" name="email" value={userData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <input type="password" name="password" value={userData.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Password" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" disabled={isLoading}>{isLoading ? 'Signing Up...' : 'Sign Up'}</button>
          </form>
        </div>
        <div className="w-1/2 bg-blue-500 flex justify-center items-center">
          <img src={signUpImage} alt="Sign Up" className="max-w-full h-auto" />
        </div>
      </div>
      {showOTPModal && (
        <OtpModal action={userId} onClose={() => setShowOTPModal(false)} />
      )}
    </div>
  );
};

export default SignUp;
