import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import TelaPrincioal from './components/TelaPrincioal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ TelaPrincioal } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
