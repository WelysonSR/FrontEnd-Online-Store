import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProdutoDetalhe from './components/ProdutoDetalhe';
import CarrinhoCompras from './components/CarrinhoCompras';
import FinalizarCompras from './components/FinalizarCompras';
import './App.css';
import CompraConcluida from './components/CompraConcluida';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/compra-concluida" component={ CompraConcluida } />
        <Route exact path="/finalizar-compras" component={ FinalizarCompras } />
        <Route exact path="/carrinho" component={ CarrinhoCompras } />
        <Route exact path="/produto-detalhe/:id" component={ ProdutoDetalhe } />
        <Route exact path="/initial/:id" component={ Home } />
        <Route exact path="/initial" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
