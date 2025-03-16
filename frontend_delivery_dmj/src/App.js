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
import ProductsList from './pages_admin/a_productsList';
import Products_List from './pages_customer/products_list';
import R from './pages_customer/r';
import Reviews from './pages_customer/reviews';
import Delivery_cost from './pages_admin/delivery_costs';
import Chat from './pages_admin/chat';
import Chat_exp from './pages_admin/chat_experimental';
import UserLocationForm from './pages_customer/purchase';
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

            <Route path="/productos" element={<ProductsList />} />

            <Route path="/list" element={<Products_List />} />


            <Route path="/r" element={<R />} />
            <Route path="/reviews" element={<Reviews />} />

            <Route path="/delivery_cost" element={<Delivery_cost />} />
            <Route path="/chat" element={<Chat />} />

            <Route path="/experimento" element={<Chat_exp />} />

            <Route path="/compra" element={<UserLocationForm />} />

            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
