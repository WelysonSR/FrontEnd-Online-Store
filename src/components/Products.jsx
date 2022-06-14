import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import Product from './Product';
import './Products.css';

function Products() {
  const { dataProducts, setCategoryId } = useContext(ApiContext);
  const location = useLocation();
  useEffect(() => {
    const categoryId = location.pathname.split('/')[1];
    setCategoryId(categoryId);
  }, [location, setCategoryId]);

  return (
    <section className="bodyProducts">
      {
        dataProducts.length > 0 ? (
          dataProducts.map((product, i) => (
            <Product
              key={ i }
              product={ product }
            />
          )))
          : (
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          )
      }
    </section>
  );
}

// Products.propTypes = {
// };

export default Products;
