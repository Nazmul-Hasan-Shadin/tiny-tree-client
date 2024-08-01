import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TProduct = {
  _id?: string;
  category: string | null;
  title: string | null;
  price: number | null;
  quantity: number | null;
  description: string | null;
  rating: number | null;
  selectedQuantity?:number | null
  image: string | null;
};

type CartState = {
  products: TProduct[];
};

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      const {_id,selectedQuantity}=action.payload
      const existProduct= state.products.findIndex(product=>product._id ===_id )
      console.log(existProduct);
      
      if (existProduct >=0 ) {
         state.products[existProduct].selectedQuantity+=selectedQuantity
      }
      else{
        state.products.push(action.payload);
      }
     
    },

    removeCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
