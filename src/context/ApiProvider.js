import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';
import { getCategories, getItemsByCategory, getItemsByQuery } from '../services/api';

function ApiProvaider({ children }) {
  const [dataCategories, setDataCategories] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [query, setQuery] = useState();
  const [permissionQuery, setPermissionQuery] = useState(true);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const fachDataCategories = async () => {
      setDataCategories(await getCategories());
    };
    fachDataCategories();
    const getCar = () => {
      if (localStorage.getItem('Carrinho') === null) {
        localStorage.setItem('Carrinho', JSON.stringify([]));
      }
      setShoppingCart(JSON.parse(localStorage.getItem('Carrinho')));
    };
    getCar();
  }, []);

  useEffect(() => {
    const fachProductsByQuery = async () => {
      const { results } = await getItemsByQuery(query);
      setDataProducts(results);
    };
    fachProductsByQuery();
    setPermissionQuery(false);
  }, [query, permissionQuery]);

  useEffect(() => {
    const fachProductsByCategory = async () => {
      const { results } = await getItemsByCategory(categoryId);
      setDataProducts(results);
    };
    fachProductsByCategory();
  }, [categoryId]);

  useEffect(() => {
    const setCar = () => {
      if (localStorage.getItem('Carrinho') === null) {
        localStorage.setItem('Carrinho', JSON.stringify([]));
      }
      localStorage.setItem('Carrinho', JSON.stringify(shoppingCart));
    };
    setCar();
  }, [shoppingCart]);

  const ApiData = {
    dataCategories,
    dataProducts,
    setCategoryId,
    setQuery,
    shoppingCart,
    setShoppingCart,
  };

  return (
    <ApiContext.Provider value={ ApiData }>
      { children }
    </ApiContext.Provider>
  );
}

ApiProvaider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ApiProvaider;
