import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToCart } from '../features/cartSlice'

const ShowProduct = ({ product }) => {

 const dispatch = useDispatch()

 const {id, title,image,category,rating, price,description} = product


  return (
    <div>
      <div className='col-md-6' key={id}>
        <img src={image} alt ={title} height="400px" width='400px'/>                ß
      </div>
      <div className='col-md-6'>
        <h4 className='text-uppercase text-black-50'>{category}</h4>
        <h1 className='display-5'>{title}</h1>
        <p className='lead fw-bolder'>Rating {rating && rating.rate} <i className='fa fa-star'></i> </p>
        <h3 className='display-6 fw-bold my-4'>${price}</h3>
        <p className='lead'>{description}</p>
        <button className='btn btn-outline-dark' onClick = {()=> dispatch(addToCart({id,title,image,price}))}>Add to Cart</button>
        <NavLink to='/cart' className='btn btn-outline-dark ms-2 px-3 py-2'>Go to Cart</NavLink>
      </div>
    </div>
  )
}

export default ShowProduct