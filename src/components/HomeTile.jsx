import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import backimg from "../images/7ec0559f-6180-4b29-becd-0f12f702ec5c._UR3840,1440_SX1440_FMjpg_.jpeg";

function ListItem(props) {
  // const [isVisible, setisVisible] = useState(false);

  // function ObserveFirstChild(event) {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setisVisible(false);
  //           // console.log("on screen");
  //         } else {
  //           setisVisible(true);
  //           // console.log("not on screen");
  //         }
  //       });
  //     },
  //     { rootMargin: "100% 0% 100% 0%" }
  //     // { threshold: 1 }
  //   );
  //   observer.observe(event);
  // }

  // onScroll={(event) => {
  //   ObserveFirstChild(event.target.firstChild);
  //   ObserveLastChild(event.target.lastChild);
  // }}

  // setTimeout(() => {
  //   console.log("Delayed for 1 second.");
  // }, 1000);

  return (
    <li
      style={{
        aspectRatio: "3/1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <article
        style={{
          height: "auto",
          position: "relative",
          overflow: "hidden",
          aspectRatio: "3/1",
        }}
      >
        <div className="abc">
          <div
            style={{
              height: "100%",
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%",
            }}
          >
            <img
              style={{ height: "100%", width: "100%" }}
              src={backimg}
              alt="background color for now."
            ></img>
          </div>
          <section className="home-tile-details-section">
            <h2 className="home-tile-details-poster">
              <a href="">
                <div className="home-tile-details-img-div">
                  <img
                    className="home-tile-details-img"
                    src={props.images}
                    // src={props.logo}
                    alt="tite art"
                  ></img>
                </div>
              </a>
            </h2>
            <div className="home-tile-details-notposter-div1">
              <div className="home-tile-details-notposter-div2">
                <span className="home-tile-details-notposter-span1">
                  {/* basic information */}
                  {props.released}
                </span>
                <span className="home-tile-details-notposter-span2">
                  {props.rated}
                </span>
              </div>
              <div className="home-tile-details-buttons-div">
                <div className="home-tile-details-buttons-play-div1">
                  <div className="home-tile-details-buttons-play-div2 ">
                    <label className="home-tile-details-buttons-play-label">
                      <a className="home-tile-details-buttons-play-a" href="">
                        <svg
                          className="_22qEau"
                          viewBox="0 0 80 80"
                          height="80"
                          width="80"
                          role="img"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <title>Play Button</title>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 80 80"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40ZM29.761 55.536V25.575c0-1.724 1.877-2.791 3.359-1.91l25.178 14.98c1.447.862 1.447 2.959 0 3.82L33.12 57.446c-1.482.882-3.359-.186-3.359-1.91Z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <title>Play Button</title>
                        </svg>
                      </a>
                      <span>Play</span>
                    </label>
                  </div>
                </div>
                <div className="home-tile-details-buttons-watchlist-div">
                  <button className="home-tile-details-buttons-watchlist-button">
                    <svg
                      viewBox="0 0 24 24"
                      height="24px"
                      width="24px"
                      role="img"
                      aria-hidden="true"
                      style={{ height: 24, width: 24 }}
                    >
                      <title>Add</title>
                      <svg
                        width="24px"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Add</title>
                        <path
                          d="M3 12h18m-9 9V3"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </svg>
                  </button>
                  <label className="home-tile-details-buttons-labels">
                    Watchlist ***xDisplayed on Hover***
                  </label>
                </div>
                <div className="home-tile-details-buttons-info-div">
                  <a href="" className="home-tile-details-buttons-info-a">
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      role="img"
                      aria-hidden="true"
                      style={{ height: 24, width: 24 }}
                    >
                      <title>Info</title>
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Info</title>
                        <g fill="none" fillRule="evenodd">
                          <path
                            d="M11 10.097c0-.603.439-1.097.976-1.097h.049c.536 0 .975.494.975 1.097v6.805c0 .604-.439 1.098-.975 1.098h-.05c-.536 0-.975-.494-.975-1.098v-6.805zM11 6h2v2h-2z"
                            fill="currentColor"
                          ></path>
                          <circle
                            stroke="currentColor"
                            strokeWidth="2"
                            cx="12"
                            cy="12"
                            r="9"
                          ></circle>
                        </g>
                      </svg>
                    </svg>
                  </a>
                  <label className="home-tile-details-buttons-labels">
                    Details
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </li>
  );
}

export default ListItem;
