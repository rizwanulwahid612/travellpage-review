import React from 'react';
import { Link } from 'react-router-dom';
const Place = ({ place }) => {
    const { description, title, _id, priceperperson, img, facility, service_id } = place
    return (

        <div className="card card-compact w-auto bg-base-100 shadow-xl mb-6">
            <figure><img className='h-56' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    description.length > 100 ? <p>{description.slice(0, 100)} <Link to={`/viewDetails/${_id}`}><button className="btn btn-xs">View details...</button></Link></p>
                        :
                        <p>{description}</p>
                }
              
            </div>
            

        </div>

    );
};

export default Place;