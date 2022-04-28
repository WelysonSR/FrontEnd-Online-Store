import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { pushCarinho } from '../func/carrinhoDeCompras';

class Produto extends React.Component {
  addToCart = (produto) => {
    pushCarinho(produto);
  }

  render() {
    const { produto } = this.props;

    return (
      <>
        <Link
          to={ `/produto-detalhe/${produto.id}` }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <p>{produto.title}</p>
            <img src={ produto.thumbnail } alt={ produto.title } />
            <p>{produto.price}</p>
          </div>
        </Link>
        <input
          type="button"
          data-testid="product-add-to-cart"
          value="Adicionar ao carrinho"
          onClick={ () => this.addToCart(produto) }
        />
      </>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Produto;
