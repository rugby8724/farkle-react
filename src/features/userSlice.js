import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DOG_URL = 'https://dog.ceo/api/breeds/image/random'

const initialState ={
  users:[{userId:77, username: 'Jwise', password:'supersecret', img:'https://images.dog.ceo/breeds/hound-plott/hhh-23456.jpeg'}],
  currentPlayer:'',
  pendingImg: ''
}

export const getImage = createAsyncThunk('user/getImage', async() =>{
  const respone = await axios.get(DOG_URL)
  return respone.data
})

export const userSlice =createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSignIn:(state, action) =>{
      const{userId, username, img} = action.payload

        state.currentPlayer = {userId, username, img}
    },
    userSignOut:(state) =>{
      state.currentPlayer = ''
    },
    createUser:(state, action)=>{
      const {username, password, img} = action.payload
      let userId = nanoid()
      state.users.push({userId, username, password, img})
      state.currentPlayer ={userId, username, img}

    }
  },
  extraReducers: (builder) =>{
    builder.addCase(getImage.fulfilled, (state, action) =>{
      state.pendingImg = action.payload.message
      console.log(state.pendingImg)
    })
  }
})

export const {userSignIn, userSignOut, createUser} = userSlice.actions

export default userSlice.reducer

