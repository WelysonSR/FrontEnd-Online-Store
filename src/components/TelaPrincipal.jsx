import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Category from './Category';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Produto from './Produto';

class TelaPrincipal extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
    };
    this.onClickButton = this.onClickButton.bind(this);
  }

  async componentDidMount() {
    const elementos = await getProductsFromCategoryAndQuery();
    const produtos = elementos.results;
    this.setState({
      produtos,
    });
  }

  onClickButton() {
    const { history } = this.props;
    history.push('/carrinho');
  }

  pesqueisa = ({ target }) => {
    console.log(target.value);
  }

  render() {
    const { produtos } = this.state;

    return (
      <>
        <Category />
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
            <img src="../imagens/carrinho.png" alt="carrinho" width="50px" />
          </Link>

          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {
          produtos.map((produto, i) => (
            <Produto
              key={ i }
              produto={ produto }
            />
          ))
        }
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
