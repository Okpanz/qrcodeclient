import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import LoginIllustration from '../assets/undraw_secure_login_pdn4.svg'; 

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <div className="flex justify-center  w-[80vw] items-center bg-gray-100">
      <div className="hidden md:block md:w-1/2">
        <img src={LoginIllustration} alt="Login Illustration" className="w-full h-auto md:max-w-lg md:max-h-lg" />
      </div>

      {/* Right side with login form */}
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
