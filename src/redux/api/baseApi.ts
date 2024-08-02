import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi= createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://tiny-tree-server.vercel.app/api/v1'
    }),
    tagTypes:['products'],
    endpoints:()=>({})
})