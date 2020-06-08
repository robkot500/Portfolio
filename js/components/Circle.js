import React from 'react';


const Circle = ({ setPage }) => {

    const handleClick = () => {
        console.log('Kliknieto w link.');
        setPage(true);
    }

    return (
        <>
            <div className='header-right'>
                <div className='me'></div>
                <div className="sun sun1">
                    <div className="dot"><i className="fab fa-js-square"></i></div>
                </div>
                <div className="sun sun2">
                    <div className="dot"><i className="fab fa-html5"></i></div>

                </div>
                <div className="sun sun3">
                    <div className="dot"><i className="fab fa-css3-alt"></i></div>

                </div>
                <div className="sun sun4">
                    <div className="dot"><i className="fab fa-sass"></i></div>

                </div>
                <div className="sun sun5">
                    <div className="dot"><i className="fab fa-react"></i></div>

                </div>
                <div className="sun sun6">
                    <div className="dot"><i className="fab fa-git-alt"></i></div>

                </div>
                <div className="sun sun7">
                    <div className="dot"><i className="fab fa-github"></i></div>
                </div>
                <div className="sun sun8">
                    <div className="dot"><i className="fab fa-npm"></i></div>
                </div>
                <div className="sun sun9">
                    <div className="dot"><i className="fab fa-node"></i></div>
                </div>
                {/* <button onClick={handleClick}>BBBBB</button> */}

            </div>

        </>
    )
}
export default Circle