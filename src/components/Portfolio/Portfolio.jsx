import React, { useContext } from 'react'
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import Noot from "../../img/Noot.png";
import BookMandir from "../../img/BookMandir.png";
import Advisory from "../../img/advisory.png";
import ApplianceRepairSite from "../../img/appliancerepairsite.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  


  return (
    <div className="portfolio">
        {/* Heading */}

        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>
        <div style={{width: '100%'}} className="slid">
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        breakpoints={{
          // when window width is >= 640px
          390: {
            width: 850,
            slidesPerView: 2,
          }}}
        >
          
                <SwiperSlide ><a href="https://noot-search.netlify.app/" target="_blank"
            rel="noopener noreferrer"><img src={Noot} alt="" /></a>
        
            </SwiperSlide>


                <SwiperSlide ><a href="https://magicrepairs.in/" target="_blank"
            rel="noopener noreferrer"><img src={ApplianceRepairSite} alt="" /></a></SwiperSlide>
   
              <SwiperSlide ><a href="https://bookmandir.vercel.app/" target="_blank"
            rel="noopener noreferrer"><img src={BookMandir} alt="" /></a></SwiperSlide>
              
              <SwiperSlide ><a href="https://advices-app.netlify.app/" target="_blank"
            rel="noopener noreferrer"><img src={Advisory} alt="" /></a></SwiperSlide>
              
                     
        </Swiper>
        </div>
        </div>
  )
}

export default Portfolio;
