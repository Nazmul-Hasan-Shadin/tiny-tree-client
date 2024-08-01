import { useGetAllCategoriesQuery } from "@/redux/api/categoriesBaseApi";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@/redux/feature/product/productApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface Inputs {
  image: string;
  title: string;
  price: number;
  quantity: number;
  rating: number;
  description: string;
  category: string;
}

type Product = {
  _id?: string;
  image: string;
  description: string;
  title: string;
  price: number;
  quantity: number;
  rating: number;
  category: string;
};

interface UpdateProductFormProps {
  product?: Product;
  isUpdate: boolean;
}
const UpdateProductForm = ({ product, isUpdate }: UpdateProductFormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [UpdateProduct] = useUpdateProductMutation();
  const [addProduct] = useCreateProductMutation();

  const { data:categories ,isLoading,error} = useGetAllCategoriesQuery(undefined);
  console.log(categories);
  

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isUpdate && product?._id) {
      const _id = product._id;

      UpdateProduct({ _id, data });
      toast.success("Succesfully product has updated");
    } else {
      addProduct(data);
      toast.success("Succesfully product has added");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6"> {isUpdate? 'Update Product':'Add Product'} </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Image Link
              <input
              required
                type="text"
                {...register("image")}
                defaultValue={isUpdate ? product?.image : ""}
                className="grow"
                placeholder="image Link"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              title
              <input
              required
                type="text"
                {...register("title")}
                defaultValue={isUpdate ? product?.title : ""}
                className="grow"
                placeholder="Enter Title"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              price
              <input
              required
                type="text"
                {...register("price")}
                defaultValue={isUpdate ? product?.price : ""}
                className="grow"
                placeholder="Price"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              quantity
              <input
              required
                type="text"
                {...register("quantity")}
                defaultValue={isUpdate ? product?.quantity : ""}
                className="grow"
                placeholder="quantity"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              rating
              
              <input
              required
                type="text"
                defaultValue={isUpdate ? product?.rating : ""}
                {...register("rating")}
                className="grow"
                placeholder="rating"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              description
              <input
              required
                type="text"
                defaultValue={isUpdate ? product?.description : ""}
                {...register("description")}
                className="grow"
                placeholder="product description"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              {...register("category")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {/* <option> {isUpdate ? product?.category : ""} </option> */}
              
              {
                categories?.data?.map((category:any)=><option key={category._id}>{category.name}</option>)
              }

              {/* Add more options here */}
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;
