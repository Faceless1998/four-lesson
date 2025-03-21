import React from "react";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "../theme/ThemeProvider";
import ThemeToggleButton from "../theme/ThemeToggleButton";

const Layout = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-item">
          <Link to="/" className="nav-link">
            {" "}
            Home{" "}
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/about" className="nav-link">
            {" "}
            About{" "}
          </Link>
        </div>

        <div className="nav-item">
          <Link to="/products" className="nav-link">
            {" "}
            Products{" "}
          </Link>
        </div>

        <div className="nav-item">
          <Link to="/contact" className="nav-link">
            {" "}
            Contact{" "}
          </Link>
        </div>

        <div className="nav-item">
          <Link to="/sign-in" className="nav-link">
            Sign in
          </Link>
        </div>

        <div className="nav-item">
          <ThemeProvider>
            <ThemeToggleButton />
          </ThemeProvider>
        </div>

      </div>

      <Outlet />
    </>
  );
};

export default Layout;
