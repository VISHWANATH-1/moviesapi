import React from 'react'
import "./Navbar.css"
import car from "../../images/car.webp"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='main'>
        <div>
            <img className='logo' src={car} alt="logo" />
        </div>
        <div className="navbar">
            <ul>
                <li><Link to="#">Home</Link></li>
                <li><Link to="/details">Detilst</Link></li>
                <li><Link to="#">Booking</Link></li>
                <li><Link to="#">Services</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar