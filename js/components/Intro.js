import React from 'react'
import { Link } from 'react-scroll';
function Intro() {
    return (
        <div className=" header-left">
            <div className=" intro-wrapper">
                <h2>Robert Kotwicki,</h2>
                <p>a junior front end developer</p>
                <div className="btn" id='view my work'>
                    <Link smooth={true} to="portfolio">View my work</Link>
                </div>
            </div>
        </div>
    )
}

export default Intro
