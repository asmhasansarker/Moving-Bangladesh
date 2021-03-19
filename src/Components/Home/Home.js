import React from 'react';
import Bike from '../../images/bike.png'
import Car from '../../images/car.png'
import Bus from '../../images/bus.png'
import Train from '../../images/train.png'
import RideCart from '../RideCart/RideCart';
import './Home.css'


const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }

    const riders = [
        {
            id:1,
            name: 'BIKE',
            image: Bike

        },
        {
            id:2,
            name: 'CAR',
            image: Car
        },
        {
            id:3,
            name: 'BUS',
            image: Bus
        },
        {
            id:4,
            name: 'TRAIN',
            image: Train
        }
    ]
    return (
        <div className="allRides">
            <div style={style}>

                {
                    riders.map(ride => <RideCart 
                        key={ride.id}
                        ride={ride}></RideCart>)
                }
            </div>
        </div>
    );
};

export default Home;