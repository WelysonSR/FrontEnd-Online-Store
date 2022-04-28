import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((data) => this.setState({
      categories: data,
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((category) => (
          <Link
            to={ `/${category.id}` }
            key={ category.id }
          >
            <li
              data-testid="category"
            >
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    );
  }
}

export default Category;
