import React from 'react';
import Category from './Category';

const Categories = () => {
    const categories =['mobile','accessories','furniture','cloths','laptop','hardware','home applications']
    return (
        <>
          <div className="scrollbar flex overflow-x-scroll overflow-y-hidden p-2 gap-4 sm:gap-11 w-[100%] h-[4rem] bg-gray-600 backdrop-blur-lg bg-opacity-25">
            {categories.map((category,index)=>(
               <Category item={category.toUpperCase()} key={index}/>
            ))}
          </div>  
        </>
    );
};

export default Categories;