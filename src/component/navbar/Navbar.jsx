import React from 'react'
import "./Navbar.css"
import car from "../../images/car.webp"
const Navbar = () => {
  return (
    <div className='main'>
        <div>
            <img className='logo' src={car} alt="logo" />
        </div>
        <div className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar