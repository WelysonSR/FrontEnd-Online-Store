import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import { getProductsFromCategoryAndQuery, getItemsByCategory } from '../services/api';
import Produto from './Produto';
import Header from './Header';

class TelaPrincipal extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
      categoria: [],
    };
  }

  async componentDidMount() {
    const elementos = await getProductsFromCategoryAndQuery();
    const produtos = elementos.results;
    this.setState({
      produtos,
    });
  }

  pesqueisa = ({ target }) => {
    console.log(target.value);
  }

  pesqisarPorCategoria = async () => {
    const { location } = this.props;
    const id = location.pathname.split('/');
    const categoria = await getItemsByCategory(id[1]);
    console.log(categoria);
    this.setState({ categoria: categoria.results });
  }

  render() {
    const { produtos, categoria } = this.state;

    return (
      <>
        <Header />
        <Category />
        {
          (categoria.length <= 0) ? (
            produtos.map((produto, index) => (
              <Produto
                key={ index }
                produto={ produto }
              />
            ))
          )
            : categoria.map((produto, i) => (
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default TelaPrincipal;
