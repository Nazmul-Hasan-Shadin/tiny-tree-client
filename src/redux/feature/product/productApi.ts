import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (page) => {
        console.log(page, "iam page");

        return {
          url: `/products?page=${page}`,
          method: "GET",
        };
      },
    }),

    createProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/create-products",
        method: "POST",
        body: productInfo,
      }),
    }),
  }),
});

export const { useCreateProductMutation, useGetAllProductQuery } = authApi;
