import { configureStore } from '@reduxjs/toolkit'
// ...
import cartReducer from './feature/cart/cartSlice'
import { baseApi } from './api/baseApi'
import cartSlice from './feature/cart/cartSlice'
import productSlice from './feature/product/productSlice'
export const store = configureStore({
  reducer: { 
    cart:cartSlice,
    filter:productSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch