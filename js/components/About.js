import React from 'react'
import { Element } from "react-scroll";
import Popup from "reactjs-popup";
import Modal from './Modal'

function About() {
    return (
        <Element name='about' className='about-container'>
            <div className='about-up'>
                <p className='about-welcome'>Nice to meet you</p>
                <div className='about-wrapper'>
                    <div className='about-frame'>
                        <div className='about-picture'></div>
                    </div>
                    <div className="about-text">I`m a hard working and dedicated junior front-end developer. I have completed Coders Lab course, JS Developer: React, but I`m still learning. Right now I want to focus on React and Redux. I enjoy making usuful websites using HTML, CSS,  JavaScript and React JS.
                        If you have any questions, do not hesitate to contact me.</div>
                </div>
                <div className='about-middle'>
                    <div className='about-column'>
                        <div className='about-icon'><img src="./../assets/education.png" alt="education" /></div>
                        <p className='about-title'>Education</p>

                        <p className='about-column-text'>I have completed Coders Lab course, JS Developer: React, but I`m still learning. Right now I want to focus on React and Redux. <Modal /> is the specification about course program.</p>

                    </div>
                    <div className='about-column'>
                        <div className='about-icon'><img src="./../assets/technologies.png" alt="technologies" /></div>
                        <p className='about-title'>Skills</p>
                        <p className='about-column-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia molestiae praesentium consectetur velit quia exercitationem atque fugiat perspiciatis. Eum amet iure animi corrupti et laborum officiis recusandae architecto distinctio? Doloremque?</p>

                    </div>
                    <div className='about-column'>
                        <div className='about-icon'><img src="./../assets/experience.png" alt="experience" /></div>
                        <p className='about-title'>Experience</p>
                        <p className='about-column-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia molestiae praesentium consectetur velit quia exercitationem atque fugiat perspiciatis. Eum amet iure animi corrupti et laborum officiis recusandae architecto distinctio? Doloremque?</p>
                    </div>
                </div>
            </div>
            <div className='about-down'>

            </div>
        </Element>
    )
}

export default About
