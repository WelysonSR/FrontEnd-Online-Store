import React from 'react';
import Category from './components/Category';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import TelaPrincioal from './components/TelaPrincioal';

function App() {
  return (
      <Category />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ TelaPrincioal }
          />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
