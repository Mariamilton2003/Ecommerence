import React, { useState } from 'react';

const LoginAndSignIn = () => {
    const [isLogin,setIsLogin] = useState(false)
    return (
        <div className='my-[2.5rem] grid place-content-center' >
              <form action=""
               className='flex flex-col p-4 w-[25rem] sm:w-[30rem] h-[25rem] sm:h-[30rem] bg-white rounded-md backdrop-blur-xl bg-opacity-20 shadow-card-sm shadow-gray-700'
              >
               {!isLogin && (<span className='flex justify-center font-bold text-3xl text-sky-600'>SIGN UP</span>)}
               <span className="mt-9 text-2xl text-blue-500">User Name:</span>
               <input type="text" placeholder='User Name'
               className="mt-3 py-2 text-xl bg-transparent text-white border-b focus:border-b-rose-500 transition duration-[1s]" />  
               <span className="mt-4 text-2xl text-blue-500">Password:</span>  
               <input type="password" placeholder='Password'
               className="mt-3 py-2 text-xl bg-transparent text-white border-b focus:border-b-rose-500 transition duration-[1s]" />
               <button type="submit"
               className='mt-10 text-xl font-bold py-3 px-2 text-white bg-rose-500'
               >Sign Up</button>
               
              </form>
        </div>
    );
};

export default LoginAndSignIn;