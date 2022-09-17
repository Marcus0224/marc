import React from "react";
import "./header.css";
import Resume from "./Resume";
import ME from "../../assets/cover/cover-image.jpg";
import Socials from "../header/Socials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1>Marc St louis</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Resume />
        <Socials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;