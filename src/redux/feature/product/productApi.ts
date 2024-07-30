import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: ({
        page,
        searchTerm = "",
        category = "",
        priceRange = "",
        sort = "",
      }) => {
        return {
          url: `/products`,
          method: "GET",
          params: {
            page: page,
            searchTerm: searchTerm,
            category,
            priceRange,
            sort,
          },
        };
      },
      providesTags: ["products"],
    }),

    createProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/create-product",
        method: "POST",
        body: productInfo,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ _id, data }) => {
        return {
          url: `/update-product/${_id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),

    updateProductQuantity: builder.mutation({
      query: (productUpdates) => {
        console.log(productUpdates);

        return {
          url: "/update-product-quantity",
          method: "PATCH",
          body: productUpdates,
        };
      },
    }),

    getProductById: builder.query({
      query: (productId) => {
        console.log(productId);

        return {
          url: `/products/${productId}`,
          method: "GET",
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        console.log(id);

        return {
          url: `/delete-product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useUpdateProductMutation,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useUpdateProductQuantityMutation,
} = authApi;
