import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import CarrinhoProduto from './CarrinhoProduto';
import ApiContext from '../context/ApiContext';
import './CarrinhoCompras.css';

function CarrinhoCompras() {
  const { shoppingCart } = useContext(ApiContext);

  return (
    <>
      <Header />
      <div className="carrinho">
        {
          (shoppingCart.length <= 0)
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              shoppingCart.map((product, i) => (
                <CarrinhoProduto
                  key={ i }
                  product={ product }
                  // novaListaCarrinho={}
                  // valorTotalProdutos={  }
                />
              ))
            )
        }
      </div>
      <span>{`Sub Total: R$${2}`}</span>
      <br />
      <Link
        to={ {
          pathname: '/finalizar-compras',
          // state: { carrinho },
        } }
        className="btn btn-primary"
        data-testid="checkout-products"
      >
        Flinalizar Compra
      </Link>
    </>
  );
}

export default CarrinhoCompras;
