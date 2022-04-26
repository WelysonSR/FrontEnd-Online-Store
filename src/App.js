import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import TelaPrincioal from './components/TelaPrincioal';

function App() {
  return (
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
