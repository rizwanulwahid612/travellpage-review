import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-hot-toast';

const Login = () => {
  const {login,GoogleSignin,setLoader}=useContext(AuthContext);
  const [error,setError]=useState('')
  const location = useLocation();
  const navigate = useNavigate();
  const from= location.state?.from?.pathname || '/';

    const handleSubmit=(event)=>{
       event.preventDefault();
       const form=event.target;
       const email=form.email.value;
       const password=form.password.value;
       form.reset();
       console.log(email,password)

       login(email,password)
       .then((result) => {
        const user = result.user;
        console.log(user)
        const currentUser = {
          email: user.email
      }
      console.log(currentUser);

      //get token
      fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // local storage is the easiest but not the best place to store jwt token
      localStorage.setItem('token', data.token);
      navigate(from, { replace: true });
      setError('')
      toast.success('successfully login')
  });

       
       
      })
      .catch((error) => {
       console.log(error);
       setError(error.message)
      })
      .finally(()=>{
        setLoader(false)
      })
    }
  
    const handleGoogleSignin=()=>{
      GoogleSignin()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email
      }
      console.log(currentUser);

      //get token
      fetch('https://server-three-ruby.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // local storage is the easiest but not the best place to store jwt token
      localStorage.setItem('token', data.token);
      navigate(from, { replace: true });
      setError('')
      toast.success('successfully login')
  });
      })
      .catch((error) => {
       console.log(error);
      });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
  <div className="hero-content flex-col lg:flex">
  <div className="text-center lg:text-left text-accent">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   
      <form onSubmit={(event)=>handleSubmit(event)} className="card-body">
    
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
        <p>You don't have any account?<Link className='text-orange-600 font-bold' to="/register">Register</Link></p>
         <h1 className='text-red-900'>{error}</h1> 
        <div className="form-control mt-6">
          <button className="btn btn-accent">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleSignin} className="btn btn-ghost text-white bg-warning"><FcGoogle/> Google Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;