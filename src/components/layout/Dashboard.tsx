import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaCartArrowDown,
  FaCartPlus,
  FaHome,
  FaPlus,
  FaUsers,
} from "react-icons/fa";

import { TfiDashboard } from "react-icons/tfi";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
const Dashboard = () => {
  return (
    <div>
      <div className="flex  m-0 flex-col lg:flex-row  ">
        <div className=" w-80">
          <div className="drawer  lg:drawer-open z-20">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side  ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              {/* Sidebar content here */}

              <ul className=" menu p-4 w-60 min-h-full bg-slate-900 fixed  text-base text-white   ">
                {/*====================Admin Image====================== */}
                <div className="flex justify-center mb-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="avatar">
                      <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={
                            "https://media.gettyimages.com/id/610131510/photo/smiling-young-gardener.jpg?s=2048x2048&w=gi&k=20&c=9GgBXUjEfULFvPnUq6ru31j9NsiShIWOwZD0WNJNpjE="
                          }
                        />
                      </div>
                    </div>
                    <h2 className="block font-bold ml-4 mt-1">
                      {"Super Admin"}
                    </h2>
                  </div>
                </div>
                {/* =============admin image end================= */}
                <>
                  <li>
                    {" "}
                  
                    <Link to={"/dashboard"}>
                       <TfiDashboard/>
                      Dashboad
                    </Link>{" "}

                    <Link to={"/"}>
                      <FaHome></FaHome>
                      Go Home
                    </Link>
                    
                    
                  </li>
                </>
              </ul>
            </div>
          </div>
        </div>

        {/* </div> */}

        {/* Admin content */}
        <div className=" w-full  lg:max-w-7xl mx-auto md:p-12 lg:p-0">
          <AdminNavbar></AdminNavbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
