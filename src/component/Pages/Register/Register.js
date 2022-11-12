import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  
  const  {register,profileUpdateUser}=useContext(AuthContext)
  const [error,setError]=useState('')
  const navigate =useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        if(password.length<6){
          setError('Atleast 6 charecter');
          return;
     }
 
  if (!/(?=.*[!@#$&*])/.test(password)) {
    setError('Ensure string has one special case letter')
      return;
  }
        form.reset()
        console.log(name,photoURL,email,password)
        register(email, password)
        .then((result) => { 
          const user = result.user;
         console.log(user);
         setError('')
         toast.success('successfully Registered')
         navigate('/login')
         handleUpdateProfile(name,photoURL)
        })
        .catch(error => {
          console.log(error)
          setError(error.message)
        })
     }
     const handleUpdateProfile=(name,photoURL)=>{
      const profile ={displayName:name,photoURL:photoURL}
      profileUpdateUser(profile)
       .then(() => {
        setError('')
       })
       .catch(error=>console.log(error));

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
  <div className="hero-content flex-col lg:flex">
  <div className="text-center lg:text-left text-accent">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-300">
   
      <form onSubmit={(event)=>handleSubmit(event)} className="card-body">
    
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
         
        </div>
        <p>Already have any account?<Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
        <h1 className='text-red-900'>{error}</h1>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Register</button>
          
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;