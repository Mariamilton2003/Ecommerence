import {useEffect} from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../reducer/features/Products/productSlice';

const Cards = () => {
    const {data} = useSelector((state)=>state.products.products)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    return (
        <>
           <div className="flex flex-wrap gap-4 justify-center">
                {data.map((data,i)=>(
                    <Card data={data} key={i} />
                ))}
           </div>  
        </>
    );
};

export default Cards;