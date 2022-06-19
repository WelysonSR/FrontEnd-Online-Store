import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import carrinho from '../img/carrinho.png';
import './Header.css';

function Header() {
  const { setQuery, carSize } = useContext(ApiContext);
  const [search, setSearch] = useState('');

  const handleClick = () => {
    setQuery(search);
    setSearch('');
  };

  return (
    <header className="header">
      <Link to="/" className="card-link">
        <h1 className="h1-header">Fast Buy</h1>
      </Link>
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
      <Link to="/carrinho">
        <img
          src={ carrinho }
          alt="carrinho"
          className="carrinho-header"
        />
        <h5 className="carSize">{carSize > 0 && carSize}</h5>
      </Link>
    </header>
  );
}

export default Header;
