import './SubNavlink.css'
import { MdOutlineCancel } from "react-icons/md";
import "./subnavAnimation.css";
import { Link, NavLink } from "react-router-dom";

type SubNavbarProps = {
  setShowNav?: React.Dispatch<React.SetStateAction<boolean>>; 
  showNav?: boolean; 
};
const SubNavbar = ({ setShowNav, showNav }:SubNavbarProps) => {
  const links = (
    <>
      <NavLink to={'/'}>
        <li className="p-2 md:p-0 md:bg-none nav-link ">Home</li>
      </NavLink>
       <Link to={'/'}><li className=" p-2 md:p-0 md:bg-none nav-link ">Shop</li></Link>
       <Link to={'/cart'}>  <li className=" p-2 md:p-0 md:bg-none  nav-link">Cart</li></Link>
   <Link to={'/products'}>   <li className=" p-2 md:p-0 md:bg-none nav-link ">Products</li></Link>
    <Link to={'/dashboard'}>  <li className=" p-2 md:p-0 md:bg-none nav-link ">Dashboard</li></Link>
    </>
  );

  return (
    <div
      className={`  fixed top-0   h-full w-11/12 md:w-  md:pb-3 md:pt-2 md:relative   font-bold  z-20 bg-[#fff]   ${
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
            onClick={() =>  setShowNav &&  setShowNav(!showNav)}
            className={`absolute lg:hidden right-3 top-5 text-xl   `}
          />
          {links}
        </ul>
      </div>
    </div>
  );
};

export default SubNavbar;
