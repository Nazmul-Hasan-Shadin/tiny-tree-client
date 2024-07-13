import { addToCart } from "@/redux/feature/cart/cartSlice";

import { useAppDispatch } from "@/redux/hook";
import { get } from "http";
import React, { useEffect, useState } from "react";
import ProductCard from "../ui/productCard";
import Container from "@/container/Container";
import { FaFilter } from "react-icons/fa";
import { useGetAllProductQuery } from "@/redux/feature/product/productApi";
import Search from "../ui/search/Search";

const Products = () => {
  const [page, setPage] = useState(1);
  const [searchFilter,setSearchFilter]=useState(false)
  const { data: productData, isLoading, error } = useGetAllProductQuery(page);


  const dispatch = useAppDispatch();

  if (isLoading) {
    return <div>Loading...</div>;
  }


  if (error) {
    return <div>Error fetching products</div>;
  }

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleSearchToggle=()=>{
       setSearchFilter(!searchFilter)
  } 

  return (
    <Container>
      <div>
        <div className="flex justify-between relative  my-8 w-12/12 h-full">
          <h2 className="text-4xl text-primary-green font-bold pl-11">
            Our Products
          </h2>
          <FaFilter onClick={handleSearchToggle}  className="text-3xl text-primary-green font-bold" />
          {
            searchFilter && (
              <div className="absolute w-full z-10   top-16">
                <Search></Search>
              </div>
            )
          }
        
        </div>

        <div className={`grid grid-cols-3 justify-items-center `}>
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
