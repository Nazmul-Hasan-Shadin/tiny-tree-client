import { addToCart } from "@/redux/feature/cart/cartSlice";

import { useAppDispatch } from "@/redux/hook";
import { get } from "http";
import React, { useEffect, useState } from "react";
import ProductCard from "../ui/productCard";
import Container from "@/container/Container";
import { FaFilter } from "react-icons/fa";
import { useGetAllProductQuery } from "@/redux/feature/product/productApi";

const Products = () => {
  const [page, setPage] = useState(1);
  const { data: productData, isLoading, error } = useGetAllProductQuery(page);


  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   getAllProduct(null);
  // }, [getAllProduct]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(productData);

  if (error) {
    return <div>Error fetching products</div>;
  }

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <Container>
      <div>
        <div className="flex justify-between  my-8">
          <h2 className="text-4xl text-primary-green font-bold pl-11">
            Our Products
          </h2>
          <FaFilter className="text-3xl text-primary-green font-bold" />
        </div>

        <div className="grid grid-cols-3 justify-items-center ">
          {productData?.data?.map((product) => (
            <ProductCard product={product} key={product?._id} />
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <button
          onClick={handlePrevPage}
          className="inset-x-0 bottom-0 flex justify-center bg-[#1e531d] font-bold hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-24 p-1 text-gray-100 hover:text-blue-900"
        >
          prev
        </button>
        <button
          onClick={handleNextPage}
          className="inset-x-0 bottom-0 flex justify-center bg-[#1e531d] font-bold hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-24 p-1 text-gray-100 hover:text-blue-900"
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default Products;
