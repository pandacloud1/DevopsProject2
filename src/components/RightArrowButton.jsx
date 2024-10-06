import React from "react";
import ReactDOM from "react-dom/client";
// import right_arrow from "../images/right-arrow.png";

function RightArrowButton(props) {
  let classname = "arrowbutton";
  if (props.isVisible) {
    classname = "not_display arrowbutton";
  }
  return (
    <button
      //   className="arrowbutton"
      className={classname}
      onClick={(event) => {
        event.target.previousElementSibling.scrollLeft += 1400; // USE REF HOOK
      }}
      style={{ gridArea: "right" }}
      //   style={style}
    >
      {/* <img
        src={right_arrow}
        alt="right"
        style={{ width: 24, height: 24 }}
      ></img> */}
      <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        role="img"
        style={{ height: 24, width: 24 }}
      >
        <title>Arrow</title>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="white"
            d="m15.775 12-9.262 9.073a1.69 1.69 0 0 0 0 2.425c.683.67 1.791.67 2.474 0l10.5-10.286a1.69 1.69 0 0 0 0-2.424L8.987.502a1.776 1.776 0 0 0-2.474 0 1.69 1.69 0 0 0 0 2.424L15.775 12Z"
          ></path>
        </svg>
        <title>Arrow</title>
      </svg>
    </button>
  );
}

export default RightArrowButton;
