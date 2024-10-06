import React from "react";
import ReactDOM from "react-dom/client";
import HomeCarousel from "./HomeCarousel";
import ContentCarousel from "./ContentCarousel";

function BodyComp() {
  return (
    <div>
      <HomeCarousel />
      <ContentCarousel />
      <ContentCarousel />
    </div>
  );
}

export default BodyComp;
