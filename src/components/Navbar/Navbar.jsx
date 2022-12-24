import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <h1 className='logo'>Circle</h1>
        </div>
        <div className='middle'>
            <ul className='navList'>
                <li className='navListItem'>HOME</li>
                <li className='navListItem'>SERVICES</li>
                <li className='navListItem'>ABOUT</li>
                <li className='navListItem'>CANTACT</li>
            </ul>
        </div>
        <div className='right'>
        <i className="navIcon fa-solid fa-magnifying-glass"></i>
        <button className='navBtn'>LOG IN</button>
        </div>
    </div>
  )
}

export default Navbar