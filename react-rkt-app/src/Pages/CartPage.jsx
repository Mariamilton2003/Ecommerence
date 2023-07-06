import React from 'react';
import AppBar from '../components/AppBar';
import Carts from '../components/Carts'
const CartPage = () => {
    return (
        <>
          <AppBar />  
          <div className="">
            <Carts />
          </div>
        </>
    );
};

export default CartPage;