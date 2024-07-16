import { PayloadAction, createSlice } from "@reduxjs/toolkit";

 export interface CheckoutState {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
  }

const initialState:CheckoutState={
    name:'',
    email:'',
    phoneNumber:'',
    address:''
}

const checkOutSlice= createSlice({
    name:'checkout',
    initialState:initialState,
    reducers:{
        setCheckOutData:(state,action:PayloadAction<CheckoutState>)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.address=action.payload.address;
            state.phoneNumber=action.payload.phoneNumber;
        }
        }

})

export const {setCheckOutData}=checkOutSlice.actions
 export default checkOutSlice.reducer