import React from "react";
import ReactDOM from "react-dom/client";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="logo"></div>
      <ul className="footer-ul">
        <li className="footer-li">
          <a href="" className="footer-anchor">
            Terms and Privacy Notice
          </a>
        </li>
        <li className="footer-li">
          <a href="" className="footer-anchor">
            Send us feedback
          </a>
        </li>
        <li className="footer-li">
          <a href="" className="footer-anchor">
            Help
          </a>
        </li>
        <li className="footer-li">
          © 1996-{year}, Amazon.com, Inc. or its affiliates
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
