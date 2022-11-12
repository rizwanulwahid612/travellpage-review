import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { updateProfile,getAuth,signOut,signInWithPopup,onAuthStateChanged, createUserWithEmailAndPassword, GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext= createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState([]);
    const [loader,setLoader]=useState(true);

   const register=(email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
   }
   const provider = new GoogleAuthProvider();

   const GoogleSignin=()=>{
    return signInWithPopup(auth, provider)
   }
   const login =(email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
   const logOut=()=>{
    localStorage.removeItem('token');
    return signOut(auth)
   }
   
        
   const profileUpdateUser=(profile)=>{
    setLoader(true)
    return updateProfile(auth.currentUser,profile)
}
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoader(false)
    })
    return ()=>unsubscribe();
   },[])

    const userInfo={register,login,user,loader,setLoader,GoogleSignin,logOut,profileUpdateUser}
    return (
        
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;