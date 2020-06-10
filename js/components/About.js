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
                <div className='about-middle'>
                    <div className='about-column'>
                        <div className='about-icon'><img src="./../assets/education.png" alt="education" /></div>
                        <p className='about-title'>Education</p>
                        <p className='about-column-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia molestiae praesentium consectetur velit quia exercitationem atque fugiat perspiciatis. Eum amet iure animi corrupti et laborum officiis recusandae architecto distinctio? Doloremque?</p>
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
