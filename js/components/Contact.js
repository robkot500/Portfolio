import React from 'react'
import { Element } from "react-scroll";

function Contact() {
    return (
        <Element name='contact' className='contact-container'>
            <p className='contact-me'>Contact me</p>
            <div className="phone">+48 506 163 190</div>
            <div className='contact-info' >Interested in working together? We should have a chat. I’ll buy the coffee. Also feel free to get In touch if you need a website or have something interesting to share.</div>
            <div className=' a-wrapper'>
                <a href="tel:+48506163190"><i className="fas fa-phone-square-alt"></i></a>
                <div className="email-wrapper"><a href="mailto: robert.kotwicki5@gmail.com"><i className="fas fa-envelope-open-text"></i></a><div className="email">robert.kotwicki5@gmail.com</div></div>
                <a href="https://www.linkedin.com/in/robert-kotwicki-8431a31a7/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/robkot500"><i className="fab fa-github-square"></i></a>
                <a href="https://api.whatsapp.com/send?phone=+48506163190" target='blank'><i className="fab fa-whatsapp-square"></i></a>
            </div>
        </Element>
    )
}

export default Contact
