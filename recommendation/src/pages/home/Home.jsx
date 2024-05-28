import React from "react";

import "./home.scss";
import { motion } from "framer-motion";

import Slider from "../../components/slider/Slider";
import { FaDisplay } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";
import { FaMobileAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { images } from "../../constants/assets";

const Home = () => {
  return (
    <div className="home">
      <Slider />

      <div className="introduction">
        <div className="title">
          <h1>Introduction</h1>
        </div>
        <div className="introduction_subcontainer">
          <motion.div
            whileInView={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="left"
          >
            <h2>What is Location based Services?</h2>
            <p>
              A location-based service (LBS) is a software service for mobile
              device applications that requires knowledge about where the mobile
              device is geographically located. The application collects
              geodata, which is data gathered in real time using one or more
              location tracking technologies. Location-based services integrate
              data from various resources, including Global Positioning System
              (GPS) satellites, cellular tower pings and short-range positioning
              beacons, to provide services based on the user's geographical
              location. Although location-based technologies have been
              commercially available for almost two decades, the applications
              and services that use geodata have recently become mainstream,
              thanks to the widespread use of Android and Apple smartphones and
              tablets.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ x: [-50, 0], opacity: [0, 1] }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="right"
          >
            <img src={images.bannerImage} alt="bannerImage" />
          </motion.div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a4dfa4"
              fillOpacity="1"
              d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,234.7C672,235,768,213,864,213.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="features">
        <h1>Features</h1>
        <div className="features_subcontainer">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="features-chidls"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TiTickOutline />
            </div>
            <p className="heading">Accurate</p>
            <p className="features_subheadings">
              Our system provide best accurate results based on the user input
            </p>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="features-chidls"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaDisplay />
            </div>

            <p className="heading">
              <b>Friendly Ui</b>{" "}
            </p>
            <p className="features_subheadings">
              Our system has best Ui where every user can use without any
              struggle
            </p>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="features-chidls"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaMobileAlt />
            </div>
            <p className="heading">Responsive</p>
            <p className="features_subheadings">
              Our system can be used in every mobiles ,laptops,desktops
            </p>
          </motion.div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
            <path
              fill=" #908afa"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,224C672,192,768,128,864,133.3C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="services">
        <div className="title">
          {" "}
          <h1>Services</h1>
        </div>
        <div className="services_subcontainer">
          <motion.div
            whileInView={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="services_childs"
          >
            <FaMapMarkerAlt />

            <h1>maps</h1>
            <p>We provide integrated maps</p>
          </motion.div>
          <motion.div
            whileInView={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="services_childs"
          >
            <FaMapMarkedAlt />

            <h1>Location Based Service</h1>
            <p>We provide services based on particular location</p>
          </motion.div>
          <motion.div
            whileInView={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="services_childs"
          >
            <FaDatabase />

            <h1>location data</h1>
            <p>We provide location data based on user preferencies</p>
          </motion.div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fab672"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,245.3C672,267,768,277,864,250.7C960,224,1056,160,1152,122.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="membership">
        <div className="title">
          <h1>Buy our membership</h1>
        </div>
        <div className="membership_subcontainer">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="membership_childs"
          >
            <div className="heading">
              <FaRocket />
              Starter
            </div>
            <div className="amount">
              <h1>&#8377;50/month</h1>
            </div>
            <button>
              {" "}
              <a
                href="https://buy.stripe.com/test_6oE9CD8gVahp9gs4gh"
                className="subscribe btn"
                target="_blank"
              >
                Subscribe
              </a>
            </button>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="membership_childs"
          >
            <div className="heading">
              <FaDollarSign /> Basic
            </div>
            <div className="amount">
              <h1>&#8377;100/month</h1>
            </div>
            <button>
              {" "}
              <a
                href="https://buy.stripe.com/test_6oE9CD8gVahp9gs4gh"
                className="subscribe btn"
                target="_blank"
              >
                Subscribe
              </a>
            </button>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="membership_childs"
          >
            <div className="heading">
              <MdWorkspacePremium /> Premium
            </div>
            <div className="amount">
              <h1>&#8377;150/month</h1>
            </div>
            <button>
              {" "}
              <a
                href="https://buy.stripe.com/test_6oE9CD8gVahp9gs4gh"
                className="subscribe btn"
                target="_blank"
              >
                Subscribe
              </a>
            </button>
          </motion.div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#585858"
              fillOpacity="1"
              d="M0,192L48,213.3C96,235,192,277,288,288C384,299,480,277,576,245.3C672,213,768,171,864,181.3C960,192,1056,256,1152,240C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
