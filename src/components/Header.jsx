import React from 'react';
import { Link } from 'react-router-dom';
import carrinho from '../imagens/carrinho.png';

class Header extends React.Component {
  render() {
    return (
      <p data-testid="home-initial-message">
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
        </Link>

        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }
}

export default Header;
