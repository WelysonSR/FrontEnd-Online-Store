import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import TelaPrincipal from './components/TelaPrincipal';
import CarrinhoCompras from './components/CarrinhoCompras';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ TelaPrincipal } />
        <Route exact path="/carrinho" component={ CarrinhoCompras } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
