import React from 'react';
import PropTypes from 'prop-types';
import './CarrinhoProduto.css';

function CarrinhoProduto({ product }) {
  return (
    <div className="card card-width-product">
      <input
        type="button"
        value="X"
        className="btn btn-danger btn-x"
        onClick={ () => {} }
      />
      <img src={ product.thumbnail } alt={ product.title } className="img-card" />
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.price}</p>
      {
        product.shipping.free_shipping && (
          <p className="card-text">Frete Grátis</p>
        )
      }
      <p>Quantidade</p>
      <p>{2}</p>
      <input
        type="button"
        name="adicionar"
        value="+"
        className="btn btn-success btn-add"
        onClick={ () => {} }
      />
      <input
        type="button"
        name="diminuir"
        value="-"
        className="btn btn-danger btn-remove"
        onClick={ () => {} }
      />
    </div>
  );
}

CarrinhoProduto.propTypes = {
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

export default CarrinhoProduto;
