import React from "react";
import "../../styles/EditorsPicks.css";
import p1 from "../../assets/products/p1.webp";
import p2 from "../../assets/products/p2.webp";
import p3 from "../../assets/products/p3.webp";
import p4 from "../../assets/products/p4.webp";
import p5 from "../../assets/products/p5.webp";
import p6 from "../../assets/products/p6.webp";
import p7 from "../../assets/products/p7.webp";

const cardImages = [p1, p2, p3, p4, p5, p6, p7];

const EditorsPicks = () => {
  const total = cardImages.length;
  const center = Math.floor(total / 2);
  const angleSpread = 50; // total angle spread (degrees)
  const translateXBase = 200; // horizontal distance between cards
  const curveDepth = 115; // vertical offset for curve

  return (
    <div>
      <div className="monclos-container pb-2">
        {/* <h2 className="text-white sections-heading ">featured</h2> */}
        {/* <h2 className="editors-heading text-white">EDITORS PICKS</h2> */}

        <div className="card-deck">
          {cardImages.map((img, idx) => {
            const angle = (idx - center) * (angleSpread / (total - 1));
            const translateX = (idx - center) * translateXBase;
            const curveOffset =
              Math.pow(idx - center, 2) * (curveDepth / (total - 1));

            return (
              <img
                key={idx}
                src={img}
                alt={`Monclos ${idx}`}
                className="monclos-card"
                style={{
                  left: "50%",
                  zIndex: 100 - Math.abs(idx - center),
                  "--base-transform": `translate(-50%, 0) translateX(${translateX}px) translateY(${curveOffset}px) rotate(${angle}deg)`,
                }}
              />
            );
          })}

          <h3 className="editors-heading pb-3">EDITOR'S PICKS</h3>
        </div>
      </div>
    </div>
  );
};

export default EditorsPicks;
