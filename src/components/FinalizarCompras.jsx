import React, { useContext } from 'react';
import InformacoesComprador from './InformacoesComprador';
import MetodoPagamento from './MetodoPagamento';
import ApiContext from '../context/ApiContext';
import './FinalizarCompras.css';

function FinalizarCompras() {
  const { shoppingCart } = useContext(ApiContext);
  return (
    <section className="pagamento">
      <div className="revisar-produtos">
        <h4>Revise seus Produtos</h4>
        <section>
          {
            shoppingCart.map((produto, i) => (
              <div key={ i } className="revisao-rupo">
                <img
                  src={ produto.thumbnail }
                  alt={ produto.title }
                  className="rvisao-img"
                />
                <p>{produto.title}</p>
                <p>{`R$${produto.price}`}</p>
              </div>
            ))
          }
        </section>
      </div>
      <hr />
      <section className="dados-pagamento">
        <div>
          <h5>Informaçoes do Comprador</h5>
          <InformacoesComprador />
        </div>
        <hr />
        <div>
          <h5>Método de pagamento</h5>
          <MetodoPagamento />
        </div>
        <hr />
        <input
          type="button"
          value="Comprar"
          className="btn btn-primary"
        />
      </section>
    </section>
  );
}

export default FinalizarCompras;
