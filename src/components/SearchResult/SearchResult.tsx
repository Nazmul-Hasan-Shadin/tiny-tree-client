import { useGetAllProductQuery } from "@/redux/feature/product/productApi";
import { useAppSelector } from "@/redux/hook";
import React from "react";

const SearchResult = () => {
  const filterState = useAppSelector((state) => state.filter.homeFilters);
  
  const {
    data: productData,
    isLoading,
    error,
  } = useGetAllProductQuery({ ...filterState });

  if (isLoading) {
    return <div className="p-4 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Something went wrong!</div>;
  }

  if (!productData?.data || productData.data.length === 0) {
    return <div className="p-4 text-gray-500">No results found</div>;
  }

  return (
    <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 shadow-lg z-50 max-h-60 overflow-y-auto">
      <ul>
        {productData.data.map((product) => (
          <li key={product._id} className="p-2 hover:bg-gray-100 cursor-pointer">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
