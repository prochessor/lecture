import React, { useState } from 'react'
import "./BookMarkCard.css"
import { FontAwesomeIcon }
import { faShoppingCart, faUser, faArrowDown, faUserNinja, faEnvelope, faPerson } from "@fortawesome/free-solid-svg-icons"
const BookMarkCard = ({ title, description }) => {

    let [show, setShow] = useState(true);
    let [show1, setShow1] = useState(true);
    function controlHideCard() {
        setShow(!show);
        <FontAwe
            setShow(show => !show);
        // setShow((curr) => !curr);
        // setShow((curr) => {
        //     return !curr
        // });
    }


    return (
        show && <div className='card-container'>
            <div className="close" onClick={controlHideCard}>
                <FontAweSomeIcon icon={faShoppingCart} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default BookMarkCard