import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import carrinho from '../img/carrinho.png';

class Header extends React.Component {
  render() {
    const { size } = this.props;
    return (
      <>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.pesqueisa }
        />
        <button
          data-testid="query-button"
          type="button"
        >
          Pesquisar
        </button>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          <img src={ carrinho } alt="carrinho" width="30px" />
          <span data-testid="shopping-cart-size">{ size }</span>
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

Header.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Header;
