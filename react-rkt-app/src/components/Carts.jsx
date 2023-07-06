import React, { useEffect } from 'react';
// import Card from './Card';
// import data from "../Data/data.js"
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../reducer/features/Products/productSlice';
const Carts = () => {
    const {data} = useSelector((state)=>state.products.products)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    // const products =data.data
    // console.log(products[0]);
    // if (data.loading) {
    //     return <div>Loading...</div>;
    //   }
    
    //   if (data.error) {
    //     return <div>Error: {data.error}</div>;
    //   }
    return (
        <>
            <div className="grid bg-opacity-50 backdrop-blur-xl">
               <div className="grid grid-rows-auto grid-cols-12 mt-4 mx-1 p-3 md:mx-12 font-bold text-lg text-white bg-gray-700">
                <div className="col-span-1 p-2 ">S.No</div>
                <div className="col-span-5 p-2 ">Items</div>
                <div className="col-span-4 p-2 ">Quantity</div>
                <div className="col-span-2 p-2 ">Price</div>
                </div>
                <div className="grid grid-rows-auto grid-cols-12 mx-1 p-3 md:mx-12 font-bold text-lg text-white bg-gray-950 ">
                {   
                    // products.map((data,i)=>(
                    //     <div className="">{data.title}</div>
                    // ))
                    data.map((data,i)=>(
                        <Cart data={data} i={i+1} key={i} className=''/>
                      ))
                }
               </div>
            </div>
        </>
    );
};

export default Carts;
