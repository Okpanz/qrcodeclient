import React from 'react';
import Sidebar from './../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
