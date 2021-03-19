import React from 'react';
import { useParams } from 'react-router';

const Destination = () => {
    const {rideId} = useParams();
    return (
        <div>
            <h1>This is ride {rideId} destination</h1>
            <h3>Where you want to go?</h3>
        </div>
    );
};

export default Destination;