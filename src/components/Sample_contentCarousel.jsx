import React from "react";
import ReactDOM from "react-dom/client";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";

function abc(data) {
  return <ContentTile poster={data.poster} />;
}

function ContentCarousel() {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ marginLeft: 72, marginRight: 72, paddingBottom: 16 }}>
        Movies List
      </div>
      <div>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <button
            onClick={() => {
              document.getElementById("container").scrollLeft -= 1400;
            }}
            style={{
              backgroundColor: "transparent",
              zIndex: 20,
              // display: "none",
            }}
          >
            left
          </button>
          <ul id="container" style={{ zIndex: 2 }}>
          import React from "react";
import ReactDOM from "react-dom/client";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";

function abc(data) {
  return <ContentTile poster={data.poster} />;
}

function ContentCarousel() {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ marginLeft: 72, marginRight: 72, paddingBottom: 16 }}>
        Movies List
      </div>
      <div>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <button
            onClick={() => {
              document.getElementById("container").scrollLeft -= 1400;
            }}
            style={{
              backgroundColor: "transparent",
              zIndex: 20,
              // display: "none",
            }}
          >
            left
          </button>
          <ul
            id="container"
            style={{
              alignItems: "flex-start",
              display: "flex",
              flexDirection: "row",
              scrollSnapType: "x proximity",
              listStyle: "none",
              overflowX: "scroll",
              scrollBehavior: "smooth",
              padding: "72 72",
              margin: 0,
              zIndex: 2,
            }}
          >
            {ContentTileData.map(abc)}
          </ul>
          <button
            onClick={() => {
              document.getElementById("container").scrollLeft += 1400;
            }}
            style={{
              backgroundColor: "transparent",
              zIndex: 20,
              border: "none",
              appearance: "none",
              // display: "none",
            }}
          >
            <img
              src="https://www.citypng.com/public/uploads/preview/right-arrowhead-black-11581593809dmlihnv7fa.png"
              alt="right"
              style={{ width: 20, height: 20 }}
            ></img>
          </button>
        </div>
        {/* <button
          onClick={() => {
            document.getElementById("container").scrollLeft += 1400;
          }}
        >
          ABC
        </button> */}
      </div>
    </div>
  );
}

export default ContentCarousel;


**new**


import React from "react";
import ReactDOM from "react-dom/client";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";

function abc(data) {
  return <ContentTile poster={data.poster} />;
}

function ContentCarousel() {
  return (
    <div style={{ marginBottom: 48 }}>
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
          }}
        >
          Movies List
        </h2>
      </div>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateAreas: "left right",
            gridTemplateColumns: "repeat(2,48)",
            gridTemplateRows: "1fr",
            justifyContent: "space-between",
            overflow: "hidden",
            minWidth: 320,
          }}
        >
          <button
            onClick={() => {
              document.getElementById("container").scrollLeft -= 1400;
            }}
            style={{
              gridArea: "left",
              // gridColumnStart: "left",
              // gridColumnEnd: "left",
              // gridRowStart: 1,
              // gridRowEnd: "auto",
              alignItems: "center",
              cursor: "pointer",
              display: "grid",
              justifyItems: "center",
              margin: 0,
              maxWidth: 30,
              backgroundColor: "transparent",
              zIndex: 20,
              position: "relative",
              // display: "none",
            }}
          >
            left
          </button>
          <ul
            id="container"
            style={{
              gridColumnStart: "left-start",
              gridColumnEnd: "right-end",
              gridRowStart: 1,
              gridRowEnd: "auto",
              zIndex: 1,
              alignItems: "flex-start",
              display: "flex",
              flexDirection: "row",
              scrollSnapType: "x proximity",
              listStyle: "none",
              overflowX: "scroll",
              scrollBehavior: "smooth",
              padding: "72 72",
              margin: 0,
            }}
          >
            {ContentTileData.map(abc)}
          </ul>
          <button
            onClick={() => {
              document.getElementById("container").scrollLeft += 1400;
            }}
            style={{
              gridArea: "right",
              // gridColumnStart: "right",
              // gridColumnEnd: "right",
              // gridColumn: "right",
              // gridRowStart: "1",
              // gridRowEnd: "1",
              alignItems: "center",
              cursor: "pointer",
              display: "grid",
              justifyItems: "center",
              margin: 0,
              maxWidth: 30,
              padding: 0,
              backgroundColor: "transparent",
              zIndex: 20,
              position: "relative",
              // border: "none",
              // appearance: "none",
              // display: "none",
            }}
          >
            right
            {/* <img
              src="https://www.citypng.com/public/uploads/preview/right-arrowhead-black-11581593809dmlihnv7fa.png"
              alt="right"
              style={{ width: 20, height: 20 }}
            ></img> */}
          </button>
        </div>
        {/* <button
          onClick={() => {
            document.getElementById("container").scrollLeft += 1400;
          }}
        >
          ABC
        </button> */}
      </div>
    </div>
  );
}

export default ContentCarousel;
