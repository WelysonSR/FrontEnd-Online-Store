import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <>
      <Link
        to={ `/produto-detalhe/${product.id}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <p>{product.title}</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{product.price}</p>
          {
            product.shipping.free_shipping && (
              <p data-testid="free-shipping">Frete Grátis</p>
            )
          }
        </div>
      </Link>
      <input
        type="button"
        data-testid="product-add-to-cart"
        value="Adicionar ao carrinho"
        onClick={ () => { } }
      />
    </>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;
