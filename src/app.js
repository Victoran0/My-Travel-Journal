import React from 'react';
import Travel from './travel';
import { data } from './data';
import Navbar from './navbar';

export default function App() {
    const travelData = data.map(items => {
        return (

            <Travel
            key={items.id}
            {...items}
            
            />
        )
    })
    return (
        <div>
            < Navbar />
            {travelData}
        </div>
    )
}