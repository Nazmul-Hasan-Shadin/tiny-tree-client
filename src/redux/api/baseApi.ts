import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi= createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://tiny-tree-server-8.onrender.com/api/v1'
    }),
    tagTypes:['products'],
    endpoints:()=>({})
})