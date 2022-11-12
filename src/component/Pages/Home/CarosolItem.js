import React from 'react';
import './carosolItem.css';

const CarosolItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
            <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 mt-28">
            <h1 className='text-xl font-bold text-white lg:text-xl mb-32'>
                Best <br />
                Torest <br />
                Places
            </h1>
           
           
        
        </div>
        
       
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default CarosolItem;