import { baseApi } from "@/redux/api/baseApi";



const paymentApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
      createOrder:builder.mutation({
        query:(orderInfo)=>({
           url:'/create-payment-intent',
           method:'POST',
           body:orderInfo
        })
      })
    } )
})


export const {useCreateOrderMutation}=paymentApi;