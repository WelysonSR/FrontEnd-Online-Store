/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';
import carrinho from '../img/carrinho.png';
import './Header.css';

function Header() {
  const { setQuery } = useContext(ApiContext);
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleClick = () => {
    setQuery(search);
    setSearch('');
  };

  return (
    <form className="formHeader">
      <input
        type="text"
        placeholder="Search"
        onChange={ ({ target }) => setSearch(target.value) }
      />
      <input
        type="button"
        value="Search"
        onClick={ handleClick }
      />
      <img
        src={ carrinho }
        alt="carrinho"
        width="30px"
        onClick={ () => history.push('/carrinho') }
      />
    </form>
  );
}

// Header.propTypes = {
// };

export default Header;
