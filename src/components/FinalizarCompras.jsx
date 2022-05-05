import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import InformacoesComprador from './InformacoesComprador';
import MetodoPagamento from './MetodoPagamento';

class FinalizarCompras extends React.Component {
  render() {
    const { location } = this.props;
    const { carrinho } = location.state;
    return (
      <>
        <Header />
        <section>
          <h5>Revise seus Produtos</h5>
          {
            carrinho.map((produto, i) => (
              <div key={ i }>
                <p>{produto.title}</p>
                <img src={ produto.thumbnail } alt={ produto.title } />
                <p>{produto.price}</p>
              </div>
            ))
          }
        </section>
        <hr />
        <section>
          <h5>Informaçoes do Comprador</h5>
          <InformacoesComprador />
        </section>
        <hr />
        <section>
          <h5>Método de pagamento</h5>
          <MetodoPagamento />
        </section>
        <hr />
        <input
          type="button"
          value="Comprar"
        />
      </>
    );
  }
}

FinalizarCompras.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      carrinho: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
};

export default FinalizarCompras;
