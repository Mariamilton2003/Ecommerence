import React, { useState ,useEffect } from 'react';
import {faviconIcon}from '../Assets/icons';
import { NotificationsOutlined,ShoppingCartOutlined, Menu} from '@mui/icons-material';
import { Badge } from '@mui/material';
import Sidebar from './Sidebar';
import {useDispatch,useSelector} from 'react-redux'
import { fetchUsers } from '../reducer/features/user/userSlice';
const AppBar = () => {
    const[isOpen,setIsOpen]=useState(false) 
    const users =useSelector((state)=>state.user.userData.data)
    const dispatch =useDispatch()  
    useEffect(()=>{
      dispatch(fetchUsers())
    },[])
    return (
        <>
        <nav className='z-20 h-[5em] px-7 py-4 sticky top-0 flex justify-between bg-blue-500 backdrop-blur-xl bg-opacity-20 shadow-card-lg'>
        <div className="flex gap-5">
        <div className="z-50 flex gap-1 items-center justify-center cursor-pointer text-white"
        onClick={()=>{setIsOpen(()=>true)}}>
        <Menu style={{width:'2rem',height:'2rem'}}/>
        </div> 
        <div className='flex gap-1 items-center'>
            <img src={faviconIcon} alt="logo" className='w-8 h-8 sm:w-10 sm:h-10' />
            <span className="font-bold text-2xl text-white cursor-pointer">Kart</span>
        </div>    
        </div> 
        <div className="flex justify-center">
        <ul className="hidden gap-12 items-center lg:flex">
            <li className="font-bold text-lg text-white cursor-pointer transition-all ease-linear duration-300 hover:text-rose-500">HOME</li>
            <li className="font-bold text-lg text-white cursor-pointer transition-all ease-linear duration-300 hover:text-rose-500">ABOUT</li>
            <li className="font-bold text-lg text-white cursor-pointer transition-all ease-linear duration-300 hover:text-rose-500">CONTACTS</li>
        </ul> 
        </div>
        <div className="flex gap-6 items-center">
            
        <div className="flex gap-4 text-white">
            <Badge badgeContent={27} color='primary' >
              <NotificationsOutlined className='hover:text-blue-500' />
            </Badge>
            <Badge badgeContent={27} color='primary' >
              <ShoppingCartOutlined className='hover:text-blue-500' />
            </Badge>
        </div>
            <span className="btn">LOGIN</span>
        </div>
        </nav>
        {isOpen && (
        <div className={`relative ${isOpen?'':'hidden'}`}>
            <Sidebar open={setIsOpen} user={users.name}/>
        </div>
        )} 
        </>
    );
};

export default AppBar;