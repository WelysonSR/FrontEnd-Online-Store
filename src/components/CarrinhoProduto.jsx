import React from 'react';
import PropTypes from 'prop-types';

class CarrinhoProduto extends React.Component {
  constructor() {
    super();
    this.state = {
      quntidade: '1',
    };
  }

  render() {
    const { produto } = this.props;
    const { quntidade } = this.state;
    return (
      <>
        <p data-testid="shopping-cart-product-name">{produto.title}</p>
        <img src={ produto.thumbnail } alt={ produto.title } />
        <p>{produto.price}</p>
        <p data-testid="shopping-cart-product-quantity">{quntidade}</p>
      </>
    );
  }
}

CarrinhoProduto.propTypes = {
  produto: PropTypes.shape(

  ).isRequired,
};

export default CarrinhoProduto;
