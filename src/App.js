import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import TelaPrincipal from './components/TelaPrincipal';
import CarrinhoCompras from './components/CarrinhoCompras';
import ProdutoDetalhe from './components/ProdutoDetalhe';
import FinalizarCompras from './components/FinalizarCompras';
import { quantProduto } from './func/carrinhoDeCompras';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 0,
    };
  }

  componentDidMount() {
    this.sizeRendle();
  }

  sizeRendle = () => {
    const size = quantProduto();
    this.setState({ size });
  }

  render() {
    const { size } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={
              (props) => (<TelaPrincipal
                { ...props }
                sizeRendle={ this.sizeRendle }
                size={ size }
              />)
            }
          />
          <Route
            exact
            path="/carrinho"
            render={
              (props) => (<CarrinhoCompras
                { ...props }
                sizeRendle={ this.sizeRendle }
                size={ size }
              />)
            }
          />
          <Route exact path="/finalizar-compras" component={ FinalizarCompras } />
          <Route exact path="/carrinho/:produto" component={ CarrinhoCompras } />
          <Route
            exact
            path="/produto-detalhe/:id"
            render={
              (props) => (<ProdutoDetalhe
                { ...props }
                sizeRendle={ this.sizeRendle }
                size={ size }
              />)
            }
          />
          <Route exact path="/:id" component={ TelaPrincipal } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
