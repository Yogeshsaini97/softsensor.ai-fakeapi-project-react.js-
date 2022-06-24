import React from 'react'
import image from "../images/logosensor.png"
import "../CSSfolder/logocss.css"
import "../CSSfolder/Navbar.css"


const Navbar = () => {
  return (
    <div className="uppernav">
    
      <div className="innernav">
      <ul>
      <li><div>
      <img src={image}></img>
    </div></li>
        <li>Product Categories</li>
        <li>Nearby shops</li>
        <li>More About Us</li>
        </ul>


      </div>
    </div>
  )
}

export default Navbar
