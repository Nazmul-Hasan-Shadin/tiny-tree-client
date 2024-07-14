import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: ({ page, searchTerm = "", category = "", priceRange = "" }) => {
   

        return {
          url: `/products`,
          method: "GET",
          params: { page: page, searchTerm: searchTerm, category, priceRange },
        };
      },
      providesTags: ["products"],
    }),

    createProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/create-products",
        method: "POST",
        body: productInfo,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ _id, data }) => {
      
        
        return{
          url: `/update-product/${_id}`,
          method: "PATCH",
          body: data,
        }
      },
      invalidatesTags:["products"]
    }),
    getProductById: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useUpdateProductMutation,
  useGetProductByIdQuery,
} = authApi;
