import React from 'react'
import { Element } from "react-scroll";

function Portfolio() {
    return (
        <Element name='portfolio' className='portfolio-container'>
            <div className="portfolio-item">
                <div className="portfolio-left">
                    <p className='portfolio-title'>To do app</p>
                    <p className='portfolio-technologies'>HTML, CSS, SASS, REACT, REDUX</p>
                    <p className='portfolio-text'>I am curently working on complex to do list</p>
                    <div className="btn-container">
                        <a href="https://robkot500.github.io/to_do/" target="_blank"><div className='btn-1'>Visit site</div></a>
                        <a href="https://github.com/robkot500/to_do/tree/master" target="_blank"><div className='btn-2'>View code</div></a>
                    </div>
                </div>
                <div className="portfolio-right"><a href="https://robkot500.github.io/to_do/" target="_blank"><img src="./../assets/to_do.png" alt="Mediator sądowy Iwona Kotwicka" /></a></div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-left">
                    <p className='portfolio-title'>Company website</p>
                    <p className='portfolio-technologies'>HTML, CSS, SASS, REACT</p>
                    <p className='portfolio-text'>I am curently working on </p>
                    <div className="btn-container">
                        <a href="https://robkot500.github.io/electric_site/" target="_blank"><div className='btn-1'>Visit site</div></a>
                        <a href="https://github.com/robkot500/electric_site" target="_blank"><div className='btn-2'>View code</div></a>
                    </div>
                </div>
                <div className="portfolio-right"><a href="https://robkot500.github.io/electric_site/" target="_blank"><img src="./../assets/electric_site.png" alt="Mediator sądowy Iwona Kotwicka" /></a></div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-left">
                    <p className='portfolio-title'>Portfolio</p>
                    <p className='portfolio-technologies'>HTML, CSS, SASS, REACT</p>
                    <p className='portfolio-text'>My portfolio website - still under constraction</p>
                    <div className="btn-container">
                        <a href="https://robkot500.github.io/Portfolio/build/" target="_blank"><div className='btn-1'>Visit site</div></a>
                        <a href="https://github.com/robkot500/Portfolio" target="_blank"><div className='btn-2'>View code</div></a>
                    </div>
                </div>
                <div className="portfolio-right"><a href="https://robkot500.github.io/Portfolio/build/" target="_blank"><img src="./../assets/3333.png" alt="Mediator sądowy Iwona Kotwicka" /></a></div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-left">
                    <p className='portfolio-title'>Weather forecast</p>
                    <p className='portfolio-technologies'>HTML, CSS, SASS, REACT, REST API, JSON</p>
                    <p className='portfolio-text'>A web application that allows user to view the weather forecast for 6 days using the Fetch API. Available for for any location by using geolocation or city name.</p>
                    <div className="btn-container">
                        <a href="https://robkot500.github.io/Weather/build/" target="_blank"><div className='btn-1'>Visit site</div></a>
                        <a href="https://github.com/robkot500/Weather" target="_blank"><div className='btn-2'>View code</div></a>
                    </div>
                </div>
                <div className="portfolio-right"><a href="https://robkot500.github.io/Weather/build/" target="_blank"><img src="./../assets/weather.png" alt="Prognoza pogody" /></a></div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-left">
                    <p className='portfolio-title'>Mediator sądowy</p>
                    <p className='portfolio-technologies'>HTML, CSS, SASS, REACT</p>
                    <p className='portfolio-text'>This is web page for the lokal court mediator.</p>
                    <div className="btn-container">
                        <a href="https://robkot500.github.io/Mediacje/build" target="_blank"><div className='btn-1'>Visit site</div></a>
                        <a href="https://github.com/robkot500/Mediacje" target="_blank"><div className='btn-2'>View code</div></a>
                    </div>
                </div>
                <div className="portfolio-right"><a href="https://robkot500.github.io/Mediacje/build" target="_blank"><img src="./../assets/mediator.png" alt="Mediator sądowy Iwona Kotwicka" /></a></div>
            </div>

        </Element >
    )
}

export default Portfolio