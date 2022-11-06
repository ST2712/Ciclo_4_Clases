import './App.css';
import React from "react";
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './components/products/ProductDetails';
import { Dashboard } from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import Cart from './components/cart/Cart';

function App() {

  return (
    <Router>
    <div className="App">
      <Header/>
      <div className='container container-fluid'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/producto/:id" element={<ProductDetails/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/ProductList" element={<ProductsList/>}/>
          <Route path="/nuevoProducto" element={<NewProduct/>}/>
          <Route path="/carrito" element={<Cart/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
