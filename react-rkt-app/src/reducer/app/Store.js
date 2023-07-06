import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from '../features/user/userSlice'
import productReducer from "../features/Products/productSlice";
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user:userReducer,
        products:productReducer,
    },
})