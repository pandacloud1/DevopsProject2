import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function NavUl(props) {
  // const [className, setClassName] = useState("nav-li");

  return (
    <li
      className="nav-li "
      onClick={() => {
        // setClassName("nav-li x");
        props.onChecked(props.id);
      }}
    ></li>
  );
}

export default NavUl;
