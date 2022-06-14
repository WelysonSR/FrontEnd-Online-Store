import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import './Category.css';

function Category() {
  const { dataCategories } = useContext(ApiContext);

  return (
    <ul className="nav flex-column">
      {dataCategories.map((category) => (
        <Link
          to={ `/initial/${category.id}` }
          key={ category.id }
          className="nav-link"
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
