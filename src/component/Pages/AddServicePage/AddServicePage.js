import React from 'react';
import toast from 'react-hot-toast';
import { TabTitle } from '../../Generalfunction/Generalfunction';


const AddServicePage = () => {
  TabTitle('AddServicePage')
  const handlereviewSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const img=form.photoURL.value;
    const title=form.name.value;
    const description=form.description.value;
    const priceperperson=form.number.value;
    console.log(img,title,description,priceperperson);

    const addItems = { 
      img,
      title,
      description,
      priceperperson,
    }
    fetch('https://server-three-ruby.vercel.app/itemadded',{
      method:'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(addItems)
    })
    .then(res => res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('successfully Added')
        form.reset();
      }
      console.log(data)
    })
    .catch(err=>console.error(err));
  }
    return (
        <div className="">
            <div className="hero min-h-screen bg-base-300">
  <div className="hero-content flex-col lg:flex">
  <div className="text-center lg:text-left text-accent">
      <h1 className="text-5xl font-bold">Add Sercice</h1>
      
    </div>
    <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-300">
   
      <form onSubmit={(event)=>handlereviewSubmit(event)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name='name' placeholder="Title" className="input input-bordered" required />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price Per Person</span>
          </label>
          <input type="number" name='number' placeholder="Price" className="input input-bordered" required/>
         
        </div>
        
        
        <div className="form-control mt-6">
          <button className="btn btn-accent">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddServicePage;