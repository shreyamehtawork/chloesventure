import React from "react";
import "../styles/Products.css";

import p1 from "../assets/products/p1.webp";
import p2 from "../assets/products/p2.webp";
import p3 from "../assets/products/p3.webp";
import p4 from "../assets/products/p4.webp";
import p5 from "../assets/products/p5.webp";
import p6 from "../assets/products/p6.webp";
import p7 from "../assets/products/p7.webp";
import p8 from "../assets/products/p8.webp";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Crochet Tote Bag",
    image: p1,
    price: "Rs 45",
  },
  {
    name: "Boho Wall Hanging",
    image: p2,
    price: "Rs 30",
  },
  {
    name: "Handmade Crochet Tulips",
    image: p3,
    price: "Rs 30",
  },
  {
    name: "Hnadmade Daisy flower",
    image: p4,
    price: "Rs 30",
  },
  {
    name: "Crochet Lily Flower",
    image: p5,
    price: "Rs 30",
  },
  {
    name: "Crochet Hydrangea Flower",
    image: p6,
    price: "Rs 30",
  },
  {
    name: "Crochet Rose Flower",
    image: p7,
    price: "Rs 30",
  },
  {
    name: "Crochet Lotus Flower",
    image: p8,
    price: "Rs 30",
  },
];

function Products() {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/products/singleproductspage");
  };
  return (
    <div className="products-page">
      {/* Hero Section */}
      <div className="products-hero text-white text-center">
        <h1 className="display-4 handwritten">Our Creations</h1>
        <p className="lead serif">
          Artisan-crafted crochet & knit pieces made with love.
        </p>
      </div>

      {/* Products Grid */}
      <div className="container my-5">
        <div className="row products-grid">
          {products.map((product, index) => (
            <div className="col-6 col-md-4 col-lg-3 g-2 mb-5" key={index}>
              <div className="product-card">
                <div className="arched-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                </div>
                <h5 className="mt-3">{product.name}</h5>
                <p className="price">{product.price}</p>

                <button
                  className="btn btn-outline-dark rounded-pill mt-0"
                  onClick={handleClick}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
