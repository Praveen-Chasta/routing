import React from 'react'
import Home from './Home'
import Product from './Product'
import Contact from './Contact'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
         <Link to = "/home" element = {<Home/>}>Home</Link>
        <Link to = "/Product" element = {<Product/>}>Product</Link>
        <Link to = "/Contact" element = {<Contact/>}>Contact</Link>
    </>
  )
}

export default Navbar