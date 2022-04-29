import React from 'react';
import Header from './Header';
import { getCarinho, newCarinho } from '../func/carrinhoDeCompras';
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

  novaListaCarrinho = (lista) => {
    this.setState({ carrinho: lista },
      () => {
        const { carrinho } = this.state;
        newCarinho(carrinho);
      });
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
                  <CarrinhoProduto
                    key={ i }
                    produto={ produto }
                    novaListaCarrinho={ this.novaListaCarrinho }
                  />
                ))
              )
          }
        </div>
      </>
    );
  }
}

export default CarrinhoCompras;
