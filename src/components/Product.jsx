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
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{`R$ ${product.price}`}</p>
        {
          product.shipping.free_shipping && (
            <p className="card-text">Frete Grátis</p>
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
