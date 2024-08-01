import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./api/baseApi";
import cartSlice from "./feature/cart/cartSlice";
import productSlice from "./feature/product/productSlice";
import checkoutSlice from "./feature/checkout/checkoutSlice";
import { categoryBaseApi } from "./api/categoriesBaseApi";

export const store = configureStore({
  reducer: {
    cart: cartSlice,

    filter: productSlice,
    checkout:checkoutSlice,
    [baseApi.reducerPath]: baseApi.reducer,
    [categoryBaseApi.reducerPath]:categoryBaseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(categoryBaseApi.middleware),

});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
