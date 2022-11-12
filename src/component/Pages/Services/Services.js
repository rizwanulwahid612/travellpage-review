import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { TabTitle } from '../../Generalfunction/Generalfunction';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const {user}=useContext(AuthContext)

    TabTitle('Services')
    const[servicePlaces,SetServicePlaces]=useState([])
    console.log(servicePlaces)
    useEffect(()=>{
        fetch('https://server-three-ruby.vercel.app/alltravelpages')
        .then(res=>res.json())
        .then(data=>SetServicePlaces(data))
        .catch(err=>console.log(err))
    },[])

    return (
    <div>
        <div>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
            {
                servicePlaces.map(service=><ServiceDetails
                key={service._id}
                service={service}
                ></ServiceDetails>)
            }
        </div>
        </div>
    );
};

export default Services;