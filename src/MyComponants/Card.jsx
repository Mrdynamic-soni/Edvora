import React from 'react';
import Map from './Map';

const Card = (props) => {
    return (
        <>
       
            <div className="d-flex card_body">
                <div className="d-inline-block sec_div" >
                    <Map/>
                </div>
                <div className="d-inline-block sec_div" style={{ width:"100%" }}>
                    <p className='ride_detail'> Ride Id : {props.id}</p>
                    <p className='ride_detail'> Origin Station : {props.station}</p>
                    <p className='ride_detail'> station_path : {props.station_path}</p>
                    <p className='ride_detail'> Date : {props.date}</p>
                    <p className='ride_detail'> Distance : {props.distace}</p>
                    <div className='btn_div'>
                    <button className='btn_'> <p className='ride_btn'> {props.city}</p></button>
                    <button className='btn_'> <p className='ride_btn'> {props.state}</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;

