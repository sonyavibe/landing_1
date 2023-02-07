import React from "react";
import Data from "./Data";
import './card.css';

const Card = ({item}) => {
  return (
    <div className="card__container" key={item.id}>
      <div className="card__item" style={{backgroundImage: `url(${require(`./../../assets/${item.image}`)})`}}></div>
    </div>
  )
}

export default Card;