import React from 'react';
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
          <li
            data-testid="category"
            key={ category.id }
          >
            {category.name}
          </li>))}
      </ul>
    );
  }
}

export default Category;
