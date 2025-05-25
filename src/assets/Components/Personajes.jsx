import React, { useState } from 'react';

const Personajes = ({ imagen, nombre, claseColor, link }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(prev => prev + 50);
  };

  const decrementar = () => {
    setContador(prev => prev - 50);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div className="col s12 m6 center-align" style={{ marginBottom: '20px' }}>
      <a href={link}>
        <img src={imagen} alt={nombre} style={{ width: 300 }} />
      </a>
      <h5 className={claseColor}>{nombre}</h5>
      <div>
        <h6>Contador: {contador}</h6>
        <button className="btn green" onClick={incrementar} style={{ marginRight: '10px' }}>Sumar +50</button>
        <button className="btn red" onClick={decrementar} style={{ marginRight: '10px' }}>Restar -50</button>
        <button className="btn grey" onClick={reiniciar}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Personajes;
