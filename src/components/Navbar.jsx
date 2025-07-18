import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logofinal.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar text-white px-4 py-3">
      <a className="navbar-brand text-white" href="/">
        <img src={logo} height="50" width="60" alt="logo.png"></img> CHLOE'S
        VENTURE
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav gap-4">
          <li className="nav-item">
            <a className="nav-link luxury-link text-white" href="/">
              HOME
            </a>
            <a></a>
          </li>
          <li className="nav-item">
            <a className="nav-link luxury-link text-white" href="/about">
              ABOUT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
