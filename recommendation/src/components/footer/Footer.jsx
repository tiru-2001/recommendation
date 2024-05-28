import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="links">
          <ul>
            <li>
              <Link className="lin" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="lin" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="lin" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="social">
          <a className="lin" href="https://instagram.com/swami_b_gowda">
            <FaInstagram />
          </a>
          <a className="lin" href="https://www.linkedin.com/in/swamy-b-c-/">
            <FaLinkedin />
          </a>
          <a className="lin" href="http://www.google.com">
            <FaFacebookSquare />
          </a>
        </div>
        <div className="copyrights">
          <p>&copy; Copyright LBS. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
