import React from "react";
import "./Navigation.css";
import logo from "./img2.png";

const Navigation = () => {
  return (
    <div>
      <div id="main">
        
        <div className="imglogo">
          <img src={logo} alt="logo" />
        </div>
        <h1>LOREM ISPUM</h1>
      </div>
    </div>
  );
};

export default Navigation;