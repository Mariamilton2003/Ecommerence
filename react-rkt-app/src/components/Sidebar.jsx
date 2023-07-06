import React from 'react';
import { Close, Person , ShoppingCartOutlined ,NoteOutlined,Settings,QuestionMarkOutlined, FavoriteRounded} from '@mui/icons-material';
import { Avatar } from '@mui/material';
const Sidebar = ({open,user}) => {
    return (
        <>  
            <div className={`z-40 absolute top-[-5rem] w-[16rem] h-[100vh] bg-gray-500 bg-opacity-40 backdrop-blur-xl overflow-hidden`}>
               <div className="flex gap-2 absolute top-6 w-[100%] text-white"
               onClick={()=>{open(()=>false)}}>
                <Close style={{width:'2rem',height:'2rem'}}  className='ml-4 cursor-pointer'/>
                <Avatar src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/>
                {/* <Person style={{width:'2rem',height:'2rem'}} className='rounded-full bg-blue-500'/> */}
                <div className="flex justify-center items-center">{user?user:'no user found'}</div>
               </div>
               <div className="ml-4 flex justify-between">
                <ul className="absolute top-20 text-white text-2xl font-bold leading-[3.5rem]">
                    <li className="flex gap-3 items-center hover:text-rose-500"><NoteOutlined/>Order</li>
                    <li className="flex gap-3 items-center hover:text-rose-500"><ShoppingCartOutlined/>Cart</li>
                    <li className="flex gap-3 items-center hover:text-rose-500"><FavoriteRounded/>WhishList</li>
                    <li className="flex gap-3 items-center hover:text-rose-500"><Settings/>Setting</li>
                    <li className="flex gap-3 items-center hover:text-rose-500"><QuestionMarkOutlined/>About</li>
                </ul>
                <div className="flex absolute top-[85%] cursor-pointer px-4 py-2 bg-rose-600 text-white text-2xl font-bold rounded-md hover:bg-rose-500">
                    LogOut
                </div>
               </div>
            </div>
        </>
    );
};

export default Sidebar;