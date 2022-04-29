import React from 'react';
import PropTypes from 'prop-types';
import { getCarinho, newCarinho } from '../func/carrinhoDeCompras';

class CarrinhoProduto extends React.Component {
  constructor() {
    super();
    this.state = {
      quntidade: 1,
      novoArrayProdutos: [],
    };
  }

  quantidadeProduto = ({ target }) => {
    const { name } = target;
    const { quntidade } = this.state;
    if (name === 'adicionar') {
      this.setState((prevState) => ({ quntidade: prevState.quntidade + 1 }));
    }
    if (name === 'diminuir' && quntidade > 1) {
      this.setState((prevState) => ({ quntidade: prevState.quntidade - 1 }));
    }
  }

  removerItem = (produto) => {
    const listaProduto = getCarinho();
    const novaLista = listaProduto.filter((item) => item.id !== produto.id);
    this.setState({ novoArrayProdutos: novaLista },
      () => {
        const { novoArrayProdutos } = this.state;
        newCarinho(novoArrayProdutos);
      });
  }

  render() {
    const { produto } = this.props;
    const { quntidade } = this.state;
    return (
      <>
        <br />
        <input
          type="button"
          value="X"
          onClick={ () => this.removerItem(produto) }
        />
        <p data-testid="shopping-cart-product-name">{produto.title}</p>
        <img src={ produto.thumbnail } alt={ produto.title } />
        <p>{produto.price}</p>
        <p>Quantidade</p>
        <p data-testid="shopping-cart-product-quantity">{quntidade}</p>
        <input
          type="button"
          name="adicionar"
          value="+"
          onClick={ this.quantidadeProduto }
          data-testid="product-increase-quantity"
        />
        <input
          type="button"
          name="diminuir"
          value="-"
          onClick={ this.quantidadeProduto }
          data-testid="product-decrease-quantity"
        />
      </>
    );
  }
}

CarrinhoProduto.propTypes = {
  produto: PropTypes.shape(

  ).isRequired,
};

export default CarrinhoProduto;
