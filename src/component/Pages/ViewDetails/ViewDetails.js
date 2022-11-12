import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TabTitle } from '../../Generalfunction/Generalfunction';
import ReviewForm from './ReviewOptionform/ReviewForm';

const ViewDetails = () => {
    TabTitle('ViewDetails')
    const viewdetails = useLoaderData();
    console.log(viewdetails)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl  mt-6 mb-6 grid grid-cols-1 lg:grid-cols-2 ">
                <div className="card-body w-full">
                <figure><img className='w-full h-full' src={viewdetails.img} alt="Album" /></figure>
                    <h2 className="card-title">{viewdetails.title}</h2>
                    <p>{viewdetails.description}</p>
                    <h5 className='text-2xl font-bold'>Price per Person:{viewdetails.priceperperson}</h5>
                    <p>rating:5</p>
                </div>

                <div className='w-full'>
                    <ReviewForm viewdetails={viewdetails}></ReviewForm>
                </div>
           
        </div>

    );
};

export default ViewDetails;