import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '.././App.css'
import './styles.css'
import { Dispatch, useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import { useSelector } from 'react-redux'
import { fetchProducts } from '../store/ProductSlice'

const Products = () => {
  const dispatch = useDispatch();
//   const [ products ,setProducts ] = useState([])

  const { data:products, status } = useSelector((state)=>state.product)

  useEffect(()=>{
    
    dispatch(fetchProducts())
  
    // // const fetchProducts = async()=>{
    // //     const res = await axios.get('https://fakestoreapi.com/products')
    // //     console.log(res.data);
    // //     setProducts(res.data)
    // // }
    // fetchProducts()
  },[]) 

  const handleAdd =(e)=>{
     dispatch(add(e))
  }

  return (
    <div className="productsWrapper">
    {products.map((product) => (
        <div className="card" key={product.id}>
            <div className="cardImage">
                <img src={product.image} alt="" />
            </div>
            <div className="cardContent">
                <h4>{product.title}</h4>
                <h5>${product.price}</h5>
                <button onClick={()=>handleAdd(product)} className="btn">Add to Cart</button>
            </div>
        </div>
    ))}
</div>
  )
}

export default Products