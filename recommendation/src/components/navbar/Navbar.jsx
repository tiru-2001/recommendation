import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import images from "../../assets/index";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const { pathname } = useLocation();

  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const isActive = () => {
    if (window.scrollY > 0 || pathname !== "/") {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  return (
    <div className={active ? " active app__navbar " : "app__navbar"}>
      <div className="logo app__flex">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__flex   app__links-container">
        <li>
          <Link className="app__links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="app__links" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="app__links" to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="app__links" to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="app__links" to="/fromto">
            FromTo
          </Link>
        </li>
        <li>
          <Link className="app__links" to="/about">
            About Us
          </Link>
        </li>
      </ul>

      <div className="app__responsive-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(!toggle);
          }}
        />

        {toggle && (
          <>
            <motion.div
              whileInView={{ y: [500, 0] }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className=" app__menu-container"
            >
              <ul className="">
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/Login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/Register"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/aboutus"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
              <HiX
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
