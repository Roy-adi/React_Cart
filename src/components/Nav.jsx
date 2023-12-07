import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Nav = () => {

    const items =useSelector((state)=>state.cart)
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/' className="nav-item nav-link active" >
          Home 
        </Link>
        <Link to='/cart' className="nav-item nav-link" >
          Cart
        </Link>
        <a className="nav-item nav-link" >
          Cart Item : {items.length}
        </a>
       
      </div>
    </div>
  </nav>
  
    </div>
  )
}

export default Nav