import React from 'react'
import { Element } from "react-scroll";

function About() {
    return (
        <Element name='about' className='about-container'>
            <div className='about-up'>
                <p className='about-welcome'>Hi, I'm Robert. Nice to meet you</p>
                <div className='about-wrapper'>
                    <div className='about-picture'></div>
                    <div className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio exercitationem id voluptatem eos. Magni, aspernatur dignissimos totam sit reprehenderit alias voluptatem illum tempora maiores, libero deserunt autem repellendus rem.</div>
                </div>
            </div>
            <div className='about-down'>
                <div className='about-middle'>
                    <div className='about-column'></div>
                    <div className='about-column'></div>
                    <div className='about-column'></div>
                </div>
            </div>
        </Element>
    )
}

export default About
