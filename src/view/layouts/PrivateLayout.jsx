import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        {/* Outlet is where the page content will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;
