import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";

function abc(data) {
  return <ContentTile poster={data.poster} />;
}

function ContentCarousel() {
  const [leftVisibility, setLeftVisibility] = useState(false);
  const [rightVisibility, setRightVisibility] = useState(false);
  function ObserveFirstChild(event) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLeftVisibility(false);
            // console.log("on screen");
          } else {
            setLeftVisibility(true);
            // console.log("not on screen");
          }
        });
      },
      { rootMargin: "100% 0% 100% 0%" },
      { threshold: 0.3 }
    );
    observer.observe(event);
  }
  function ObserveLastChild(event) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log("on screen");
            setRightVisibility(true);
          } else {
            // console.log("not on screen");
            setRightVisibility(false);
          }
        });
      },
      { rootMargin: "100% 0% 100% 0%" },
      { threshold: 0.3 }
    );
    observer.observe(event);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ marginBottom: 48 }}
    >
      <div
        style={{
          marginLeft: 72,
          marginRight: 72,
          paddingBottom: 16,
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          position: "relative",
        }}
      >
        <h2
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            color: "#fff",
          }}
        >
          Popular Movies and TV shows
        </h2>
      </div>
      <div>
        <div className="pain">
          {isHovering && <LeftArrowButton isVisible={leftVisibility} />}
          <ul
            className="container-ul content-ul"
            // onScroll={(event) => {

            //   observer.observe(event.target.firstChild);
            // }}
            onScroll={(event) => {
              ObserveFirstChild(event.target.firstChild);
              ObserveLastChild(event.target.lastChild);
            }}
          >
            {ContentTileData.map(abc)}
          </ul>
          {isHovering && <RightArrowButton isVisible={rightVisibility} />}
        </div>
      </div>
    </div>
  );
}

export default ContentCarousel;
