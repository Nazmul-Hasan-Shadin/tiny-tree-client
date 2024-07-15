import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type Filter = {
  category?: string;
  priceRange?: string;
  sort?: string;
  searchTerm?: string;
};

type FilterState = {
  homeFilters: Filter;
  productFilters: Filter;
};

const initialState: FilterState = {
  homeFilters: { category: "", priceRange: "", sort: "", searchTerm: "" },
  productFilters: { category: "", priceRange: "", sort: "", searchTerm: "" },
};

const productSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setHomeFilter: (state, action: PayloadAction<Filter>) => {
      state.homeFilters = action.payload;
    },
    setProductFilter: (state, action: PayloadAction<Filter>) => {
      state.productFilters = action.payload;
    },
  },
});

export const { setHomeFilter, setProductFilter } = productSlice.actions;
export default productSlice.reducer;
