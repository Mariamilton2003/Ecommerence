import React from 'react';
import AppBar from '../components/AppBar'
import Slider from '../components/Slider'
import Categories from '../components/Categories';
import Cards from '../components/Cards';
const Home = () => {
    return (
        <>
          <AppBar />
          <div className="flex flex-col sm:mx-[2rem]">
          <div className="">
            <Slider />
          </div>
          <div className="flex flex-col">
             <span className='p-2 text-2xl font-bold text-white'>Category</span>
            <Categories/>  
          </div> 
          <div className="flex flex-col">
            <span className='p-2 text-2xl font-bold text-white'>PRODUCTS</span>
            <Cards />  
          </div>
          </div>
        </>
    );
};

export default Home;