import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount } from '../reducer/features/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch()
    
    return (
        <div>
        <div className="flex flex-col gap-2 justify-center">
            <div className="w-8 h-[0.15rem] bg-white"></div>
            <div className="w-8 h-[0.15rem] bg-white"></div>
            <div className="w-8 h-[0.15rem] bg-white"></div>
        </div>
            {count}
            <button
              onClick={() => dispatch(increment())} 
            >increment</button>
            <button
              onClick={()=> dispatch(decrement())} 
            >decrement</button>
            <input type="number" 
              onChange={(e)=>dispatch(incrementByAmount(e.target.value))}
            />
        </div>
    );
};

export default Counter;