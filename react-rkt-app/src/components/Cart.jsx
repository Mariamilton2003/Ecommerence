import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
const Cart = ({data, i}) => {
    const [count,setCount] = useState(1);
    const user = useSelector((state)=>state.user.userData)
    const dispatch = useDispatch()
    return (
        <>
            <div className="col-span-1 p-2 flex items-center">{i}</div>
            <div className="col-span-5 p-2 ">
                <img
             className='w-40 h-20'
             src={data.image} alt="" /></div>
            <div className="col-span-4 p-2 flex gap-1 items-center">
            <button
            onClick={()=>setCount((pre)=>pre === 1 ? 1 :pre - 1)}
            className='px-4 rounded-sm bg-rose-600'>-</button>
            <input type="number" value={count}
            onChange={(ev)=>setCount(ev.target.value)} 
            className='px-2 m-1 w-10  text-black'/> 
            <button
            onClick={()=>setCount((prev)=>parseInt(prev) + 1)}
            className='px-3 rounded-sm bg-rose-600'>+</button></div>
            <div className="col-span-2 p-2 flex items-center">₹{eval(count * parseInt(data.price.split('₹').join("").split(',').join(""))).toString().replace(/(-?\d+)(\d{3})/,"$1,$2")}</div>
  
        </>
    );
};

export default Cart;