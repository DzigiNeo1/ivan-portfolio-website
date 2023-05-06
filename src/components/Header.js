import React from "react";
import "./Header.css";
import { Button } from "react-bootstrap";
import TypeAnimation from "react-type-animation";
import {Link} from "react-scroll"
const Header = () => {


  return (
    <>
      <div id="home" className="header-wraper">
        <div className="main-info">
          <h1>
            Web DEVELOPMENT <br />& <br />
            WEB DESIGN
          </h1>
          <TypeAnimation
            className="type-animation"
            cursor={true}
            sequence={[
              "Stojanovikj Ivan",
              5000,
              "Front end developer",
              5000,
              "Stojanovikj Ivan",
            ]}
            wrapper="a"
            repeat={3}
          />
          <div className="div-button-contact">
          <Link smooth={true} to="contact" >
          <Button className="button-contact"  variant="outline-info">
            CONTACT ME
          </Button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
