import React from 'react'
import { Element } from "react-scroll";

function Portfolio() {
    return (
        <Element name='portfolio' className='portfolio-container'>

            <div className="portfolio-item">
                <div className="portfolio-left">
                    <p className='portfolio-title'>Weather forecast</p>
                    <p className='portfolio-technologies'>HTML, CSS, SASS, REACT, REST API, JSON</p>
                    <p className='portfolio-text'>A web application that allows user to view the weather forecast for 6 days using the Fetch API. Available for for any location by using geolocation or city name.</p>
                    <div class="btn-container">
                        <div class='btn-1'>Visit site</div>
                        <div class='btn-2'>View code</div>
                    </div>


                </div>
                <div className="portfolio-right"><a href="https://robkot500.github.io/Weather/build/" target="_blank"><img src="./../assets/weather.png" alt="Prognoza pogody" /></a></div>
            </div>

            <div className="portfolio-item">
                <div className="portfolio-left">
                    <p className='portfolio-title'>Mediator sądowy</p>
                </div>
                <div className="portfolio-right"><a href="https://robkot500.github.io/Mediacje/build" target="_blank"><img src="./../assets/mediator.png" alt="Mediator sądowy Iwona Kotwicka" /></a></div>
            </div>
        </Element >
    )
}

export default Portfolio