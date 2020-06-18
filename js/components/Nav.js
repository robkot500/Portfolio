import React, { useState } from 'react'
import { Link } from "react-scroll";

function Nav() {

    const [hamburger, setHamburger] = useState(false)
    const handleClick = () => {
        setHamburger(!hamburger)
    }

    return (
        <div className={hamburger ? ('nav nav-background') : ('nav')}>
            <div className={hamburger ? ('ham-wrapper click') : ('ham-wrapper')}>
                <div onClick={handleClick} className='ham'>
                    <div className="ham1"></div>
                    <div className="ham2"></div>
                    <div className="ham3"></div>
                </div>
                <ul className='desktop-wrapper'>
                    <li><Link onClick={handleClick} smooth={true} to="/">Home</Link></li>
                    <li><Link onClick={handleClick} smooth={true} to="portfolio">Portfolio</Link></li>
                    <li><Link onClick={handleClick} smooth={true} to="about">About</Link></li>
                    <li><Link onClick={handleClick} smooth={true} to="contact">Contact</Link></li>
                </ul>
            </div>
        </div >
    )
}

export default Nav
