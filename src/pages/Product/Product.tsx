import ProductCard from "@/components/ui/productCard";
import Search from "@/components/ui/search/Search";
import { useGetAllProductQuery } from "@/redux/feature/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Product = () => {
  const [page, setPage] = useState(1);
  const [filterToggle, setFilterToggle] = useState(false);
  // const [filter, setFilter] = useState({ priceRange: "", category: "" });
  const productFilters = useAppSelector((state) => state.filter.productFilters);

  const {
    data: productData,
    isLoading,
    error,
  } = useGetAllProductQuery({ page, ...productFilters });

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

  const handleSearchToggle = () => {
    setFilterToggle(!filterToggle);
  };
  return (
    <div>
      <div className="flex justify-between relative  my-8 w-12/12 h-full">
        <h2 className="text-4xl text-primary-green font-bold ">Our Products</h2>
        {filterToggle ? (
          <MdCancel
            className="text-4xl text-red-700"
            onClick={handleSearchToggle}
          />
        ) : (
          <FaFilter
            onClick={handleSearchToggle}
            className="text-4xl text-primary-green font-bold"
          />
        )}

        {filterToggle && (
          <div
            className={`${
              filterToggle ? "slideDown" : ""
            } absolute w-full z-10   top-16`}
          >
            <Search isHomePage={false
            } />
          </div>
        )}
      </div>
      <div
        className={`grid grid-cols-1  md:grid-cols-4 justify-items-center ${
          filterToggle ? "mt-28" : "mt-0"
        }`}
      >
        {productData?.data?.map((product) => (
          <ProductCard product={product} key={product?._id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
