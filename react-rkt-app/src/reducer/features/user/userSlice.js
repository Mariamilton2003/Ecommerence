import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState ={
   userData : {
      loading : false,
      data : null,
      error : null,
   }
}

export const fetchUsers = createAsyncThunk('user/fetchUser',async ()=>{
   const res = await axios.get('http://localhost:3000/users');
   return res.data;
})
export const AddUsers = createAsyncThunk('user/AddUser',async (data)=>{
   const res = await axios.post('http://localhost:3000/users', { data });
   return res.data;
})
export const findUser = createAsyncThunk('user/findUser',async (data)=>{
   const res = await axios.get(`http://localhost:3000/users/${data.id}`);
   return res.data;
})

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers: builder =>{
      builder.addCase(fetchUsers.pending,(state)=>{
         state.userData.loading = true
      })
      builder.addCase(fetchUsers.fulfilled,(state,action)=>{
         state.userData.data = action.payload
      })
      builder.addCase(fetchUsers.rejected,(state,action)=>{
         state.userData.error = action.payload
      })
      builder.addCase(AddUsers.pending,(state)=>{
         state.userData.loading = true
      })
      builder.addCase(AddUsers.fulfilled,(state,action)=>{
         state.userData.data = action.payload
      })
      builder.addCase(AddUsers.rejected,(state,action)=>{
         state.userData.error = action.payload
      })
      builder.addCase(findUser.pending,(state)=>{
         state.userData.loading = true
      })
      builder.addCase(findUser.fulfilled,(state,action)=>{
         state.userData.data = action.payload
      })
      builder.addCase(findUser.rejected,(state,action)=>{
         state.userData.error = action.payload
      })
    }
})


export default userSlice.reducer