import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"

const Layout = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="custom-scrollbar" style={{ flex: 1, overflowY: 'auto', backgroundColor: "#050505" }}>
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
