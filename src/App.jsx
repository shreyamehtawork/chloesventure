import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
