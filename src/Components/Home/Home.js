import React, { useEffect, useState } from 'react';
import Bike from '../../images/bike.png'
import Car from '../../images/car.png'
import Bus from '../../images/bus.png'
import Train from '../../images/train.png'
import RideCart from '../RideCart/RideCart';
import './Home.css'
import AllTransports from '../../fakeData/data.json'


const Home = () => {
  
    const [rides, setRides] = useState([])

    useEffect(()=>{
        setRides(AllTransports)
    },[])
    return (
        <div className="allRides">
            <div className="d-flex ml-4">

                {
                    rides.map(ride => <RideCart 
                        key={ride.id}
                        ride={ride}></RideCart>)
                }
            </div>
        </div>
    );
};

export default Home;