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
  description:string;
  category: string;
}

type Product= {
  _id?: string;
  image: string;
  description:string;
  title: string;
  price: number;
  quantity: number;
  rating: number;
  category: string;
}

interface UpdateProductFormProps {
  product?: Product;
  isUpdate: boolean;
}
const UpdateProductForm= ({ product, isUpdate }:UpdateProductFormProps) => {
  console.log(isUpdate);
  


 

  const { register, handleSubmit } = useForm<Inputs>();
  const [UpdateProduct] = useUpdateProductMutation();
  const [addProduct] = useCreateProductMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isUpdate && product?._id) {
       const _id=product._id

      UpdateProduct({ _id, data });
      toast.success("Succesfully product has updated");
    }else{
      addProduct(data)
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              Image Link
              <input
                type="text"
                {...register("image")}
                defaultValue={isUpdate ? product?.image : ""}
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              title
              <input
                type="text"
                {...register("title")}
                defaultValue={isUpdate ? product?.title : ""}
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              price
              <input
                type="text"
                {...register("price")}
                defaultValue={isUpdate? product?.price : ""}
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              quantity
              <input
                type="text"
                {...register("quantity")}
                defaultValue={isUpdate? product?.quantity : ""}
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              rating
              <input
                type="text"
                defaultValue={isUpdate? product?.rating : ""}
                {...register("rating")}
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              description
              <input
                type="text"
                defaultValue={isUpdate? product?.description : ""}
                {...register("description")}
                className="grow"
                placeholder="daisy@site.com"
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
              <option> {isUpdate? product?.category : ""} </option>
              <option> Fruit </option>
              <option>Flower</option>
              <option> Tree </option>
              <option>Juse </option>

              {/* Add more options here */}
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;