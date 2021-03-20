import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import './MyRideDetails.css'

const MyRideDetails = (props) => {
    const {name, image} = props;

    return (
        <div className="my-ride-design border border-1 pb-3 bg-secondary text-white rounded">
            <div className="d-flex justify-content-around">
                <div className="d-flex ">
                    <img className="mr-2 pr-2" src={image} alt="" />
                    <h6 className="mt-3">{name}</h6>
                    <span className="mt-2 pt-1 ml-2"><FontAwesomeIcon icon={faUserFriends} /> 4</span>
                </div>
                <h6 className="mt-3 pb-1">$67</h6>
            </div>
        </div>
    );
};

export default MyRideDetails;