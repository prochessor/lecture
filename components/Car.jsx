import React, { useState } from 'react'
import PhoneModal from './PhoneModal';


const Car = ({ title, price, date, city, img }) => {

    let [showPhone, setShowPhone] = useState(false);

    function controlShowPhone() {
        setShowPhone(!showPhone);// !true = false, !false = true
    }

    console.log("rendered");
    return (
        <div className='car-card'>
            <div className="section-1">
                <img src={img} alt="" />
            </div>
            <div className="section-2">
                <h2>{title} </h2>
                <p>{city}</p>
                <div className="details " style={{ display: "flex", justifyContent: "center", gap: "10px" }} >
                    <p className='det'>count <span className='number'>0</span> </p>
                    <p className='det'>2015</p>
                    <p className='det'>2015</p>
                    <p className='det'>2015</p>
                </div>
                <p>{date}</p>
            </div>
            <div className="section-3">
                <h2>{price}</h2>
                <button onClick={controlShowPhone}> Show phone No.</button>

            </div>
            {showPhone && <PhoneModal test={showPhone} />}
        </div>
    )
}

export default Car



//conditional rendering, short circuiting, ternary