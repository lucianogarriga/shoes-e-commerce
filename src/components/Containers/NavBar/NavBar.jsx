import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Link } from "react-router-dom";
import CartWidget from "../../Pure/CartWidget/CartWidget";

const NavBar = () => {
  return (
    <> 
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid ">
          <div>
          <a className="navbar-link" href="#">
            Shoes Market - 
          </a>
          <CartWidget/>
          </div>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{alignItems: "center"}} >
              <Link to="/" className="navbar-link">Home</Link> 
              <Link to="/cart" className="navbar-link">Cart</Link>
              <Link to="/about" className="navbar-link">About</Link> 
              <Link to="/contact" className="navbar-link">Contact</Link> 
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
