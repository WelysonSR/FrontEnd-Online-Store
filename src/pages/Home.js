import React from 'react';
import Category from '../components/Category';
import Header from '../components/Header';
import Products from '../components/Products';
import './Home.css';

function Home() {
  return (
    <div className="bodyDiv">
      <Header />
      <Category />
      <Products />
    </div>
  );
}

export default Home;
