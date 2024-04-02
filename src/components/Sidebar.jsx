import React from 'react';
import QRLogo from '../assets/QRSS with name svg white.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const sidebarItems = [
    { text: 'My QR Codes', link: '/qrcodes' },
    { text: 'Create Folder', link: '/create' },
    { text: 'Statistics', link: '/stats' },
    { text: 'Profile', link: '/profile' },
  ];

  return (
    <div className="flex flex-col w-64 bg-blue-500 h-screen text-white">
      <div className="flex items-center justify-center h-20 bg-blue-300">
        <img src={QRLogo} alt="" />
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                activeClassName="bg-blue-700 border-l-4"
                className="block px-4 py-2 hover:bg-blue-700 cursor-pointer transition-all ease-in-out duration-100 font-medium"
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
