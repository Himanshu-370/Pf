import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <div className="container topnav">
        <div className="topnav logoName">
          <logo>
            <FaCode className="logo" /> Developer X
          </logo>
        </div>
        <div class="topnav" id="myTopnav">
          <a
            href="#"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
          <a
            href="#"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "#about" : ""}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Home
          </a>
          <a href="" class="icon">
            <FaBars size="26px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
