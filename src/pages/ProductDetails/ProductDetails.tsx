import { addToCart } from "@/redux/feature/cart/cartSlice";
import { useGetProductByIdQuery } from "@/redux/feature/product/productApi";
import { useAppDispatch } from "@/redux/hook";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: productData, isLoading ,} = useGetProductByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { image, title, rating, price, category, quantity, description } = productData?.data;
  // const dispatch = useAppDispatch();

  // const handleAddToCart = () => {
  //   dispatch(addToCart(productData));
  //   toast.success('Product added to cart!');
  // };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={`${title} Image`}
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-medium text-gray-600">
              Price: <span className="text-red-500 font-bold">$ {price}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-2 text-lg">{rating} (76 reviews)</span>
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Description:</h3>
            <ul className="list-disc pl-5 text-gray-600">{description}</ul>
          </div>
          <div className="flex justify-between mb-4 text-lg text-gray-700">
            <div>
              <span className="font-medium">Quantity:</span> {quantity}
            </div>
            <div>
              <span className="font-medium">Category:</span> {category}
            </div>
          </div>
          {/* <button
            onClick={handleAddToCart}
            className="bg-[#054004] text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
