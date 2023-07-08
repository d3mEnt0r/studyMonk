import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./page4.css";

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url: "https://responsewebrecruitment.co.uk/wp-content/uploads/2017/04/HR-TRENDS.jpg"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://www.aihr.com/wp-content/uploads/Full-Cycle-Recruiting-in-6-steps.png"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://hr.university/wp-content/uploads/2021/12/S2-8A-1024x639.jpg"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://cdn.ttgtmedia.com/rms/onlineimages/hrsoftware-recruitment_mobile.png"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

export default function Page4() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="carousal">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}