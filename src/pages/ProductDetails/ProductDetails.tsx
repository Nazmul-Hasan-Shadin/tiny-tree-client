import { addToCart } from "@/redux/feature/cart/cartSlice";
import { useGetProductByIdQuery } from "@/redux/feature/product/productApi";
import { useAppDispatch } from "@/redux/hook";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: productData,isLoading } = useGetProductByIdQuery(id);
  

   const {quantity,description}=productData?.data;
   console.log(productData);
   
    
   if (isLoading) {
    return <div>Loading</div>
   }

  const {image,title,rating,price}=productData?.data 

  const dispatch= useAppDispatch()

  const handleAddToCart=()=>{
      dispatch(addToCart(productData))
  }


  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src= {image}
            alt="Product Image"
          />
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
           {title}
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            Price: <span className="text-red-500 font-bold">$ {price}</span>
          </p>
          <p className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-2 text-gray-600"> {rating} (76 reviews)</span>
          </p>
          <ul className="list-disc pl-5 mb-6">
         {description}
          </ul>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2 text-gray-600 text-sm">
              Quantity:
            </label>
            <select
              id="quantity"
              className="border rounded-md p-2 text-gray-600 text-sm"
            >
            <option value=""> {quantity} </option>
            </select>
          </div>
          <button onClick={handleAddToCart} className="bg-primary-green text-white px-4 py-2 rounded-md hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
