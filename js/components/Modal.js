import React from 'react'
import Popup from "reactjs-popup";

const Modal = () => (

    <Popup
        trigger={<span className='pointer'>Here</span>}
        modal
        closeOnDocumentClick
    >

        <div className=' course-spec'></div>


    </Popup>

);

export default Modal
