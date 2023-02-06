import React from "react";
import Data from "./Data";

const Card = ({item}) => {
  return (
    <div className="card__container" key={item.id}>
      <img src={item.image}></img>
    </div>
  )
}

export default Card;