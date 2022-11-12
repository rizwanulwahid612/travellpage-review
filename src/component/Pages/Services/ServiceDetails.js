import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { TabTitle } from '../../Generalfunction/Generalfunction';


const ServiceDetails = ({service}) => {
    const {user}=useContext(AuthContext)
    TabTitle('ServiceDetails')

const { description, title, _id,  img } = service;
  
   
   
    return (
       <div>

        
        
        
      
        <div className="card card-compact w-auto bg-base-100 shadow-xl mb-6 mt-6">
        <figure><img className='h-56' src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            {
                description.length > 100 ? <p>{description.slice(0, 100)+'...'} 
                </p>
                    :
                    <p>{description}</p>
            }
            <th>
            <Link to={`/viewDetails/${_id}`}><button className="btn btn-xs">View details...</button></Link>
                <Link to='/reviewpage'><button className="btn btn-ghost btn-xs">Go Review</button></Link>
                
              </th>
        </div>
        
        
        </div>
      

       </div>
       
    
    );

};

export default ServiceDetails;

