import React from 'react';
import { Link } from 'react-router-dom';
import { TabTitle } from '../../../Generalfunction/Generalfunction';

const ReviewTable = ({reviewtable,handleDelete}) => {
  TabTitle('ReviewTable')
    const {photoURL,name,email,place,review,_id}=reviewtable;
  
    return (
        <tbody>

        <tr>

          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-8">
                  <img src={photoURL} alt=''/>
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm ">{email}</div>
              </div>
            </div>
          </td>
          <td>
            {place}
            <br />
            <span className="badge badge-ghost badge-sm">{_id}</span>
          </td>
          <td>{review}</td>
          <th>
            <Link to={`/editreviewform/${_id}`}><button className="btn btn-ghost btn-xs bg-warning">Edit</button></Link>
          </th>
          
          <th>
            <label>
              <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline bg-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </label>
          </th>

        </tr>






      </tbody>
    );
};

export default ReviewTable;