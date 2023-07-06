import React, { useState } from 'react';
import {ArrowLeftOutlined,ArrowRightOutlined} from '@mui/icons-material'

const Slider = () => {
    const Slides=["https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1558234200-3efd43232f08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxlY29tbWVyY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxlY29tbWVyY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1509291985095-788b32582a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxlY29tbWVyY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVjb21tZXJjZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
]
    const [currentIndex,setCurrentIndex] = useState(0)
    const prevSlide =()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide =()=>{
        const isLastSlide = currentIndex === Slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    
    const goToSlide = (Index) => {
        console.log('slide');
        setCurrentIndex(Index)
    }

    return (
        <>
            <div className='w-[100%] my-4 bg-white bg-opacity-30 backdrop-blur-3xl'>
            <div className="w-[100%] h-[280px] md:h-[340px] mx-0 py-6 pb-0 px-4 relative">
                <img src={Slides[currentIndex]} alt="" 
                className="w-full h-full rounded-2xl bg-center bg-cover object-cover object-center transition-all ease-in duration-500" />
                <button
                className='absolute z-2 top-[50%] 
                left-[2rem] text-white px-2 py-1 rounded-3xl text-2xl font-bold bg-gray-800'
                onClick={prevSlide}><ArrowLeftOutlined style={{width:'2rem',height:'2rem'}}/></button>
                <button
                className='absolute z-2 top-[50%] right-[2rem] text-white px-2 py-1 rounded-3xl text-2xl font-bold bg-gray-800'
                onClick={nextSlide}><ArrowRightOutlined style={{width:'2rem',height:'2rem'}}/></button>
            </div>
            <div className="py-4 flex gap-12 justify-center">
            {Slides.map((img,index)=>(
                <div
                key={index}
                onClick={()=>goToSlide(index)}
                className={`w-4 h-4 rounded-lg cursor-pointer bg-gray-800 ${currentIndex === index ? 'bg-white scale-125' : ""}`}>
                </div>
            ))}
            </div>
            </div>
                
        </>
    );
};


export default Slider;