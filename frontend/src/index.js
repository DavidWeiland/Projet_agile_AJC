import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './Styles/index.css';
import Products from './Pages/Products';
import Product from './Pages/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      {/* <Route path="/element" element={<Button/>}/> */}
    </Routes>
  </Router>
  </React.StrictMode>
);
