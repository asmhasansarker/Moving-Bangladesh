import React, {  useState } from 'react';
import { useParams } from 'react-router';
import AllTransports from '../../fakeData/data.json'
import './Destination.css'
import MyRideDetails from '../MyRideDetails/MyRideDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import GoogleMap from '../GoogleMap/GoogleMap';


const Destination = () => {
    const { rideId } = useParams();
    const [show, setshow] = useState(false)
    const [to, setTo] = useState('Mirpur')
    const [from, setFrom] = useState('Dhanmondi')

    const my = AllTransports.filter(p => p.id === Number(rideId))
    const { name, image } = my[0]


    const handleToChange = (event) =>{
        setTo(event.target.value)
        
    }
    const handleFromChange = (event) =>{
        setFrom(event.target.value)
    }






    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 destination-area">
                    {!show && <div className="border border-1 p-3 bg-secondary text-white rounded">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Pick From</label>
                            <select onChange={handleToChange} className="form-select form-select-lg mb-3 d-block p-2 w-100 rounded" aria-label=".form-select-lg example">

                                <option className="py-3" value="Mirpur">Mirpur 1</option>
                                <option value="Gulshan">Gulshan</option>
                                <option value="Badda">Badda</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Pick To</label>
                            <select onChange={handleFromChange} className="form-select form-select-lg mb-3 d-block p-2  w-100 rounded" aria-label=".form-select-lg example">

                                <option value="Danmondi">Danmondi</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Banani">Banani</option>
                            </select>
                        </div>
                        <button onClick={() => setshow(!show)} className="btn btn-warning w-100">Search </button>
                    </div>}

                    {show && <div>
                        <div className="w-100 bg-warning p-3 rounded">
                            <h3>{to}</h3>
                            <h5><FontAwesomeIcon icon={faLongArrowAltDown} /></h5>
                            <h3>{from}</h3>
                        </div>
                    <MyRideDetails name={name} image={image}></MyRideDetails>
                    <MyRideDetails name={name} image={image}></MyRideDetails>
                    <MyRideDetails name={name} image={image}></MyRideDetails></div>}


                   



                </div>
                <div className="col-md-8 col-sm-12 map-area">

                    
                    <div className="googleMap">
                        <GoogleMap></GoogleMap>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Destination;