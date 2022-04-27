import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

class TelaPrincipal extends React.Component {
  constructor() {
    super();
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    const { history } = this.props;
    history.push('/carrinho');
  }

  render() {
    return (
      <>
        <Category />
        <p data-testid="home-initial-message">
          <input />
          <button
            data-testid="shopping-cart-button"
            type="button"
            onClick={ this.onClickButton }
          >
            Carrinho
          </button>

          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

TelaPrincipal.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default TelaPrincipal;
