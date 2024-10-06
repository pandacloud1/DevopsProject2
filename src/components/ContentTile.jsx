import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function ContentTile(props) {
  const [isHovering, setIsHovering] = useState(false);
  // function handleMouseOver() {
  //   setIsHovering(true);
  // }
  // function handleMouseOut() {
  //   setIsHovering(false);
  // }
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <li
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ marginRight: 24 }}
      // height: 140, width: 248
    >
      <article>
        <section style={{ zIndex: 2 }}>
          <div>
            <img
              style={{
                height: 140,
                width: 248,
                borderRadius: 8,
              }}
              src={props.poster}
              alt="poster"
            ></img>
            {/* {isHovering && (
              <article>
                <div></div>
                <section></section>
                <h4>abc</h4>
                <section></section>
                <div></div>
              </article>
            )} */}
          </div>
        </section>
      </article>
    </li>
  );
}

export default ContentTile;
