import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import './CompraConcluida.css';

function CompraConcluida() {
  const { setShoppingCart } = useContext(ApiContext);
  const history = useHistory();

  useEffect(() => {
    const setTime = () => {
      const time = 3000;
      setTimeout(() => {
        setShoppingCart([]);
        history.push('/initial');
      }, time);
    };
    setTime();
  });

  return (
    <div className="concluido">
      <h1 className="concluido-h1">Compra Concluida</h1>
    </div>
  );
}

export default CompraConcluida;
