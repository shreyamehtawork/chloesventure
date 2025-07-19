import React from "react";
import "../../App.css";
import Navbar from "../../components/Navbar";
import herovideo from "../../assets/hero.mp4";

function Hero() {
  return (
    <div className="hero-container">
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src={herovideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <div className="hero-content text-center text-white">
          <h1 className="display-6">where Vision meets Elegance</h1>
          <h3 className="lead display-5">Coming Soon!</h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
