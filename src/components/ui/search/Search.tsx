
import { useCallback, useState } from "react";
import Button from "../Button/Button";
import { useAppDispatch } from "@/redux/hook";
import { setHomeFilter, setProductFilter } from "@/redux/feature/product/productSlice";
import { useGetAllCategoriesQuery } from "@/redux/api/categoriesBaseApi";

interface SearchProps {
  isHomePage: boolean;
}


interface Category {
  _id: string;
  name: string;
  image?:string
}


const debounce=(func:(...args:any[])=>void,deley:number)=>{
  let timer:NodeJS.Timeout
return (...arg:any[])=>{
   clearTimeout(timer)
   timer=setTimeout(()=>func(...arg),deley)
}
}

const Search = ( {isHomePage}:SearchProps) => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [priceRange]=useState('')
  
 const {data:allCategory}=useGetAllCategoriesQuery(undefined)
      
  const dispatch=useAppDispatch()


  const handleSearchFilter = useCallback(
    debounce(() => {
      if (isHomePage) {
        dispatch(setHomeFilter({ category, sort, priceRange }));
      } else {
        dispatch(setProductFilter({ category, sort, priceRange }));
      }
    }, 400),
    [category, sort, dispatch,isHomePage]
  );

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
           {
            allCategory?.data?.map((category:Category)=><option key={category?._id}> {category?.name}</option>)
           }
          </select>
        </div>
        <div className="w-full">
          <select  className="select h-[38px] select-bordered select-sm w-full max-w-xs">
            <option disabled selected>
              price range
            </option>
            <option >Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
        </div>
        <div className="w-full">
          <select  onChange={(e) => setSort(e.target.value)} className="select h-[38px] select-bordered select-sm w-full max-w-xs">
            <option disabled selected>
              sort
            </option>
            <option value={"priceLowToHigh"} > price low to high </option>
            <option value={"priceHighToLow"}>price High to low</option>
           
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
