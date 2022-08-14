import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/fork.gif";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Solar from "../../img/solar.gif";

import { themeContext } from "../../Context";
// import {AnimatePresence, motion} from 'framer-motion'
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Sumit Pal</span>
          <span style={{ color: darkMode ? "white" : "" }}>
          I'm a Front End Developer specializing in building websites and web apps with a big interest in pure CSS illustrations and beautiful animations.
            <br />
           <span style={{color: '#FF5733', fontSize:"16px"}}>believe in producing Quality work.</span>
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="i-button button"
          >
            Hire Me
          </motion.button>
        </Link>

        <div className="i-icons">
          <a
            href="https://github.com/darksitecoder?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              transition={{ yoyo: Infinity }}
              animate={{ y: [0, -25, 0] }}
              src={Github}
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-pal-darksitecoder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              transition={{ yoyo: Infinity }}
              animate={{ y: [0, 20, 0] }}
              src={Linkedin}
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/codeobsessed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              transition={{ yoyo: Infinity }}
              animate={{ y: [0, -25, 0] }}
              src={Instagram}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="i-right">
        {/* <img src={Vector1} alt="" /> */}
        <img src={Solar} alt="" />
        <img src={Boy} alt="" style={{ width: "380px" }} />
        <motion.img
          animate={{ left: "-25%", top: "-30%" }}
          style={{ width: "300px" }}
          //  whileInView = {{left: "-24%"}}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          animate={{ top: "-20%", left: "64%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="crown"
          style={{ width: "230px" }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          animate={{ left: "7.8rem", top: "17rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          className="thumbup"
          style={{ width: "320px" }}
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* Blur div */}
        <div className="blur" style={{ background: "rgb(238, 210, 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
