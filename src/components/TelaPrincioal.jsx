import React from 'react';
import Category from './Category';

class TelaPrincioal extends React.Component {
  render() {
    return (
      <>
        <Category />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

export default TelaPrincioal;
