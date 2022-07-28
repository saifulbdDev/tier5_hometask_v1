import React from "react";
import { Link, useLocation } from "react-router-dom";
import { topMenus, bottomMenus } from "./menu";
import { Facebook, Search } from "../../../icon";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathName = location?.pathname;
  return (
    <div className="w-full h-14 bg-white grid grid-cols-7 drop-shadow-md tablet:gap-4 p-1 fixed z-50">
      <div className="col-span-2    flex items-center">
        <div className="flex items-center ml-2">
          <div className="h-10 text-facebook-primary">
            <Link to="/facebook">
              <Facebook height={40} width={40} className="m" />
            </Link>
          </div>
         
            <div className="relative h-10 xl:w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Search
                  className=" fill-gray-400 dark:text-gray-200 xl:ml-2 ml-1"
                  width={24}
                  height={20}
                />
              </div>
              <input
                placeholder="Search Facebook"
                className="bg-gray-100 rounded-full xl:w-full w-0 h-full xl:pl-10   focus:outline-none ml-2  text-gray-700 xl:pr-4 px-5 "
              />
          
          </div>
        </div>
      </div>
      <div className="col-span-3 md:flex hidden  items-center justify-center tablet:space-x-2">
        {topMenus.map((item, key) => {
          const { icon, link, notification } = item;
          return (
            <Link
              to={link}
              key={`top_menu-${key}`}
              className={`h-full   ${
                pathName === link
                  ? "text-facebook-primary flex border-facebook-primary border-b-4"
                  : "text-gray-600"
              }`}
            >
              <div
                className={`w-24 h-12 rounded-lg flex items-center tablet:justify-center cursor-pointer  ${
                  pathName === link ? "" : "hover:bg-gray-100"
                }`}
              >
                <div className="w-14 h-auto relative flex items-center tablet:justify-center">
                  {notification > 0 ? (
                    <div className="absolute bg-red-500   text-white text-xs font-bold px-1 rounded-lg top-0 right-0">
                      9+
                    </div>
                  ) : (
                    ""
                  )}

                  {icon}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="md:col-span-2   col-span-5 flex items-center justify-end  space-x-2  pr-2">
        {bottomMenus.map((item, key) => {
          const { icon, link } = item;
          return (
            <Link
              key={`bottom_menu-${key}`}
              to={link}
              className="w-10 h-10 flex items-center bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full"
            >
              {icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
