import {
  useCreateCategoriesMutation,

  useDeleteCategoriesMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoriesMutation,
} from "@/redux/api/categoriesBaseApi";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface CategoryFormInputs {
  name: string;
  image:string
}

export interface TCategory {
  name: string;
  image:string;
  _id:string
}


const CategoryForm: React.FC = () => {
  const { register, handleSubmit, reset, setValue } =
    useForm<CategoryFormInputs>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data: categories, refetch } = useGetAllCategoriesQuery(undefined);
  const [createCategory] = useCreateCategoriesMutation(undefined);
  const [updateCategory] = useUpdateCategoriesMutation();
  const [deleteCategory] = useDeleteCategoriesMutation();

  useEffect(() => {
    if (selectedCategory && categories) {
      const category = categories?.data.find(
        (cat:TCategory) => cat._id === selectedCategory
      );
      if (category) {
        setValue("name", category.name);
        setValue("image", category.image || "");
      }
    }
  }, [selectedCategory, categories, setValue]);

  const onSubmit: SubmitHandler<CategoryFormInputs> = async (data) => {
   
   
   
    if (selectedCategory) {
      await updateCategory({data, id: selectedCategory });
      toast.success("Category updated successfully");
    } else {
      await createCategory(data);
      toast.success("Category created successfully");
    }
    refetch();
    reset();
    setSelectedCategory(null);
  };

  const handleDelete = async (id: string) => {
    await deleteCategory(id);
    toast.success("Category deleted successfully");
    refetch();
    reset();
    setSelectedCategory(null);
  };

  return (
    <div className="max-w-lg   mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6" style={{ color: "#054004" }}>
        {selectedCategory ? "Update Category" : "New Category"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category Name
          </label>
          <input
            {...register("name", { required: true })}
            placeholder="Category Name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
            <label className="block text-sm font-medium text-gray-700">
            Category Image
          </label>
          <input
            {...register("image", { required: true })}
            placeholder="Enter Image Link"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
          >
            {selectedCategory ? "Update" : "Submit"}
          </button>
          {selectedCategory && (
            <button
              type="button"
              onClick={() => handleDelete(selectedCategory)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          )}
        </div>
      </form>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4" style={{ color: "#054004" }}>
          Existing Categories
        </h3>
        <ul>
          {categories?.data?.map((category) => (
            <li key={category._id} className="flex justify-between mb-2">
              <span>{category.name}</span>
              <button
                onClick={() => setSelectedCategory(category._id)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryForm;
