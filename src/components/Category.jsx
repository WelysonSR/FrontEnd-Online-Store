import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../context/ApiContext';

function Category() {
  const { dataCategories } = useContext(ApiContext);

  return (
    <ul>
      {dataCategories.map((category) => (
        <Link
          to={ `/${category.id}` }
          key={ category.id }
        >
          <li>
            {category.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Category;
