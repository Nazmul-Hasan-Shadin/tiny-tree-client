import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface Category {
  _id: string
  name: string;
  image: string;
}

export interface CreateCategoryRequest {
  name: string;
  image: string;
}

export interface UpdateCategoryRequest {
  name?: string;
  image?: string;
}

export const categoryBaseApi = createApi({
  reducerPath: "categoryBaseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://tiny-tree-server-8.onrender.com/api/v1" }),
  endpoints: (builder) => ({
    createCategories: builder.mutation({
      query: (data) => {
        console.log(data);

        return {
          url: "/create-categories",
          method: "POST",
          body: data,
        };
      },
    }),

    getAllCategories: builder.query({
      query: () => {
        return {
          url: "categories",
          method: "GET",
        };
      },
    }),

    updateCategories: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `categories/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
    deleteCategories: builder.mutation({
      query: (id) => {
        console.log(id);

        return {
          url: `categories/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoriesMutation,
  useUpdateCategoriesMutation,
  useDeleteCategoriesMutation,
} = categoryBaseApi;
