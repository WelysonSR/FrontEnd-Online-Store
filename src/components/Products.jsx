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
        dataProducts.map((product, i) => (
          <Product
            key={ i }
            product={ product }
          />
        ))
      }
    </section>
  );
}

// Products.propTypes = {
// };

export default Products;
