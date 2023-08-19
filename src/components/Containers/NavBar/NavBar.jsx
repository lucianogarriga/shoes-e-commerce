import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../../Pure/CartWidget/CartWidget";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-ligth navbar-expand-lg">
        <div className="container-fluid ">
          <div>
            <NavLink to="/" className="navbar-link">
              Shoes Market
            </NavLink>
          </div>
            <CartWidget />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ alignItems: "center" }}
            >
              <NavLink to="/" className="navbar-link">
                Home
              </NavLink>
              <NavLink to="/cart" className="navbar-link">
                Cart
              </NavLink>
              <NavLink to="/about" className="navbar-link">
                About
              </NavLink>
              <NavLink to="/contact" className="navbar-link">
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
