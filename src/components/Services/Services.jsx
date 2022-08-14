import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Design from "../../img/design.gif";
import Development from "../../img/development.gif";
import Ux from "../../img/ux.gif";
import Misc from "../../img/misc.gif";
// import Database from "../../img/database.gif";
import Resume from "./Sumit's Resume.pdf";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 3,
    type: "spring",
    yoyo:2
  };
  return (
    <div className="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My awesome</span>
        <span>Services</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          I am working in different technologies such as development, programming as well as Digital marketing.
          <br /><br/> Frontend development is my primary goal.
        </span>
        <a href={Resume} download>
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{ scale:0.9 }}
        className="button s-button">Download CV</motion.button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          animate={{ left: "15rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
          <Card
            emoji={Design}
            heading={"Frontend"}
            detail={"HTML5, CSS3, Bootstrap, Tailwind, material Ui, JavaScript, ReactJs"}
          />
        </motion.div>

        <motion.div
          animate={{ left: "-5rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
          <Card
            emoji={Development}
            heading={"Programming"}
            detail={"Java, JavaScript, Python, C++"}
          />
        </motion.div>

        <motion.div
        
          animate={{ top: "19rem", left: "15rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>
          <Card
            emoji={Ux}
            heading={"Database"}
            detail={"MySql, MongoDB"}
          />
        </motion.div>


        <motion.div
        
        animate={{ left: "-5rem", top: "31rem" }}
          whileInView={{ left: "-4rem" }}
        transition={transition}>
        <Card
          emoji={Misc}
          detail={"Git, Github, Linux, WordPress, SEO"}
        />
      </motion.div>

        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  );
};

export default Services;
