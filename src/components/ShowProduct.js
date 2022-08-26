import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { addCart } from '../redux/action'

const ShowProduct = ({ product }) => {

  // const dispatch = useDispatch()
  // const addProduct = (product) => {
  //     dispatch(addCart(product))
  // }

  return (
    <div>
      <div className='col-md-6' key={product.id}>
        <img src={product.image} alt ={product.title} height="400px" width='400px'/>                
      </div>
      <div className='col-md-6'>
        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
        <h1 className='display-5'>{product.title}</h1>
        <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate} <i className='fa fa-star'></i> </p>
        <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
        <p className='lead'>{product.description}</p>
        <button className='btn btn-outline-dark' onClick>Add to Cart</button>
        <NavLink to='/cart' className='btn btn-outline-dark ms-2 px-3 py-2'>Go to Cart</NavLink>
      </div>
    </div>
  )
}

export default ShowProduct