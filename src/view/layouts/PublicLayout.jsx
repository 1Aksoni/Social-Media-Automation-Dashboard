import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <header>
        <h1>Welcome to Social Media Automation</h1>
      </header>
      <Outlet /> {/* Renders the public pages like Login or Signup */}
    </div>
  );
};

export default PublicLayout;
