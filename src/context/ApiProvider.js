import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';
import { getCategories } from '../services/api';

function ApiProvaider({ children }) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fachData = async () => {
      setData(await getCategories());
    };
    fachData();
  }, []);

  const ApiData = {
    data,
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
