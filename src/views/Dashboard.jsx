import React from 'react';
import Sidebar from './../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = ({ subRoutes }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
