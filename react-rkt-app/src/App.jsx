import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { increment , decrement ,incrementByAmount } from './reducer/features/counter/counterSlice';
import react from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';

const App = () => {
    return (
       <div className='z-0 w-[100vw]'>
          {/* <Login /> */}
          <Home />
          {/* <ProductPage /> */}
         {/* <CartPage /> */}
       </div>
    );
};

export default App;