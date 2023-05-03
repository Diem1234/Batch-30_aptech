import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import NoPage from './pages/NoPage';
import Layout from './layouts/Layout';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/CategoryPage" element={<CategoryPage />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
