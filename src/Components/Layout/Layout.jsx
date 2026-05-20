import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="custom-scrollbar" style={{ flex: 1, overflowY: 'auto', backgroundColor: "#050505" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
