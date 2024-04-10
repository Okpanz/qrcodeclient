import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import QRLogo from "../assets/QRSS with name svg white.svg";
import { RiQrCodeLine } from "react-icons/ri";
import { CiFolderOn } from "react-icons/ci";
import { IoIosStats } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "./../redux/authSlice";
import { MdLogout } from "react-icons/md";
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

  return (
    <div
      className={`flex flex-col ${ toggle ? "w-[50vw]" : "md:w-[20vw] w-[10vw]"} bg-white h-screen text-gray-500 fixed transition-all ease-in-out`}
    >
      <div className="lg:hidden">
        <button
          className="px-4 py-2 text-blue-700 focus:outline-none"
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
      </div>
      <div className="lg:flex lg:flex-col lg:justify-between">
        <div className={`${toggle}flex items-center justify-center h-20 bg-white`}>
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
                  <div className="flex gap-2 items-center">
                    <span className={toggle ? "lg:inline" : "hidden lg:inline"}>
                      {item.text}
                    </span>
                    {sidebarIcons[index]}
                  </div>
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogout}
                className={`p-4 ${
                  toggle ? "flex" : "hidden md:flex"
                } items-center justify-center text-red-600 w-full cursor-pointer transition-all ease-in-out duration-100 font-bold`}
              >
                <MdLogout className="mr-2" /> Logout
              </button>
              <button
                onClick={handleLogout}
                className="pl-2 text pt-3 md:hidden flex items-center justify-center text-red-600 w-full cursor-pointer transition-all ease-in-out duration-100 font-bold"
              >
                <MdLogout className="mr-2" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
