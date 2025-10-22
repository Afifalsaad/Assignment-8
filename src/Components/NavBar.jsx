import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#632ee3]" : ""
                  }
                  to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#632ee3]" : ""
                  }
                  to="/apps">
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#632ee3]" : ""
                  }
                  to="/installed">
                  Installed
                </NavLink>
              </li>
            </ul>
          </div>
          <img className="w-[30px] ml-2" src={logo} alt="" />
          <NavLink className="font-semibold text-[#632ee3]" to="/">
            APPS.WORLD
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632ee3] font-semibold"
                    : "font-semibold"
                }
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632ee3] font-semibold"
                    : "font-semibold"
                }
                to="/apps">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632ee3] font-semibold"
                    : "font-semibold"
                }
                to="/installed">
                Installed
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            className="btn text-white bg-linear-to-r from-[#632ee3] to-[#9f62f2]"
            to="https://github.com/">
            <FaGithub /> Contribute
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
