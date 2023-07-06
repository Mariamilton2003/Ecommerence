import React from 'react';

const ProductDetails = ({product}) => {
    return (
        <>
            <div className="flex flex-col sm:mx-12 bg-slate-500">
                <div className="flex flex-col bg-gray-700 p-4 justify-center items-center">
                <img src={product.image} alt=""
                className='w-[20rem] h-[20rem]' />
                <span className='text-white font-semibold'>{product.title}</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-white px-4 py-2'>{product.description}</span>
                    <div className="flex p-4 justify-between">
                        <span className="flex justify-center text-lg text-white">{product.price}</span>
                        <div className="flex gap-8">
                           <button className="cardBtn">AddCart</button>
                           <button className="cardBtn">BuyNow</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;