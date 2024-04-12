import React, { useState } from 'react';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen w-screen  flex flex-col justify-center items-center overflow-x-hidden">
      <div className="bg-white p-4  rounded-md">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 rounded-md focus:outline-none ${activeTab === 'login' ? 'bg-primary text-white' : 'text-gray-700'}`}
            onClick={() => handleTabChange('login')}
          >
            Login
          </button>
        
        </div>
        {activeTab === 'login' && <Login />}
        {/* {activeTab === 'signup' && <SignUp />} */}
      </div>
    </div>
  );
};

export default AuthPage;
