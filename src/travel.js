import React from 'react';
import { GoLocation } from "react-icons/go";

export default function Travel(props) {
    return (
        <div className='content'>
            <div>
                <img src={process.env.PUBLIC_URL + `${props.imageUrl}`} className="content--image" alt='Travel Location' />
            </div>
            <div className='location-full-content'>
                <div className='location-details'>
                    <h4 className='location-icon'> <GoLocation /> </h4> 
                    <h4 className='location-country'>{props.location}</h4>
                    <a className='location-link' href={props.googleMaps}>View on Google Maps</a>
                </div>
                <h1 className='location-title'>{props.title}</h1>
                <h4 className='location-date'>{props.date.startDate} - {props.date.endDate}</h4>
                <h4 className='travel-description'>{props.description}</h4>
            </div>
            <hr />
        </div>
    )
}

// it can turn an array into a jsx | to keep our codes cleaner | We can easily add a new component from our component file and it would reflect on our webpage