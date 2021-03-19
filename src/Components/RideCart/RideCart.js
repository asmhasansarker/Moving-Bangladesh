import React from 'react';
import { Link } from 'react-router-dom';
import './RideCart.css'

const RideCart = (props) => {
    console.log(props)
    const { name, image, id } = props.ride;
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={image} alt="" />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <Link to={`/destination/ride/${id}`}>
                    <button href="#" className="btn btn-primary">Take a ride</button>
                </Link>
            </div>
        </div>
    );
};

export default RideCart;