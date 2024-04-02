import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import QRLogo from '../assets/QRSS with name svg white.svg';

const Sidebar = () => {
  const sidebarItems = [
    { text: 'My QR Codes', link: '/qrcodes' },
    { text: 'Create Folder', link: '/create' },
    { text: 'Stats', link: '/stats' },
    { text: 'Profile', link: '/profile' },
  ];

  // Get the current pathname using useLocation hook
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col w-64 bg-white h-screen text-gray-500">
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
                  pathname === item.link ? 'bg-blue-300 border-l-4 border-blue-900 text-blue-800' : ''
                }`}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
