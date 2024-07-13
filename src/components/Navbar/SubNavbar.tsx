import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import "./subnavAnimation.css";
const SubNavbar = ({ setShowNav, showNav }) => {
  return (
    <div
      className={`  fixed  h-full w-full md:w-full  md:pb-3 md:pt-2 md:relative   font-bold text-[18px]    ${
        showNav ? "slide-in " : ""
      } `}
      style={{ boxShadow: "rgb(0 0 0 / 20%) 0px 4px 5px" }}
    >
      <ul className="flex  relative flex-col md:flex  lg:flex w-3/4  md:w-full lg:flex-row gap-2 lg:gap-16 pl-7 lg:pl-[87px]">
        <MdCancel
          onClick={() => setShowNav(!showNav)}
          className={`absolute md:hidden -right-8 -top-3  `}
        />
        <li className="bg-[#E5E5E5] md:bg-transparent p-2 md:p-0 md:bg-none ">
          Home
        </li>
        <li className="bg-[#E5E5E5]  md:bg-transparent p-2 md:p-0 md:bg-none ">
          Shop
        </li>
        <li className="bg-[#E5E5E5]  md:bg-transparent p-2 md:p-0 md:bg-none ">
          Products
        </li>
        <li className="bg-[#E5E5E5]  md:bg-transparent p-2 md:p-0 md:bg-none ">
          About
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
