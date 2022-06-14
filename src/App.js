import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProdutoDetalhe from './components/ProdutoDetalhe';
import CarrinhoCompras from './components/CarrinhoCompras';
import FinalizarCompras from './components/FinalizarCompras';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/finalizar-compras" component={ FinalizarCompras } />
        <Route exact path="/carrinho" component={ CarrinhoCompras } />
        <Route exact path="/produto-detalhe/:id" component={ ProdutoDetalhe } />
        <Route exact path="/:id" component={ Home } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
