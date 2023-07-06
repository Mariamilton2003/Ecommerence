import { FavoriteRounded, Widgets ,Share } from '@mui/icons-material';
import React from 'react';

const Card = ({data}) => {
    return (
        <>
            <div className="group relative flex flex-col cursor-pointer bg-gray-700 p-5 w-[17rem] rounded-lg overflow-hidden">
                <div className="flex justify-between mt-[-10px] mb-2 text-gray-500 ">
                    <Widgets className='hover:text-blue-500'/>
                    <div className="flex gap-2">
                    <FavoriteRounded className='hover:text-blue-500'/>
                    <Share className='hover:text-blue-500'/>  
                    </div>
                </div>
                <img src={data.image} alt="" 
                className='w-[15rem] h-[15rem] rounded-lg bg-cover mb-4 object-center'/>
               <div className="hidden absolute w-[14.6rem] px-2 py-1 group-hover:flex flex-col bottom-5 rounded-lg p-2 bg-gray-900 bg-opacity-50 backdrop-blur-lg">
               <span className='text-white font-semibold'>{data.title}</span>
                <span className='font-bold'>{data.price}</span>
                <div className="flex justify-between">
                   <button className="cardBtn">AddCart</button>
                   <button className="cardBtn">BuyNow</button>
                </div>
               </div>
               <span className='text-white font-semibold'>{data.title}</span> 
            </div>
        </>
    );
};

export default Card;