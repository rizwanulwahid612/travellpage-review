import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { TabTitle } from '../../../Generalfunction/Generalfunction';


const ReviewForm = ({viewdetails}) => {
  TabTitle('ReviewForm')
  console.log(viewdetails)
  const {user}=useContext(AuthContext)
  console.log(user)
  const handlereviewSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=user.displayName;
    const photoURL=user.photoURL;
    const email=user?.email || 'unregistered';
    const place=viewdetails.title;
    const review=form.reviewText.value;
    console.log(name,photoURL,email,place,review);
    const reviewItems = { 
      name,
      photoURL,
      email,
      place,
      review, 
    }
    fetch('https://server-three-ruby.vercel.app/review',{
      method:'POST',
      headers:{
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(reviewItems)
    })
    .then(res => res.json())
    .then(data=>{
      if(data.acknowledged){
        alert('review placed successfully')
        form.reset();
      }
      console.log(data)
    })
    .catch(err=>console.error(err));
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
          <input type="text" name='name' placeholder="name"defaultValue={user.displayName} className="input input-bordered" readOnly required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">PhotoURL</span>
          </label>
          <input type="text" name='photoURL' defaultValue={user.photoURL} placeholder="PhotoURL" className="input input-bordered" readOnly required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name='email' defaultValue={user.email} placeholder="email" className="input input-bordered" readOnly required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Travel Place Name</span>
          </label>
          <input type="text" name='place' defaultValue={viewdetails.title} placeholder="Travel place"  className="input input-bordered" readOnly required />
        </div>
        <div className="form-control">
          <label className="label">
            
          <textarea className="textarea w-full" name='reviewText' placeholder="Enter Your Review" required></textarea>
          </label>
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-accent">Review Submit</button>
        </div>
        <div className="form-control mt-2">
         <Link className='mx-auto w-1/2' to='/reviewpage'><button className="btn btn-accent">Go to Review Page</button></Link> 
        </div>
      </form>
    </div>
  </div>

        </div>
    );
};

export default ReviewForm;