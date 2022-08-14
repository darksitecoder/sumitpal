import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sumitpal4689@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/codeobsessed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-pal-darksitecoder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkdin color="white" size="3rem" />
          </a>
          <a
            href="https://github.com/darksitecoder?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
