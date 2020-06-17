import React, { useEffect } from 'react'
import { Link, Element } from "react-scroll";

function Nav() {
    useEffect(() => {
        const hamburger = document.querySelector('.ham-wrapper');
        const nav = document.querySelector('.nav')
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('click')
            nav.classList.toggle('nav-background')
        })
    })
    return (
        <div className='nav'>
            <div className="ham-wrapper">
                <div className='ham'>
                    <div className="ham1"></div>
                    <div className="ham2"></div>
                    <div className="ham3"></div>
                </div>
                <ul className='desktop-wrapper'>
                    <li><Link smooth={true} to="/">Home</Link></li>
                    <li><Link smooth={true} to="portfolio">Portfolio</Link></li>
                    <li><Link smooth={true} to="about">About</Link></li>
                    <li><Link smooth={true} to="contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
