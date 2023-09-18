import React from 'react'
import Car from './Car'
import cars from "./CarData"




const CarList = () => {
    let carData = cars.map((car) => {
        return <Car {...car} key={car.id} />
    })

    return (
        <div className='car-list-container'>
            {carData}
        </div>
    )
}

export default CarList

// 1. repeat
// 2. not scalable