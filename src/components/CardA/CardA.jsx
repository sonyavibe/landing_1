import React from "react";
import './carda.css';

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

const CardA = ({ id }) => {
  const item = data.filter(item => item.id === id)[0];
  const image = item ? item.image : '';
  const color = item ? item.color : '';

  return(
    <div className="card__container-a">
      <h1 className="card__h1-a">UT ALIQUIP EX EA COMMODO CONSEQUAT</h1>
      <div className="card__content-a">
      <div className="card__image-a" style={{backgroundColor: color}}></div>
        <div className="card__text-a">
          <h2 className="card__h2-a">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p className="card__subtext">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className="card__subtext-a">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
    </div>
  )
}

export default CardA