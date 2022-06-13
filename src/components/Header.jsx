/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import carrinho from '../img/carrinho.png';
import './Header.css';

function Header() {
  const { setQuery, carSize } = useContext(ApiContext);
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleClick = () => {
    setQuery(search);
    setSearch('');
  };

  return (
    <header className="header">
      <h1 className="h1-header">Fast Buy</h1>
      <form className="formHeader">
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Search"
            className="form-control input-header"
            onChange={ ({ target }) => setSearch(target.value) }
          />
          <input
            type="button"
            value="Search"
            className="btn btn-primary"
            onClick={ handleClick }
          />
        </div>
      </form>
      <img
        src={ carrinho }
        alt="carrinho"
        className="carrinho-header"
        onClick={ () => history.push('/carrinho') }
      />
      <h5 className="carSize">{carSize > 0 && carSize}</h5>
    </header>
  );
}

export default Header;
