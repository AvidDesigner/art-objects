import React from "react";
import photos from "../data";

const Featured = () => {
  const [image1, image2] = photos;
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={image1} alt="Image 1" data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={image2} alt="Image 2" data-scroll />
      </div>
    </section>
  );
};

export default Featured;
