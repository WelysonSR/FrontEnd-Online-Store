import React from 'react';
import Category from './Category';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Produto from './Produto';
import Header from './Header';

class TelaPrincipal extends React.Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
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

  render() {
    const { produtos } = this.state;

    return (
      <>
        <Header />
        <Category />
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

export default TelaPrincipal;
