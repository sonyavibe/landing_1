import React from "react";
import { useState, useRef, useEffect } from "react";
import './scroll.css';
import Card from "./Card";
import Data from "./Data";

const Scroll = () => {

  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollLeft(containerRef.current.scrollLeft + 1);
    };
    containerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="gallery">
      <h1 className="gallery__h1">LOREM IPSUM DOLOR SIT AMET</h1>
      <div className="scroll__container" ref={containerRef}>
        {Data.map((item) => {
          return (
            item ?
            <Card item={item} key={item.id} />
            : <div className=""></div>
          )
        })}
      </div>
    </div>
  )
}

export default Scroll;