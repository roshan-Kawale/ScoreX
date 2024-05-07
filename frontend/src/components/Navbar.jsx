import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  let [open, setopen] = useState(false);

  const menus = [
    { name : "Create team" , link : "/createTeam"},
    { name : "Create Tournament" , link : "/createTournament" },
    { name : "Create Match" , link : "/createMatch"}
  ]
  return (

    <nav className="flex items-center justify-between pt-2 bg-[#ffffff0f] backdrop-blur-lg z-10">
      <div className="flex items-center">
        <div
          className=" cursor-pointer z-20 top-6 "
          onClick={() => setopen(!open)}
        >
          {open ? (
            <IoMdClose className=" text-white sm:w-10 h-5" />
          ) : (
            <FaBarsStaggered className=" text-white sm:w-10 h-5" />
          )}
        </div>
        {open &&  (<ul
          className={`bg-[#1412129f] backdrop-blur-md fixed duration-500 top-16 ease-linear h-auto z-40 ${
            !open ? "left-[-100%]" : "left-0"
          }`}
        >
          {menus.map((menu, index) => (
            <li
              key={index}
            className="m-4 border-b-2 border-transparent hover:border-white duration-300 "
            >
              <Link
                key={index}
                to={`${menu.link}`}
                className="text-white cursor-pointer font-Barlow font-normal text-md inline-block py-3"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>)}
        
        <Link to="/" className="sm:ml-7 ml-2">
          <h1 className="font-bold text-2xl flex ">
            <span className="text-white">Score</span>
            <span className="text-[#dc4318e9]">X</span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-5 pl-10 sm:pr-28 pr-2 py-2 static top-0 h-auto ">
        <form className="bg-slate-100 p-2 rounded-lg flex items-center border-y-2 border-transparent hover:border-orange-400 duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <Link to="/sign-up" className="px-3 mt-2 rounded-lg font-normal bg-blue-200 text-bold border-y-2 border-transparent hover:border-orange-400 duration-300">
        <button>
          Sign Up
        </button>
        </Link>
        
      </div>
    </nav>
  );
};
export default Navbar;
