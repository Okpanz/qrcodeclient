import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import QRLogo from "../assets/QRSS with name svg white.svg";
import { RiQrCodeLine } from "react-icons/ri";
import { CiFolderOn } from "react-icons/ci";
import { IoIosStats } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "./../redux/authSlice";
import { MdClose, MdLogout } from "react-icons/md";
import { BsQrCodeScan } from "react-icons/bs";

const Sidebar = () => {
  const dispatch = useDispatch(); // Get the dispatch function
  const [toggle, setToggle] = useState(false); // Set the toggle state
  const { pathname } = useLocation();
  const sidebarItems = [
    { text: "Create QR", link: "/dash/createQR" },
    { text: "My QR Codes", link: "/dash/qrcodes" },
    { text: "Folders", link: "/dash/create" },
    { text: "Stats", link: "/dash/stats" },
    // { text: "Scan QR Code", link: "/scan" },
  ];

  const sidebarIcons = [
    <BsQrCodeScan />,
    <RiQrCodeLine />,
    <CiFolderOn />,
    <IoIosStats />,
  ];

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const handleNavLinkClick = () => {
      setToggle(false); 
  };

  return (
    <div
      className={`z-50 lg:flex lg:flex-row lg:justify-between h-screen transition-all ease-in-out duration-300 text-gray-500 fixed ${
        !toggle ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="lg:hidden">
        {toggle ? (
          <button
            className="p-3 m-3 text-blue-700 transition-all ease-in-out duration-500"
            onClick={handleToggle}
          >
            <MdClose />
          </button>
        ) : (
          <button
            className="p-3 m-3 z-50 outline-none text-blue-700 focus:outline-none transition-all ease-in-out duration-500"
            onClick={handleToggle}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </div>
      {toggle ? (
        <div className="lg:w-[20vw] w-screen transition-all ease-in-out duration-300">
          <div className="flex items-center justify-center h-20 bg-white">
            <img src={QRLogo} alt="" className={`${toggle && "w-64"}`} />
          </div>
          <div className="overflow-y-auto">
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
                    onClick={handleNavLinkClick} 
                  >
                    <div className="flex gap-2 items-center">
                      <span>{item.text}</span>
                      {sidebarIcons[index]}
                    </div>
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="p-4 flex items-center justify-center text-red-600 w-full cursor-pointer transition-all ease-in-out duration-100 font-bold"
                >
                  <MdLogout className="mr-2" /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )
    :
    (
      <div className="lg:w-[20vw] md:block hidden bg-white transition-all ease-in-out duration-300">
          <div className="flex items-center justify-center h-20 bg-white">
            <img src={QRLogo} alt="" className={`${toggle && "w-64"}`} />
          </div>
          <div className="overflow-y-auto">
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
                    onClick={handleNavLinkClick} 
                  >
                    <div className="flex gap-2 items-center">
                      <span>{item.text}</span>
                      {sidebarIcons[index]}
                    </div>
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="p-4 flex items-center justify-center text-red-600 w-full cursor-pointer transition-all ease-in-out duration-100 font-bold"
                >
                  <MdLogout className="mr-2" /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
    )
    }
    </div>
  );
};

export default Sidebar;
