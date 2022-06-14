import React from 'react';
import Recibo from '../img/recibo.png';
import Cartao from '../img/cartao-de-credito.png';

function MetodoPagamento() {
  return (
    <form>
      <div>
        <h6>Boleto</h6>
        <label htmlFor="boleto">
          <input
            type="radio"
            id="boleto"
            name="forma-pagamento"
          />
          <img
            src={ Recibo }
            alt="Boleto"
          />
        </label>
      </div>
      <div>
        <h6>Cartão de Crédito</h6>
        <label htmlFor="visa">
          Visa
          <img
            src={ Cartao }
            alt="Visa"
          />
          <input
            type="radio"
            id="visa"
            name="forma-pagamento"
          />
        </label>
        <label htmlFor="master-card">
          MasterCard
          <img
            src={ Cartao }
            alt="Visa"
          />
          <input
            type="radio"
            id="master-card"
            name="forma-pagamento"
          />
        </label>
        <label htmlFor="elo">
          Elo
          <img
            src={ Cartao }
            alt="Visa"
          />
          <input
            type="radio"
            id="elo"
            name="forma-pagamento"
          />
        </label>
      </div>
    </form>
  );
}

export default MetodoPagamento;
