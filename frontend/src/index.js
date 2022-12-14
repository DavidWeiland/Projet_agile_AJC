import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import {Footer} from './Component/Footer';
import Products from './Pages/Products';
import Product from './Pages/Product';
import { Create } from './Pages/Create';
import { ModifyOrDelete } from './Pages/ModifyOrDelete';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/createNewItem" element={<Create/>}/>
      <Route path="/editItem/:id" element={<ModifyOrDelete/>}/>
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>
);
