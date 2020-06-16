import React from 'react'
import ReactDOM from "react-dom";
import './../scss/main.scss';
import Header from './components/Header';
import About from './components/About'
import Nav from './components/Nav'
import Porftolio from './components/Porftolio';
import Contact from './components/Contact';




const App = () => {

    return (
        <div className="container">
            <Nav />
            <Header />
            <Porftolio />
            <About />
            <Contact />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("app"));