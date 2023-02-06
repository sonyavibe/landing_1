import React from "react";
import Data from "./Data";
import './card.css';

const Card = ({item}) => {
  return (
    <div className="card__container" key={item.id}>
      <div style={{backgroundColor: item.color}}></div>
    </div>
  )
}

export default Card;