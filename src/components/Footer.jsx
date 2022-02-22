import React from 'react';
import { NavLink } from 'react-router-dom'

import facebook from '../assets/imgs/icon-facebook.svg'
import twitter from '../assets/imgs/icon-twitter.svg'
import pinterest from '../assets/imgs/icon-pinterest.svg'
import logo from '../assets/imgs/logo.svg'

export function Footer() {

    return (
        <footer className="full">
            <section className="content flex space-between">
                <div className="main-info flex space-between">
                    <div className='left-side flex column'>
                        <div className='img-container'>
                            <img src={logo} alt="" />
                        </div>
                        <ul className='clean-list flex space-between'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <p>987  Hillcrest Lane</p>
                        <p>Irvine, CA</p>
                        <p>California 92714</p>
                        <p>Call Us : 949-833-7432</p>
                    </div>
                </div>

                <div className="media-and-copyrights flex column">
                    <div className='media-logos flex'>
                        <img src={facebook} alt=""/>
                        <img src={pinterest} alt=""/>
                        <img src={twitter} alt=""/>
                    </div>
                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
            </section>
        </footer>
    )
}