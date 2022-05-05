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
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ TelaPrincipal } />
        <Route exact path="/carrinho" component={ CarrinhoCompras } />
        <Route exact path="/finalizar-compras" component={ FinalizarCompras } />
        <Route exact path="/carrinho/:produto" component={ CarrinhoCompras } />
        <Route exact path="/produto-detalhe/:id" component={ ProdutoDetalhe } />
        <Route exact path="/:id" component={ TelaPrincipal } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
