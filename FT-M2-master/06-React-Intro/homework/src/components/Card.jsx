import React from 'react';
export default function Card({name, min, max, img, onClose}) {
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}>ALERT</button>
      <h4>{name}</h4>|
      <p>Min</p>
      <p>{min}</p>
      <p>Max</p>
      <p>{max}</p>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img"></img>
    </div>
  )
};