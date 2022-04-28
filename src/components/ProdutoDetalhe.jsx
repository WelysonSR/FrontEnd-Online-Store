import React from 'react';
import PropTypes from 'prop-types';
import { productDetail } from '../services/api';
import Header from './Header';
import { pushCarinho } from '../func/carrinhoDeCompras';

class ProdutoDetalhe extends React.Component {
  constructor() {
    super();
    this.state = {
      detail: {},
    };
  }

  async componentDidMount() {
    this.detalheProduto();
  }

  detalheProduto = async () => {
    const { location } = this.props;
    const id = location.pathname.split('/produto-detalhe/');
    const detail = await productDetail(id[1]);
    this.setState({ detail });
  }

  addToCart = (produto) => {
    pushCarinho(produto);
  }

  render() {
    const { detail } = this.state;

    return (
      <div>
        <Header />
        <img src={ detail.thumbnail } alt={ detail.title } />
        <p data-testid="product-detail-name">{`${detail.title}  R$${detail.price}`}</p>
        <input
          type="button"
          data-testid="product-detail-add-to-cart"
          value="Adicionar ao carrinho"
          onClick={ () => this.addToCart(detail) }
        />
      </div>
    );
  }
}

ProdutoDetalhe.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProdutoDetalhe;
