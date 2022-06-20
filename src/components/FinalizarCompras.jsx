import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import InformacoesComprador from './InformacoesComprador';
import MetodoPagamento from './MetodoPagamento';
import ApiContext from '../context/ApiContext';
import './FinalizarCompras.css';

function FinalizarCompras() {
  const { shoppingCart } = useContext(ApiContext);
  const history = useHistory();
  return (
    <section className="pagamento">
      <div className="revisar-produtos">
        <h4>Revise seus Produtos</h4>
        <section className="item-finished">
          {
            shoppingCart.map((produto, i) => (
              <div key={ i } className="revisao-rupo">
                <img
                  src={ produto.thumbnail }
                  alt={ produto.title }
                  className="rvisao-img"
                />
                <p className="title">{produto.title}</p>
                <p className="price">{`R$${produto.price / 100}`}</p>
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
          onClick={ () => history.push('/compra-concluida') }
        />
      </section>
    </section>
  );
}

export default FinalizarCompras;
