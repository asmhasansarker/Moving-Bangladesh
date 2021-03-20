import React from 'react';
import { Link } from 'react-router-dom';
import './RideCart.css'

const RideCart = (props) => {
    // console.log(props)
    
    const { name, image, id } = props.ride;
   
    return (
        <div className="mx-2 single-card">
            <Link to={`/destination/ride/${id}`}>
                <div className="card custom-design" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={image} alt="" />
                    <div className="card-body text-center">
                        <h5 className="card-title text-decoration-none">{name}</h5>

                        <button href="#" className="btn btn-primary">Take a ride</button>

                    </div>
                </div>
            </Link>
        </div>

    );
};

export default RideCart;