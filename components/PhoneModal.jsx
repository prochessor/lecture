import React, { useCallback, useEffect, useState } from 'react'

const PhoneModal = ({ test }) => {
    let [phone, setPhone] = useState("01238129317243")
    console.log("rendered");
    useEffect(() => {
        if (test) {
            setPhone("03448843993");
        }

    }, [test])

    return (

        <div className='phone-container'> {phone}</div>
    )
}

export default PhoneModal