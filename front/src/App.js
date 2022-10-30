import './App.css';
import React from "react";
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './components/products/ProductDetails';
//import { useAuth0 } from '@auth0/auth0-react';
//import Headerlogout from './components/layout/Headerlogout';

/*
      {isAuthenticated ? (
        <>
        <Headerlogout></Headerlogout>
        </>
      ) : (
        <Header></Header>
      ) }
*/

function App() {

  //const { isAuthenticated } = useAuth0();

  return (
    <Router>
    <div className="App">
      <Header/>
      <div className='container container-fluid'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/producto/:id" element={<ProductDetails/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
