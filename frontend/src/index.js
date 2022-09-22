import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import {Footer} from './Component/Footer';
import Products from './Pages/Products';
import Product from './Pages/Product';
import { Create } from './Pages/Create';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>
);
