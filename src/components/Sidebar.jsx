import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import QRLogo from '../assets/QRSS with name svg white.svg';

const Sidebar = () => {
  const sidebarItems = [
    { text: "My QR Codes", link: "/dash/qrcodes" },
    { text: "Create Folder", link: "create" },
    { text: "Stats", link: "stats" },
    // { text: "Scan QR Code", link: "/scan" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex flex-col w-64 bg-white h-screen text-gray-500 `}>
      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="px-4 py-2 text-blue-700 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`lg:flex lg:flex-col lg:justify-between lg:w-64 lg:h-screen lg:bg-white lg:text-gray-500 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-center h-20 bg-white">
          <img src={QRLogo} alt="" />
        </div>
        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  activeClassName="bg-blue-700 border-l-4"
                  className={`block p-4 hover:bg-blue-300 cursor-pointer transition-all ease-in-out duration-100 font-bold ${
                    pathname === item.link
                      ? "bg-blue-300 border-l-4 border-blue-900 text-blue-800"
                      : ""
                  }`}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
