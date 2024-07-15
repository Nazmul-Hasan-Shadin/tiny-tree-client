import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type FilterState = {
  category: string ;
  priceRange: string ;
  sort:string 
};
const initialState: FilterState = {
  category: '',
  priceRange: '',
  sort:''
};

const productSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterState>) => {
      state.category = action.payload.category;
      state.priceRange = action.payload.priceRange;
      state.sort = action.payload.sort;
    },
  },
});

export const {setFilter} = productSlice.actions;
export default productSlice.reducer;
