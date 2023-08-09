import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./Cart/CartWidget";

const NavBar = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React E-commerce
          </a>
          <CartWidget/>
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
              <li><a className="nav-link active" href="#"> Home</a></li>
              <li><a className="nav-link" href="#"> Nosotros</a></li>
              <li><a className="nav-link" href="#"> Productos</a></li>
              <li><a className="nav-link" href="#"> Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
