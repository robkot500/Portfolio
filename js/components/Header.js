import React from 'react'
import { Element } from 'react-scroll';
import Intro from './Intro'
import Circle from './Circle';

function Header() {
    return (
        <Element name='/' className='header-container'>
            <Intro />
            <Circle />

        </Element>
    )
}

export default Header
