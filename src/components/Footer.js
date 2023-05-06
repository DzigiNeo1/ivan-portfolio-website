import React from "react";
import "./Footer.css";
import eplephantLogo from "../Elephant.png";
import {
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="page-footer font-small dark pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">
              {" "}
              <img className="elephant" src={eplephantLogo} />
            </h5>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className=" col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled ">
              <Link smooth={true} to="home" offset={-115}>
                <li>
                  <a href="#!">Home</a>
                </li>
              </Link>
              <Link smooth={true} to="about" offset={-180}>
                <li>
                  <a href="#!">About</a>
                </li>
              </Link>
              <Link smooth={true} to="portfolio" offset={-220}>
                <li>
                  <a href="#!">Portoflio</a>
                </li>
              </Link>
              <Link smooth={true} to="contact">
                <li>
                  <a href="#!">Contact</a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Social Media</h5>
            <ul className="list-unstyled ">
              <li>
                <LinkedinShareButton url="https://www.linkedin.com/in/ivan-stojanovikj-05a08820b/">
                  <LinkedinIcon className="my-1 icon" size={40} />
                </LinkedinShareButton>
              </li>
              <li>
                <EmailShareButton>
                  <EmailIcon className="icon" size={40} />
                </EmailShareButton>
              </li>
              <li>
                <TwitterShareButton url="https://twitter.com/IStojanovikj">
                  <TwitterIcon className="my-1 icon" size={40} />
                </TwitterShareButton>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2022 Stojanovikj Ivan
      </div>
    </footer>
  );
};
export default Footer;
