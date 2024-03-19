import { createSlice } from "@reduxjs/toolkit";

const ResponseSlice=createSlice({
     name:'response',
     initialState:{
        content:null
     },
     reducers:{
        addContent: (state,action)=>{
            state.content=action.payload
        },
        clearContent: (state)=>{
            state.content=null
        }
     }


})

export default ResponseSlice.reducer
export const {addContent,clearContent}=ResponseSlice.actions
