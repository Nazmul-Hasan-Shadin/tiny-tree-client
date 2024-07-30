import { baseApi } from "@/redux/api/baseApi";



const paymentApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
      createOrder:builder.mutation({
        query:(orderInfo)=>{
         
          
         return {
          url:'/orders',
          method:'POST',
          body:orderInfo
         }
        }
      })
    } )
})


export const {useCreateOrderMutation}=paymentApi;