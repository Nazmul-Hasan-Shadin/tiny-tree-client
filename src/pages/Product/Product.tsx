import ProductCard from "@/components/ui/productCard";
import { useGetAllProductQuery } from "@/redux/feature/product/productApi";
import { useAppDispatch } from "@/redux/hook";
import React, { useState } from "react";

const Product = () => {
  const [page, setPage] = useState(1);
  const [filterToggle, setFilterToggle] = useState(false);
  const [filter, setFilter] = useState({ priceRange: "", category: "" });

  const {
    data: productData,
    isLoading,
    error,
  } = useGetAllProductQuery({ page, ...filter });

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
