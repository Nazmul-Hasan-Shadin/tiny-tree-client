import { useGetAllProductQuery } from "@/redux/feature/product/productApi";
import { useState } from "react";
import Button from "../Button/Button";

const Search = ({ setFilter }) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  console.log(priceRange);

  console.log(category);

  const handleSearchFilter = () => {
    setFilter({ priceRange, category });
  };

  return (
    // style={{boxShadow: '2px 5px 5px 0px rgba(0,0,0,0.75)'}}
    <div className=" ">
      <div className="flex border gap-6  border-[#dbe0e6] justify-between bg-[#fff]  p-4   ">
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select h-[38px] select-bordered select-sm  w-full max-w-xs   "
          >
            <option disabled selected>
              select categories
            </option>
            <option> orange </option>
            <option>electronics</option>
            <option> mal</option>
          </select>
        </div>
        <div className="w-full">
          <select className="select h-[38px] select-bordered select-sm w-full max-w-xs">
            <option disabled selected>
              price range
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
        </div>
        <div className="w-full">
          <select className="select h-[38px] select-bordered select-sm w-full max-w-xs">
            <option disabled selected>
              sort
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
        </div>
        <div className="w-full flex justify-end" >
          <Button
            className="bg-primary-green  text-white"
            name="Apply Filter"
            onClick={handleSearchFilter}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
