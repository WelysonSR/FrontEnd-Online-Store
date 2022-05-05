import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { getCarinho, newCarinho } from '../func/carrinhoDeCompras';
import CarrinhoProduto from './CarrinhoProduto';

class CarrinhoCompras extends React.Component {
  constructor() {
    super();
    this.state = {
      carrinho: [],
      valorTotoaProdutos: 0,
    };
  }

  componentDidMount() {
    const carrinho = getCarinho();
    this.setState({ carrinho });
  }

  novaListaCarrinho = (lista) => {
    this.setState({ carrinho: lista },
      () => {
        const { carrinho } = this.state;
        newCarinho(carrinho);
      });
  }

  valorTotalProdutos = (valor, adicionarDiminuir) => {
    if (adicionarDiminuir === 'adicionar') {
      this.setState((prevState) => ({
        valorTotoaProdutos: prevState.valorTotoaProdutos + valor,
      }));
    }
    if (adicionarDiminuir === 'diminuir') {
      this.setState((prevState) => ({
        valorTotoaProdutos: prevState.valorTotoaProdutos - valor,
      }));
    }
  }

  finalizarCompra = () => {
    const { history } = this.props;
    history.push('/finalizar-compras');
  }

  render() {
    const { carrinho, valorTotoaProdutos } = this.state;
    return (
      <>
        <Header />
        <div>
          {
            (carrinho.length <= 0)
              ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
              : (
                carrinho.map((produto, i) => (
                  <CarrinhoProduto
                    key={ i }
                    produto={ produto }
                    novaListaCarrinho={ this.novaListaCarrinho }
                    valorTotalProdutos={ this.valorTotalProdutos }
                  />
                ))
              )
          }
          <br />
          <span>{`Sub Total: R${valorTotoaProdutos.toFixed(2)}`}</span>
          <br />
          <input
            type="button"
            value="Flinalizar Compra"
            onClick={ this.finalizarCompra }
            data-testid="checkout-products"
          />
        </div>
      </>
    );
  }
}

CarrinhoCompras.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  // match: PropTypes.shape({
  //   params: PropTypes.shape().isRequired,
  // }).isRequired,
};

export default CarrinhoCompras;
