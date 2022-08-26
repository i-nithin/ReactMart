import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'


const Cart = () => {
  
  const cart = useSelector((state) => state.cart.cart)

  return (
    <div>
        <div className='container' style={{width : "60%"}}>
    <h3 className='text-center py-3 my-3 '>Shopping Cart</h3>
    {cart.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
      />
    ))}
  </div>
    </div>
  )
}

export default Cart