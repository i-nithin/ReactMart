import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from './components/Login'
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="products" element ={<Products />} />
        <Route path="products/:id" element ={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login"  element ={<Login />}/>
        <Route path="/register" element = {<Register />} />
        <Route path="/about" element = {<About />} />
      </Routes>
    </div>
  );
};

export default App;
