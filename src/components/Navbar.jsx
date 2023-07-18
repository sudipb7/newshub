import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/favicon.png";

const Navbar = () => {
  return (
    <nav className="flex shadow-sm shadow-violet-600 justify-between lg:justify-evenly bg-slate-700 items-center p-4">
      <div className="text-violet-600 text-xl font-semibold">
        <Link to="/" className="flex justify-center items-center gap-x-3">
          <img src={icon} alt="" />
          NewsHub
        </Link>
      </div>
      <ul className="hidden lg:flex flex-row items-center justify-center gap-y-1 lg:gap-x-2">
        <li>
          <Link
            className="text-white font-semibold px-6 py-2 hover:text-gray-200 transition-all ease-linear duration-200"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-white font-semibold px-6 py-2 hover:text-gray-200 transition-all ease-linear duration-200"
            to="/business"
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            className="text-white font-semibold px-6 py-2 hover:text-gray-200 transition-all ease-linear duration-200"
            to="/health"
          >
            Health
          </Link>
        </li>
        <li>
          <Link
            className="text-white font-semibold px-6 py-2 hover:text-gray-200 transition-all ease-linear duration-200"
            to="/technology"
          >
            Technology
          </Link>
        </li>
        <li>
          <Link
            className="text-white font-semibold px-6 py-2 hover:text-gray-200 transition-all ease-linear duration-200"
            to="/science"
          >
            Science
          </Link>
        </li>
        <li>
          <Link
            className="text-white font-semibold px-6 py-2 hover:text-gray-200 transition-all ease-linear duration-200"
            to="/sports"
          >
            Sports
          </Link>
        </li>
        <li>
          <Link
            className="text-white font-semibold px-6 py-2 hover:text-gray-200 transition-all ease-linear duration-200"
            to="/entertainment"
          >
            Entertainment
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
