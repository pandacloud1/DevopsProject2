import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HomeTile from "./HomeTile";
import HomeTileData from "./HomeTileData";
import NavUl from "./NavUl";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";

// function InputListItem(listitem) {
//   return (
//     <HomeTile
//       poster={listitem.poster}
//       released={listitem.released}
//       rated={listitem.rated}
//       images={listitem.images[0]}
//     />
//   );
// }
// function NavigationList() {
//   return <NavUl />;
// }

function HomeCarousel() {
  const [leftVisibility, setLeftVisibility] = useState(false);
  const [rightVisibility, setRightVisibility] = useState(false);

  // setTimeout(() => {
  //   console.log("this is the first message");
  //   const fgh = document.getElementsByClassName("home-ul")[0].children;
  //   for (let i = 0; i < fgh.length; i++) {
  //     fgh[i].scrollIntoView();
  //     // console.log(fgh[i]);
  //   }
  // }, 1000);
  // const fgh = document.getElementsByClassName("home-ul")[0].children;
  // for (let i = 0; i < fgh.length; i++) {
  //   setInterval(fgh[i].scrollIntoView(), 30000);
  //   fgh[i].scrollIntoView();
  // }

  // setInterval(
  //   (document.getElementsByClassName("home-ul")[0].scrollLeft += 1400),
  //   3000
  // );

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
      // { rootMargin: "100% 0% 100% 0%" },
      { threshold: 0.1 }
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
      // { rootMargin: "100% 0% 100% 0%" }
      { threshold: 0.1 }
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

  function navClick(id) {
    const element = document.getElementById("abc").children[id];
    element.scrollIntoView({ block: "nearest" });

    // const e = document.getElementsByClassName("nav-ul")[0].children;
    // console.log(e);
    // e.forEach((element) => element.classList.remove("x"));
    for (let i = 0; i < 8; i++) {
      // i.classList.remove("x");
      document
        .getElementsByClassName("nav-ul")[0]
        .children[i].classList.remove("nav-li-clicked");
    }

    document
      .getElementsByClassName("nav-ul")[0]
      .children[id].classList.add("nav-li-clicked");
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ marginBottom: "48px", position: "relative" }}
    >
      <section>
        <div className="pain home-carousel">
          {/* <button id="tomoveleft">Left</button> */}
          {isHovering && <LeftArrowButton isVisible={leftVisibility} />}
          <ul
            id="abc"
            className="container-ul home-ul"
            onScroll={(event) => {
              ObserveFirstChild(event.target.firstChild);
              ObserveLastChild(event.target.lastChild);
            }}
          >
            {HomeTileData.map((listitem) => {
              return (
                <HomeTile
                  key={listitem.id}
                  id={listitem.id}
                  poster={listitem.poster}
                  released={listitem.released}
                  rated={listitem.rated}
                  images={listitem.images[0]}
                />
              );
            })}
          </ul>
          {/* <button id="tomoveright">Right</button> */}
          {isHovering && <RightArrowButton isVisible={rightVisibility} />}
        </div>
        <ul className="nav-ul">
          {HomeTileData.map((navItem) => {
            return (
              <NavUl key={navItem.id} id={navItem.id} onChecked={navClick} />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default HomeCarousel;
