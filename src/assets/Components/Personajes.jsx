import React from 'react';

const Personajes = ({ imagen, nombre, claseColor, link }) => {
  return (
    <div className="col s12 m6 center-align">
      <a href={link}>
        <img src={imagen} alt={nombre} style={{ width: 300 }} />
      </a>
      <h5 className={claseColor}>{nombre}</h5>
    </div>
  );
};

export default Personajes;
