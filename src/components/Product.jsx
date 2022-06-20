import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import './Product.css';

function Product({ product }) {
  const { addProduct } = useContext(ApiContext);

  return (
    <div className="card card-width">
      <Link
        to={ `/produto-detalhe/${product.id}` }
        className="card-link"
      >
        <img
          src={ product.thumbnail }
          alt={ product.title }
          className="card-img-top img-card"
        />
        <h6 className="card-title">{product.title}</h6>
        <p className="card-text card-price">
          {`R$ ${(product.price / 100).toFixed(2)}`}
        </p>
        {
          product.shipping.free_shipping && (
            <p className="card-text card-free">Frete Grátis</p>
          )
        }
      </Link>
      <input
        type="button"
        className="btn btn-primary btn-card"
        value="Adicionar ao carrinho"
        onClick={ () => addProduct(product) }
      />
    </div>
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
