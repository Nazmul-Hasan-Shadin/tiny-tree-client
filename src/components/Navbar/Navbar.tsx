import { RxAvatar } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import logo from "@/assets/icons/logo.webp";
import SubNavbar from "./SubNavbar";
import NavbarTop from "./NavbarTop";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { setHomeFilter, setProductFilter } from "@/redux/feature/product/productSlice";
import { useLocation } from "react-router-dom";
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};


const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const location = useLocation();

  
  
  const handleSearchFilter = useCallback(
    debounce(() => {
      if (location.pathname === "/products") {
        dispatch(setProductFilter({ searchTerm }));
      } else {
        dispatch(setHomeFilter({ searchTerm }));
      }
    }, 3000),
    [searchTerm, dispatch,location.pathname]
  );
  useEffect(() => {
    handleSearchFilter();
  }, [searchTerm, handleSearchFilter]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearchFilter();
  };

  return (
    <div className="flex flex-col gap-y-3">
      <NavbarTop></NavbarTop>
      <div className="bg-[#FFFFFF]  ">
        <div className="flex justify-around  items-center  ">
          <div className=" flex items-center gap-2">
            <IoMdMenu
              onClick={() => setShowNav(!showNav)}
              className="block md:block lg:hidden text-2xl"
            />
            <img className="  w-40 lg:w-44 md:h-16 " src={logo} alt="" />
          </div>
          {/* searc for medium device */}
          <div className="hidden md:block">
            <label className="input  md:w-10/12 lg:w-[547px] rounded-2xl input-bordered flex items-center gap-56  ">
              <input  onChange={handleSearchChange} type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          {/*  search  for small device */}
          <div className="text-2xl block md:hidden">
            <IoSearchOutline />
          </div>
          {/*  icons  */}
          <div className=" text-4xl text-[#8ABB54]  flex   items-center gap-3 md:gap-12">
            <span className="">
              <RxAvatar />
            </span>
            <span>
              <CiShoppingCart />
            </span>
          </div>
        </div>
        {/*  ==================sidebar============== */}
        <div className="hidden lg:block">
          <SubNavbar></SubNavbar>
        </div>
        <div className="block lg:hidden   ">
          {showNav && (
            <SubNavbar setShowNav={setShowNav} showNav={showNav}></SubNavbar>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
