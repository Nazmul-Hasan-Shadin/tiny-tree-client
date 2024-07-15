import { GiEarthAfricaEurope } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";


const AdminNavbar = () => {

   
  return (
    <div>
      <div className="navbar justify-between overflow-x-auto bg-base-100">
        <div className="form-control  relative  ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered pl-12 w-60 bg-[#F6F6F7] h-10 md:w-auto"
          />
          <IoIosSearch className="absolute start-3 text-xl top-1/3" />
        </div>

        <div className="flex-none gap-12">
          <div className="flex text-5xl gap-7">
            <GiEarthAfricaEurope className="bg-[#F6F7F8] rounded-xl p-2" />
            <span className="relative">
              <SiGmail className="bg-[#F6F7F8]  rounded-xl p-2" />
              <div className="badge bg-green-600 text-white badge-secondary -top-1 text-sm left-7 absolute">
                +0
              </div>
            </span>
            <IoIosNotifications className="bg-[#F6F7F8] rounded-xl p-2" />
          </div>
          <div className="dropdown dropdown-end">
            <div className="flex items-center gap-3">
              <div
                tabIndex={0}
                role="button"
                className="btn flex btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    className=""
                    src={'https://media.gettyimages.com/id/610131510/photo/smiling-young-gardener.jpg?s=2048x2048&w=gi&k=20&c=9GgBXUjEfULFvPnUq6ru31j9NsiShIWOwZD0WNJNpjE='}
                    alt="image not found"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="font-medium h-4">public user</h2>
                <span className="text-[12px] ">public admin</span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">visitor</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
