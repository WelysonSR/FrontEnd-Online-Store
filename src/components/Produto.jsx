import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Produto extends React.Component {
  render() {
    const { produto } = this.props;

    return (
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
