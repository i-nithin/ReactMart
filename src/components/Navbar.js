import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

   const cart = useSelector(state => state.cart.cart)

   const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
      <div className="container">
        <Link to='/' className="navbar-brand fw-bold fs-4">ReactMart</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' className="nav-link active" aria-current="page">
                Home
              </NavLink >
            </li>
            <li className="nav-item">
              <NavLink to='/products' className="nav-link" >
                Products
              </NavLink>
            </li>            
            <li className="nav-item">
              <NavLink to='/about' className="nav-link" href="#">
                About
              </NavLink>
            </li>            
          </ul>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">Login <i className="fa fa-sign-in me-1"></i></NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">Register <i className="fa fa-user-plus me-2"></i></NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">Cart({getTotalQuantity() || 0}) <i className="fa fa-shopping-cart me-1"></i></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
