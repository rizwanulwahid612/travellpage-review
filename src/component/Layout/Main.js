import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div className='mx-auto w-5/6'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;