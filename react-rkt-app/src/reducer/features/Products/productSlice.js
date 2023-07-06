import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    products: {
      loading : false,
      data :[],
      error : null,
   },
}

export const fetchProducts = createAsyncThunk("/product/fetchProducts",async()=>{
  const options = {
        params: {
         product: 'laptop',
         page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '48f00cbeedmsh97fc89519647c08p1b7604jsndf7c9708c27f',
          'X-RapidAPI-Host': 'ecommerce-product-api1.p.rapidapi.com'
        }
      }
      const {data} = await axios.get("https://ecommerce-product-api1.p.rapidapi.com/data",options);
      return data
})

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.products.loading = true
         })
         builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products.data = action.payload
         })
         builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.products.error = action.payload
         })
    }
})

export default productSlice.reducer