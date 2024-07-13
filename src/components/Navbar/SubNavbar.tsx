import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import "./subnavAnimation.css";
const SubNavbar = ({ setShowNav, showNav }) => {
  return (
    <div
      className={`  fixed top-0  h-full w-11/12 md:w-  md:pb-3 md:pt-2 md:relative   font-bold  z-20 bg-[#fff]   ${
        showNav ? "slide-in " : ""
      } `}
      style={{ boxShadow: "rgb(0 0 0 / 20%) 0px 4px 5px" }}
    >
      <div className="relative ">
        <div className=" block lg:hidden">
          <ul className="flex text-center ">
            <li className=" flex-1 bg-primary-green py-4 px-10 text-white">
              Menue
            </li>
            <li className="flex-1 py-4 px-10">Account</li>
          </ul>
        </div>
        <ul className="flex    flex-col md:flex  w-full lg:flex  md:w-full lg:flex-row gap-2 lg:gap-16 pl-7 lg:pl-[87px]">
          <MdOutlineCancel
            onClick={() => setShowNav(!showNav)}
            className={`absolute lg:hidden right-3 top-5 text-xl   `}
          />
          <li className="p-2 md:p-0 md:bg-none ">Home</li>
          <li className=" p-2 md:p-0 md:bg-none ">Shop</li>
          <li className=" p-2 md:p-0 md:bg-none ">Products</li>
          <li className=" p-2 md:p-0 md:bg-none ">About</li>
        </ul>
      </div>
    </div>
  );
};

export default SubNavbar;
