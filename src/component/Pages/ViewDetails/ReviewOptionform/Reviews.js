import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { TabTitle } from '../../../Generalfunction/Generalfunction';
import ReviewTable from './ReviewTable';

const Reviews = () => {
  TabTitle('Review')
  const {user,logOut}= useContext(AuthContext);
  // const reviews =useLoaderData();
  const [reviews,setReviews]=useState([])
  console.log(reviews)
 
  useEffect(()=>{
    fetch( `https://server-three-ruby.vercel.app/review?email=${user?.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
    })
    .then(res => {
      if (res.status === 401 || res.status === 403) {
          return logOut();
      }
      return res.json();
  })
    .then(data=>{
      setReviews(data)
    })
  },[user?.email,logOut]);

  const handleDelete =(id)=>{
    const agree=window.confirm('Are you sure you want to delete it ?')
    if(agree){
        fetch(`https://server-three-ruby.vercel.app/deleteItem/${id}`,{
            method:'DELETE',
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
          }
         })
         .then(res=>res.json())
         .then(data=>{
          if(data.deletedCount >0){
            alert('delete successfull')
            const remining = reviews.filter(rev=>rev._id !== id);
            setReviews(remining)
          }
            console.log(data)
         })
    }

}
  return (
    <div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className=''>
            <tr>

              <th>Name</th>
              <th>Travel Place Name</th>
              <th>Review</th>
              <th>Update</th>
              <th>Delete</th>
              
             
            </tr>
          </thead>
          
          {
            
            reviews.map(reviewtable=><ReviewTable
              key={reviewtable._id}
              reviewtable={reviewtable}
              handleDelete={handleDelete}
            ></ReviewTable>)
           
          }
         
        </table>
      </div>
    </div>
  );
};

export default Reviews;