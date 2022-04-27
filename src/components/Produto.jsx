import React from 'react';
import PropTypes from 'prop-types';

class Produto extends React.Component {
  render() {
    const { produto } = this.props;

    return (
      <div data-testid="product">
        <p>{produto.title}</p>
        <img src={ produto.thumbnail } alt={ produto.title } />
        <p>{produto.price}</p>
      </div>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Produto;
