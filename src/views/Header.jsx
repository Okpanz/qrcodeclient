import React from 'react';
import { NavLink } from 'react-router-dom';
import CompanyLogo from "../assets/QRSS with name svg white.svg"; // Import your company logo image

const Header = () => {
  return (
    <div className="flex items-center w-[70vw] justify-between bg-white py-4 px-8">
      <div className="flex items-center">
        <img src={CompanyLogo} alt="Company Logo" className="h-8 mr-2" /> {/* Adjust height and margin as needed */}
      </div>
      <div>
        <NavLink to="/auth">
          <button className="bg-primary hover:bg-secondary hover:text-primary text-white px-4 py-2 rounded-md">Login</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
