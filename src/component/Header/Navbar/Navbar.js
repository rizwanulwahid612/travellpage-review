import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { FcGlobe } from "react-icons/fc";

const Navbar = () => {
    const {logOut,user}=useContext(AuthContext);
    const navlinks = [

        <li><Link to='/home'>Home</Link></li>,
        <li><Link to='/services'>Services</Link></li>,
        <li><Link to='/addservice'>Add Service</Link></li>,
        <li><Link to='/blog'>Blog</Link></li>       
    ]


const handleLogout=()=>{
    logOut()
    .then(() => {
        
      }).catch((error) => {
        console.log(error)
      });
}
    return (
        <div>
            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {navlinks}
                        </ul>
                    </div>
                    <Link className="btn btn-secondary normal-case text-xl bg-primary text-white"><FcGlobe/> Torest Service</Link>
                </div>
                <div className="navbar-center hidden lg:flex  text-white">
                    <ul className="menu menu-horizontal p-0">

                        {navlinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    
                </div>
                {
            user?.email? 
            <div className='grid grid-cols-1 lg:grid-cols-2'>
            <button onClick={handleLogout} className="btn bg-secondary mr-5 btn-xs px-8 mb-2">Sign Out</button>
            <button className='mr-10'>
            {
            
            user?.photoURL?
            <div className="avatar">
            <div className="w-[50px] rounded-full">
              <img src={user?.photoURL} />
            </div>
            </div>
                 :
                 <FaUser></FaUser>
                }
            </button>
            </div>
            :
            <>
            <li className='text-white ml-6 mr-10'><Link to='/login'>Login</Link></li>
            </>
        
        } 
            </div>
        </div>
    );
};

export default Navbar;