// src/components/CartItem.js
import { incrementQuantity, decrementQuantity, removeItem} from '../features/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="container py-3 my-5 border border-primary d-flex flex-row justify-content-around">
      <img height="200px" width='200px' src={image} alt='item'/>
      <div className="d-flex flex-column">
        <p className="display-5">{title}</p>
        <p className="display-6">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='d-flex flex-row '>
          <button className='btn btn-outline-dark'  onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p className='lead mx-2 align-center'>{quantity}</p>
          <button className='btn btn-outline-dark ' onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='py-2 mt-3 btn btn-danger ' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem