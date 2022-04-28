import React from 'react';
import Header from './Header';
import { getCarinho } from '../func/carrinhoDeCompras';
import CarrinhoProduto from './CarrinhoProduto';

class CarrinhoCompras extends React.Component {
  constructor() {
    super();
    this.state = {
      carrinho: [],
    };
  }

  componentDidMount() {
    const carrinho = getCarinho();
    this.setState({ carrinho });
  }

  render() {
    const { carrinho } = this.state;

    return (
      <>
        <Header />
        <div>
          {
            (carrinho.length <= 0)
              ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
              : (
                carrinho.map((produto, i) => (
                  <CarrinhoProduto key={ i } produto={ produto } />
                ))
              )
          }
        </div>
      </>
    );
  }
}

export default CarrinhoCompras;
