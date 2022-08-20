import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  users:[{userId:77, username: 'Jwise', password:'supersecret'}],
  currentPlayer:'',
}

export const userSlice =createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSignIn:(state, action) =>{
      const{userId, username} = action.payload
        state.currentPlayer = {userId, username}
        console.log(state.currentPlayer.userId)
    },
    userSignOut:(state) =>{
      state.currentPlayer = ''
    }
  }
})

export const {userSignIn, userSignOut} = userSlice.actions

export default userSlice.reducer

