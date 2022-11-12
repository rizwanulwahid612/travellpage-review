import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loader}=useContext(AuthContext);
    const location =useLocation();
    
    if(loader){
        return <h1 className='text-5xl'>Loading...</h1>
     }
    if(user?.email){
        return children;
    }
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
       
    
   
};

export default PrivateRouter;