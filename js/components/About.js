import React from 'react'
import { Element } from "react-scroll";

function About() {
    return (
        <Element name='about' className='about-container'>
            <div className='about-up'>
                <p className='about-welcome'>Nice to meet you</p>
                <div className='about-wrapper'>
                    <div className='about-frame'>
                        <div className='about-picture'></div>
                    </div>
                    <div className="about-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque corrupti et accusamus id mollitia voluptatem nemo, non reiciendis quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio exercitationem id voluptatem eos. Magni, aspernatur dignissimos totam sit reprehenderit alias voluptatem illum tempora maiores, libero deserunt autem repellendus rem.</div>
                </div>
            </div>
            <div className='about-down'>
                <div className='about-middle'>
                    <div className='about-column'>
                        <div className='about-icon'><img src="/../assets/education.png" alt="education" /></div>
                        <p className='about-title'>Education</p>
                    </div>
                    <div className='about-column'>
                        <div className='about-icon'><img src="/../assets/technologies.png" alt="technologies" /></div>
                        <p className='about-title'>Skills</p>
                    </div>
                    <div className='about-column'>
                        <div className='about-icon'><img src="/../assets/experience.png" alt="experience" /></div>
                        <p className='about-title'>Experience</p>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default About
