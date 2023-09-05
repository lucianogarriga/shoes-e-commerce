import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../../Pure/CartWidget/CartWidget";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-ligth navbar-expand-lg">
        <div className="container-fluid me-auto ms-auto">
          <NavLink to="/" className="navbar-link">
            Shoes Market
          </NavLink>
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
            <form className="form my-1 my-lg-0 ms-auto me-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar productos, marcas y más"
                aria-label="Search" 
              ></input>
              <button className="btn my-2 my-sm-0" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/cart" className="navbar-link">
                  <CartWidget />
                </NavLink>
                <NavLink to="/category/zapatillas" className="navbar-link">
                  Zapatillas
                </NavLink>
                <NavLink to="/category/botines" className="navbar-link">
                  Botines
                </NavLink>
                <NavLink to="/about" className="navbar-link">
                  Nosotros
                </NavLink>
                <NavLink to="/contact" className="navbar-link">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
