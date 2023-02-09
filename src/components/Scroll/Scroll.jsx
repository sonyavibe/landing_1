import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import './scroll.css';
import Card from "./Card";
import Data from "./Data";


const Scroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
  }, []);
  

  return (
    <div className="scroll">
      <h1 className="gallery__h1">LOREM IPSUM DOLOR SIT AMET</h1>
      <div className="gallery" >  
    {window.innerWidth > 500 && (
        
        <div className="scroll__container" id="container" style={{ animationDelay: `calc(${scroll} * -1s)` }}>
        {Data.map((item) => {
          return (
            item ?
            <Card item={item} key={item.id}/>
            : <div className=""></div>
          )
        })}
      </div>
    )}
    {window.innerWidth <= 500 && (
      
      <Swiper className="scroll__container-swiper"
        loop={false}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1.5}
        isLocked={true}
        
        >
        {Data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card item={item} key={item.id}/>
            </SwiperSlide>
            
            
          )
        })}
      </Swiper>
    )}
    </div>
    </div>
    )
}

export default Scroll;