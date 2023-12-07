import React from 'react'
import { useSelector } from 'react-redux'
import './cart.css'
import { remove } from '../store/cartSlice'
import { useDispatch } from 'react-redux'

const Cart = () => {

const products = useSelector((state)=>state.cart)
const dispatch = useDispatch()
const handleRemove =(productId)=>{
  dispatch((remove(productId)))
}

const totalPrice = products.reduce((total, product) => total + product.price, 0);



  return (
    <div>
    <h3>Cart</h3>
    <div className="cartWrapper">
        {products.map((product) => (
            <div key={product.id} className="cartCard">
                <img src={product.image} alt="" />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button
                    className="btn"
                    onClick={()=>handleRemove(product.id)}
                >
                    Remove
                </button>
            </div>
        ))}
    </div>
    <div className="checkoutBox">
    <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
    <button className="btn">Buy Now</button>
</div>
</div>
  )
}

export default Cart