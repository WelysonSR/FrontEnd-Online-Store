import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CarrinhoProduto.css';
import ApiContext from '../context/ApiContext';

function CarrinhoProduto({ product }) {
  const { shoppingCart, setShoppingCart, total, setTotal } = useContext(ApiContext);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setTotal(product.price);
  }, [product.price, setTotal]);

  const remuveProduct = (obj) => {
    const newShoppingCart = shoppingCart
      .filter((productItem) => productItem.id !== obj.id);
    setShoppingCart(newShoppingCart);
    setTotal(total - (product.price * amount));
  };

  const amountProduct = (action) => {
    if (action === 'add' && product.available_quantity !== amount) {
      setAmount(amount + 1);
      setTotal(total + product.price);
    } else if (action === 'remove' && amount > 1) {
      setAmount(amount - 1);
      setTotal(total - product.price);
    }
  };

  return (
    <div className="card card-width-product">
      <input
        type="button"
        value="X"
        className="btn btn-danger btn-x"
        onClick={ () => remuveProduct(product) }
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
      <p>{amount}</p>
      <input
        type="button"
        name="adicionar"
        value="+"
        className="btn btn-success btn-add"
        onClick={ () => amountProduct('add') }
      />
      <input
        type="button"
        name="diminuir"
        value="-"
        className="btn btn-danger btn-remove"
        onClick={ () => amountProduct('remove') }
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
    available_quantity: PropTypes.number,
  }).isRequired,
};

export default CarrinhoProduto;
