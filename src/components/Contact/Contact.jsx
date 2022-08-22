import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false);

  // message start

  // message ends

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_byvpxpf', 'template_h0hsoi4', form.current, 'x2lagmxc8FV1I8FUL')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <span style={{ color: darkMode ? "white" : "" }}>Although I'm currently looking for a new opportunity, my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!</span>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea name="message" className="user" placeholder="Message" required/>
         
       
          <motion.button  whileHover={{scale:1.1}}
        whileTap={{ scale:0.9 }} type="submit" value="Send" className="button" >Send</motion.button>
        <button type="submit" value="submit" className="button" style={{background: "transparent", border: "none", boxShadow:'none'}}></button>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
         <span style={{color: "var(--orange)", fontSize: "21px", textAlign: 'center'}}>{done && "Thanks for Contacting me ❤️"}</span>
      </div>
    </div>
  );
};

export default Contact;
