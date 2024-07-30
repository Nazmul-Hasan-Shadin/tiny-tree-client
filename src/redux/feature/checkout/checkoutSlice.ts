import { PayloadAction, createSlice } from "@reduxjs/toolkit";

 export interface CheckoutState {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerAddress: string;
  }

const initialState:CheckoutState={
    customerName:'',
    customerEmail:'',
    customerPhone:'',
    customerAddress:''
}

const checkOutSlice= createSlice({
    name:'checkout',
    initialState:initialState,
    reducers:{
        setCheckOutData:(state,action:PayloadAction<CheckoutState>)=>{
            state.customerName=action.payload.customerName;
            state.customerEmail=action.payload.customerEmail;
            state.customerAddress=action.payload.customerAddress;
            state.customerPhone=action.payload.customerPhone;
        }
        }

})

export const {setCheckOutData}=checkOutSlice.actions
 export default checkOutSlice.reducer