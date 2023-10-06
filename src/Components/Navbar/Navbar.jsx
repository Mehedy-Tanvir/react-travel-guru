import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="lg:text-white text-[16px] font-medium">
        <NavLink to="/news">News</NavLink>
      </li>
      <li className="lg:text-white text-[16px] font-medium">
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li className="lg:text-white text-[16px] font-medium">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li className="lg:text-white text-[16px] font-medium">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <button className="lg:btn lg:bg-[#F9A51A] normal-case border-none lg:rounded-[5px] text-[16px] lg:font-medium">
          Login
        </button>
      </li>
    </>
  );
  return (
    <div className="container flex items-center justify-between px-2 pt-[35px] mx-auto border border-black bg-slate-500">
      <div>
        <img className="" src="/nav_logo.svg" alt="" />
      </div>
      <div className="flex gap-[44px] justify-between items-center">
        <div className="join flex items-center pl-[14px] space-x-[14px] h-[44px] focus:outline-none border border-white rounded-[5px] bg-[#FFFFFF33]">
          <img className="w-6 h-6 join-item" src="/search-icon.svg" alt="" />
          <input
            type="text"
            placeholder="Search your Destination..."
            className="join-item placeholder:text-white placeholder:text-[16px] placeholder:font-medium lg:w-[280px] xl:w-[320px] max-w-xs bg-transparent text-white outline-none"
          />
        </div>
        <ul className="lg:flex gap-[50px] justify-center items-center hidden">
          {links}
        </ul>
      </div>
      <div className="dropdown lg:hidden dropdown-left">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
