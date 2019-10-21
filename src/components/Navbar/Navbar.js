import React from 'react'
import logo from '../../logo.svg'
import './navbar.scss';

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="City-Tour"/>

            <ul className='navbar-links'>
                <li>
                    <a href="#" className='nav-link'>Home</a>
                </li>

                <li>
                    <a href="#" className='nav-link'>Tours</a>
                </li>

                <li>
                    <a href="#" className='nav-link'>About</a>
                </li>

            </ul>

        </div>
    )
}
