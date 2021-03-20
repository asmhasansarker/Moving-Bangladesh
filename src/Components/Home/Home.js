import React, { useEffect, useState } from 'react';
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
            <div className="d-md-flex ml-4 custom-ride">

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