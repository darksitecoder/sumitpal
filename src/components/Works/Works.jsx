import React, { useContext } from "react";
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import WordPress from "../../img/Wordpress.png";
import Facebook from "../../img/Facebook.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
         <div className="awesome">
        <span  style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
        <span>Brands & Clients</span>
        <span  style={{ color: darkMode ? "white" : "" }}>
        An experienced front-end developer passionate about working in a team. Comfortable working with modern technologies.
          <br /> Worked with many different people around the world 
          <br /> 
          <br />Check out my <a href="https://github.com/darksitecoder?tab=repositories" style={{color: 'green', textDecoration: 'none'}}>Github</a> repo for more information.
        </span>
        <Link to="contact" smooth={true} spy={true}>
        <motion.button
         whileHover={{scale:1.1}}
         whileTap={{ scale:0.9 }}
        className="button s-button">Hire Me</motion.button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right side */}

      <div className="w-right">
        <motion.div
          animate={{ rotate: 360 }}
          whileInView={{ rotate: 360 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 10, type: "spring", yoyo:Infinity }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={WordPress} alt="" style={{width:'120px', height:'120px'}} />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works;