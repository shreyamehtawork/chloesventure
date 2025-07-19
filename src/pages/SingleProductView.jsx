// ProductView.jsx
import React from "react";
import "../styles/SingleProductsView.css";
import p1 from "../assets/products/p1.webp";
import p2 from "../assets/products/p1.webp";
import p3 from "../assets/products/p1.webp";
import p4 from "../assets/products/p1.webp";
import p5 from "../assets/products/p1.webp";

const SingleProductsView = () => {
  return (
    <div className="product-page">
      <div className="container d-flex flex-wrap product-wrapper px-5">
        {/* Left Section */}
        <div className="left-section col-md-6">
          <h1 className="title">Handmade Crochet Tulips</h1>
          <h3>
            Rs. 350 <span className="fw-light fs-5">(Inc.taxes)</span>
          </h3>
          <br></br>

          <div className="image-row d-flex">
            <div className="image-box">
              <img src={p1} alt="flower1" />
            </div>
            <div className="image-box">
              <img src={p2} alt="flower2" />
            </div>
            <div className="image-box">
              <img src={p3} alt="flower3" />
            </div>
            <div className="image-box">
              <img src={p4} alt="hand" />
            </div>
          </div>

          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ea
            quisquam voluptates quidem incidunt architecto consequatur labore
            molestiae fugiat, quia blanditiis ad totam quasi obcaecati nostrum
            laudantium? <br />
            <br />
            Unde nesciunt, quaerat consequatur adipisci ducimus, perferendis
            soluta quisquam laudantium dolores reiciendis nulla dicta
            reprehenderit excepturi ut impedit illum ipsum velit odio voluptatum
            esse atque aperiam accusamus!
            <br />
            <br />
          </p>

          <div className="button-group d-flex gap-3">
            <button className="btn wish-btn">WISH +</button>
            <button className="btn buy-btn">
              BUY NOW <span>&#9825;</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section col-md-6 d-flex justify-content-center align-items-center">
          <img src={p1} alt="Product Bottle" className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default SingleProductsView;
