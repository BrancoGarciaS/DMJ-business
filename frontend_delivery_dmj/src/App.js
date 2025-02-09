import './App.css';

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Home from './pages/home';
import Categories from './pages_admin/categories';
import Locations from './pages_admin/locations';
import Products from './pages_admin/products';
import Experimento from './pages_admin/experimento';
import Products2 from './pages_admin/products2';
import Cart from './pages_admin/cart';
// instalar: npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products2" element={<Products2 />} />

            <Route path="/exp" element={<Experimento />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
