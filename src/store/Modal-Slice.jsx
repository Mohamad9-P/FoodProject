import { createSlice } from "@reduxjs/toolkit";

export const handelingModal=createSlice({
    name:"modal",
    initialState:{modalStatus:false},
    reducers:{
        opening(state,action){
            console.log(action.payload)
            state.modalStatus=action.payload
        },
        closing(state,action){
            state.modalStatus=action.payload ? action.payload : false;
        },


    }
})

export const ModalAction=handelingModal.actions