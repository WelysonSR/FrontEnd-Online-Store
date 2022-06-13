import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';
import { getCategories, getItemsByCategory, getItemsByQuery } from '../services/api';

function ApiProvaider({ children }) {
  const [dataCategories, setDataCategories] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fachDataCategories = async () => {
      setDataCategories(await getCategories());
    };
    fachDataCategories();
  }, []);

  useEffect(() => {
    const fachProductsByQuery = async () => {
      const { results } = await getItemsByQuery(query);
      setDataProducts(results);
    };
    fachProductsByQuery();
  }, [query]);

  useEffect(() => {
    const fachProductsByCategory = async () => {
      const { results } = await getItemsByCategory(categoryId);
      setDataProducts(results);
    };
    fachProductsByCategory();
  }, [categoryId]);

  const ApiData = {
    dataCategories,
    dataProducts,
    setCategoryId,
    setQuery,
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
