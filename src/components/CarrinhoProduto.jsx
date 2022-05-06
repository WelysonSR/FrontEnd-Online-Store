import React from 'react';
import PropTypes from 'prop-types';
import { getCarinho } from '../func/carrinhoDeCompras';

class CarrinhoProduto extends React.Component {
  constructor() {
    super();
    this.state = {
      quntidade: 1,
      novoArrayProdutos: [],
    };
  }

  componentDidMount() {
    this.valorTotalProduti('adicionar');
  }

  valorTotalProduti = (adicionarDiminuir) => {
    const { produto, valorTotalProdutos } = this.props;
    valorTotalProdutos(produto.price, adicionarDiminuir);
  }

  quantidadeProduto = ({ target }) => {
    const { name } = target;
    const { quntidade } = this.state;
    const { produto } = this.props;
    if (name === 'adicionar' && produto.available_quantity !== quntidade) {
      this.setState((prevState) => ({ quntidade: prevState.quntidade + 1 }),
        () => this.valorTotalProduti('adicionar'));
    }
    if (name === 'diminuir' && quntidade > 1) {
      this.setState((prevState) => ({ quntidade: prevState.quntidade - 1 }),
        () => this.valorTotalProduti('diminuir'));
    }
  }

  removerItem = (produto) => {
    // const { sizeRendle } = this.props;
    const listaProduto = getCarinho();
    const novaLista = listaProduto.filter((item) => item.id !== produto.id);
    this.setState({ novoArrayProdutos: novaLista },
      () => {
        const { novaListaCarrinho } = this.props;
        const { novoArrayProdutos } = this.state;
        novaListaCarrinho(novoArrayProdutos);
        this.valorTotalProduti('diminuir');
      });
    // sizeRendle();
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
        {
          produto.shipping.free_shipping && (
            <p data-testid="free-shipping">Frete Grátis</p>
          )
        }
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
  produto: PropTypes.shape().isRequired,
  valorTotalProdutos: PropTypes.func.isRequired,
  novaListaCarrinho: PropTypes.func.isRequired,
  available_quantity: PropTypes.number.isRequired,
  // sizeRendle: PropTypes.func.isRequired,
};

export default CarrinhoProduto;
