import React, {useState, useEffect} from "react";

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
        <div className="scroll__container" id="container" style={{ animationDelay: `calc(${scroll} * -1s)` }}>
        {Data.map((item) => {
          return (
            item ?
            <Card item={item} key={item.id}/>
            : <div className=""></div>
          )
        })}
      </div>
    
    </div>
    </div>
  )
}

export default Scroll;