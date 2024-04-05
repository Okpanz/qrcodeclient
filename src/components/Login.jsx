import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import LoginIllustration from '../assets/undraw_secure_login_pdn4.svg'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await dispatch(login(credentials));
      console.log('Login response:', response?.error?.message);
      if(response.payload?.error?.message ){

        toast.error(response?.error.message.toString())
      }
      if(response.payload.message === "Login successful"){
        setTimeout(() => {
          toast.success('Login Successful')
          
          history('/dash/qrcodes'); 
        }, 1500);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center  w-[80vw] items-center bg-gray-100">
      <div className="hidden md:block md:w-1/2">
        <img src={LoginIllustration} alt="Login Illustration" className="w-full h-auto md:max-w-lg md:max-h-lg" />
      </div>

      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message if exists */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary hover:text-primary transition-all ease-in-out duration-200 focus:outline-none focus:bg-primary">
            {isLoading ? 'Logging in...' : 'Login'} {/* Display different text based on loading state */}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
