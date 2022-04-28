import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import TelaPrincipal from './components/TelaPrincipal';
import CarrinhoCompras from './components/CarrinhoCompras';
import ProdutoDetalhe from './components/ProdutoDetalhe';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ TelaPrincipal } />
        <Route exact path="/carrinho" component={ CarrinhoCompras } />
        <Route exact path="/:id" component={ TelaPrincipal } />
        <Route exact path="/produto-detalhe/:id" component={ ProdutoDetalhe } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
