import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logofinal.png"; // This should be your CV logo

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar text-white px-4 py-3">
      <a className="navbar-brand text-white d-flex align-items-center" href="/">
        <div className="logo-circle d-flex align-items-center justify-content-center">
          <img src={logo} alt="logo" className="oval-logo" />
        </div>
        <span className="brand-text">CHLOE'S VENTURE</span>
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

// import React from "react";
// import "../styles/Navbar.css";
// import logo from "../assets/logofinal.png"; // This should be your CV logo

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar text-white px-4 py-3">
//       <a className="navbar-brand text-white d-flex align-items-center gap-3" href="/">
//         <div className="logo-circle">
//           <img src={logo} alt="logo" />
//         </div>
//         <span className="brand-text">CHLOE'S VENTURE</span>
//       </a>

//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div
//         className="collapse navbar-collapse justify-content-end"
//         id="navbarNav"
//       >
//         <ul className="navbar-nav gap-4">
//           <li className="nav-item">
//             <a className="nav-link luxury-link text-white" href="/">
//               HOME
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link luxury-link text-white" href="/about">
//               ABOUT
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
