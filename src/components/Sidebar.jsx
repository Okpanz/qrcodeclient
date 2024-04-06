import React, { useEffect, useState } from "react";
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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [widthChange, setWidthChange] = useState(false);

  useEffect(() => {
    function handleResize() {
      const curWindowWidth = window.innerWidth;
      if (curWindowWidth > 639) {
        setWidthChange(true);
      } else {
        setWidthChange(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { pathname } = useLocation();
  const sidebarItems = [
    { text: "My QR Codes", link: "/dash/qrcodes" },
    { text: "Create QR", link: "/dash/createQR" },
    { text: "Folders", link: "/dash/create" },
    { text: "Stats", link: "/dash/stats" },
    // { text: "Scan QR Code", link: "/scan" },
  ];

  const sidebarIcons = (key) => {
    return [
      <RiQrCodeLine key={key} />,
      <BsQrCodeScan key={key} />,
      <CiFolderOn key={key} />,
      <IoIosStats key={key} />,
    ][key];
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
    
  };

  return (
    <div
      className={`flex flex-col w-64 sm:w-20 bg-white h-screen text-gray-500 fixed `}
    >
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="px-4 py-2 text-blue-700 focus:outline-none"
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
      <div
        // className={`lg:flex lg:flex-col lg:justify-between lg:w-64 lg:h-screen lg:bg-white lg:text-gray-500 ${isSidebarOpen ? "block" : "hidden"}`}
        className={`lg:flex lg:flex-col lg:justify-between lg:w-64 lg:h-screen lg:bg-white lg:text-gray-500 ${isSidebarOpen ? "block" : "hidden"}`}

      >
        <div className="flex items-center justify-center h-20 bg-white sm:hidden">
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
                  {!widthChange && sidebarIcons(index)}
                  {widthChange && (
                    <div className={"flex gap-2 sm:hidden items-center"}>
                      <span>{item.text}</span>
                      <span>{sidebarIcons(index)}</span>
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogout}
                className="p-4 flex items-center justify-center  text-red-600   w-full cursor-pointer transition-all ease-in-out duration-100 font-bold"
              >
                <MdLogout /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
