import React from 'react'
import { Element } from "react-scroll";
import Popup from "reactjs-popup";
import Modal from './Modal'

function About() {


    const handleClick = () => {
        const aboutDown = document.querySelector('.about-down');
        const aboutSkill = document.querySelectorAll('.about-skill-wrapper2');
        aboutDown.classList.toggle('about-down2');
        for (const item of aboutSkill) {
            item.classList.toggle('about-no-visible');
        }


    }

    return (
        <Element name='about' className='about-container'>
            <div className='about-up'>
                <p className='about-welcome'>Nice to meet you</p>
                <div className='about-wrapper'>
                    <div className='about-frame'>
                        <div className='about-picture'></div>
                    </div>
                    <div className="about-text">I`m a hard working and dedicated junior front-end developer.I enjoy making usuful websites using HTML, CSS,  JavaScript and React JS.
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

                        <div className='about-skill-wrapper'><i class="fab fa-html5"></i><div className='about-skill'>HTML 5</div></div>
                        <div className='about-skill-wrapper'><i class="fab fa-css3-alt"></i><div className='about-skill'>CSS 3</div></div>
                        <div className='about-skill-wrapper'><i class="fab fa-js-square"></i><div className='about-skill'>JavaScript</div></div>
                        <div className='about-skill-wrapper'><i class="fab fa-react"></i><div className='about-skill'>React JS</div></div>
                        <div className='about-skill-wrapper'><i class="fab fa-sass"></i><div className='about-skill'>Sass</div></div>
                        <div className='about-skill-wrapper2'><i class="fab fa-git-alt"></i><div className='about-skill'>Git</div></div>
                        <div className='about-skill-wrapper2'><i class="fab fa-github-square"></i><div className='about-skill'>Github</div></div>
                        <div className='about-skill-wrapper2'><i class="fab fa-npm"></i><div className='about-skill'>npm</div></div>
                        <div className='about-skill-wrapper2'><img src="./../assets/redux.png" alt="redux" /><div className='about-skill'>Redux</div></div>
                        <div className='about-skill-wrapper2'><img src="./../assets/psd.png" alt="redux" /><div className='about-skill'>Photoshop</div></div>
                        <div onClick={handleClick} class="arrow bounce"></div>
                        <p className='about-column-text'>Contact me if you have any questions about my skills level.</p>

                    </div>
                    <div className='about-column'>
                        <div className='about-icon'><img src="./../assets/experience.png" alt="experience" /></div>
                        <p className='about-title'>Experience</p>
                        <p className='about-column-text'>Although I have not got any comercial experience I`m coding and practising almost every day. I have experience in working in the Scrum metodology- a group project simulating the daily work of a programmer. Scrum Lab was a simulation of one developer sprint and had a strictly planned schedule.
                        It incuded among other things: communication and cooperation in a team, scrum and canban metodologies, trello and github tools, gitflow and code review.
</p>
                    </div>
                </div>
            </div>
            <div className='about-down'>

            </div>
        </Element>
    )
}

export default About
