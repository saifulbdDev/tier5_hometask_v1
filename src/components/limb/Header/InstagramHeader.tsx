/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import {instagramMenus} from "./menu"
import { Search } from "../../../icon";
import { Link } from "react-router-dom";

type InstagramHeaderProps = {
  profilePicture: string;
};

function InstagramHeader({ profilePicture }: InstagramHeaderProps) {
  const [query, setSearch] = useState<string>("");
  return (
    <div className="fixed top-0 w-full bg-white shadow  z-20">
      <div className="header-container">
        <div className="">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
              alt="Profile "
              className="w-auto h-10"
            />
          </Link>
        </div>
        <div className="sm:flex hidden ">
          <form className="flex items-center">
            <div className="relative w-full h-9">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <Search   className=" fill-gray-400 dark:text-gray-200" width={24} height={24}/>
            
              </div>
              <input
                className=" bg-gray-200 border-none text-instagram-primary text-sm rounded-lg block w-full pl-10 p-2 focus:outline-none"
                type="text"
                placeholder="Search"
                value={query}
                onChange={e => {
                  setSearch
                }}
              />
            </div>
          </form>
        </div>
        <div className="sm:col-span-1 col-span-2 ">
          <div className="flex justify-end tablet:gap-5 sm:gap-2 gap-2 ">
            {instagramMenus.map((item, key) => {
              const { icon, link } = item;
              return (
                <Link
                  key={`bottom_menu-${key}`}
                  to={link}
                  className=" flex items-center "
                >
                  {icon}
                </Link>
              );
            })}
            <Link to="/">
              <img
                src={profilePicture}
                alt="user"
                className="rounded-full w-7 h-7 object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramHeader;
