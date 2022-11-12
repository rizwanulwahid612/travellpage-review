import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carosol from './Carosol';
import Place from './Place';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./travel.json";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { TabTitle } from '../../Generalfunction/Generalfunction';

const Home = () => {
  TabTitle('Torest-Service')
    const[places,setPlaces]=useState([])
    console.log(places)
    useEffect(()=>{
        fetch('https://server-three-ruby.vercel.app/alltravel')
        .then(res=>res.json())
        .then(data=>setPlaces(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
          <div className='lg:w-full sm:w-full rounded-lg'>
          <Carosol></Carosol>
          </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  mt-6 mb-6 bg-slate-600 text-white mx-auto w-full  rounded-md p-10'>
                <div>
                    <h1 className='text-5xl font-bold mb-2'>About Me</h1>
                    <Lottie className='w-[20vw]' animationData={groovyWalkAnimation} loop={true} />
                   
                </div>
                <p>The four basic elements of travel are air, land, sea, and water. Wildlife requires food, water, shelter, and a place where it can raise its young. The four elements of travel are used to categorize different kinds of travelers. The first three elements are important to all of us.</p>
                <div>
                <LineChart
      width={300}
      height={300}
      data={places}
      margin={{
        top: 5,
        right: 30,
        
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="priceperperson"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="title" stroke="#82ca9d" />
    </LineChart>
                </div>
                
            </div>
           
           <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
           {
            places.map(place=><Place
                key={place._id} 
                place={place}
                ></Place>)
           }
           </div>
           <div className="card-actions justify-center mb-6">
               <Link to='/services'><button className="btn btn-primary">See All</button></Link> 
            </div>
        </div>
    );
};

export default Home;