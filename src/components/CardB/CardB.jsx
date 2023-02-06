import React from "react";
import './cardb.css';

const data = [
  {
    id: 1,
    image: '../../assets/CardA_1.png',
    color: '#002aff',
  },
  {
    id: 2,
    image: '../../assets/CardA_2.png',
    color: '#6eff92',
  }
];

const CardB = ({ id }) => {
    const item = data.filter(item => item.id === id)[0];
    const image = item ? item.image : '';
    const color = item ? item.color : '';
  
  return (
    <div className="card__container-b">
      <div className="card__text-b">
        <h2 className="card__h2-b">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <p className="card__subtext-b">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="card__subtext-b">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="card__image-b" style={{backgroundColor: color}}></div>
    </div>
  )
}

export default CardB;