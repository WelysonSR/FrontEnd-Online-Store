import React from 'react';
import Category from '../components/Category';
import Header from '../components/Header';
import Products from '../components/Products';

function Home() {
  return (
    <div>
      <Header />
      <Category />
      <Products />
    </div>
  );
}

export default Home;
