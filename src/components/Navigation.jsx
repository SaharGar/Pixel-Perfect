import React from 'react';
import { NavLink } from 'react-router-dom'

import logo from '../assets/imgs/logo.svg'



export function Navigation() {
    return (
        <nav className='full'>
            <div className='content flex align-center space-between '>
                <div className='left-side flex align-center'>
                    <div className='logo-container'>
                        <img src={logo} alt="" />
                    </div>
                    <ul className='clean-list flex'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                    </ul>
                </div>
                <div className='right-side'>
                    <button>Contact us</button>
                </div>
            </div>
        </nav>
    );
}
