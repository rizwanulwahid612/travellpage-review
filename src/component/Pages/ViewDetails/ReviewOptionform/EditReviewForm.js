import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { TabTitle } from '../../../Generalfunction/Generalfunction';

const EditReviewForm = () => {
  TabTitle('EditReviewForm')
  const loader=useLoaderData();
  const [user,setUser]=useState(loader)
  console.log(loader)


  const handlereviewSubmit=(event)=>{
    event.preventDefault();
    
    fetch(`https://server-three-ruby.vercel.app/editreviewform/${loader._id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
         authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body:JSON.stringify(user)

    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      toast.success('successfully Updated')
    })
  }
  const handleInputChange = event =>{
     const field = event.target.name;
     const value = event.target.value;
     const newReview={...user}
    newReview[field]=value;
    setUser(newReview)
  }
    return (
        <div className=''>
            <div className="hero-content flex-col lg:flex">
  <div className="text-center lg:text-left text-accent">
      <h1 className="text-3xl font-bold">Review option</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
   
      <form onSubmit={(event)=>handlereviewSubmit(event)} className="card-body">
    
      <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input onChange={handleInputChange} type="text" name='name' placeholder="name"defaultValue={loader.name} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">PhotoURL</span>
          </label>
          <input onChange={handleInputChange} type="text" name='photoURL' defaultValue={loader.photoURL} placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input onChange={handleInputChange} type="email" name='email' defaultValue={loader.email} placeholder="email" className="input input-bordered" required readOnly/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Travel Place Name</span>
          </label>
          <input onChange={handleInputChange} type="text" name='place' defaultValue={loader.place} placeholder="Travel place"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          <input onChange={handleInputChange} name='review' type='text' className="textarea w-full"defaultValue={loader.review}  placeholder="Enter Your Review"></input>
          </label>
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-accent">Update</button>
        </div>
        <div className="form-control mt-6">
         <Link to='/reviewpage'><button className="btn btn-xs">Go Back</button></Link> 
        </div>
       
      </form>
    </div>
  </div>
 
        </div>
    );
};

export default EditReviewForm;