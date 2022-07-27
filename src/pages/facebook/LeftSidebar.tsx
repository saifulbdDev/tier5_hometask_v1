import React, { useState } from "react";
import data from "../../database/facebook.json";
import { More } from "../../icon";

const LeftSidebar: React.FC = () => {

  const [itemsToShow, setItemsToShow] = useState(4);
  const { user, left_menus } = data;
  const showMore = () => {
    const num = itemsToShow === 4 ? left_menus.length : 4;
    setItemsToShow(num);
  };

  return (
    <div className="side-bar py-3 fixed  bottom-0 top-0 h-full  overflow-x-hidden">
      <ul className="w-full text-gray-600 mt-14">
        <li className="h-12   scroll-pt-50 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div className="w-8 h-8 rounded-full">
            <img
              className="w-full h-full rounded-full"
              src={user.profilePicture}
              alt={user.name}
            />
          </div>
          <div>
            <p className="font-medium text-sm text-gray-900">{user.name}</p>
          </div>
        </li>
        {left_menus.slice(0, itemsToShow).map((menu, key) => (
          <li key={key} className="h-12  flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
            <div>
              <img
                className="w-8 h-8 rounded-full"
                src={menu.image}
                alt="user"
              />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900">{menu.title}</p>
            </div>
          </li>
        ))}
        <li
          onClick={showMore}
          className="h-12  flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200"
        >
          <>
            <div className="">
              {itemsToShow === 4 ? (
                <More className="w" height={20} width={20} />
              ) : (
                <More className="rotate-180" height={20} width={20} />
              )}
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900">
                {itemsToShow === 4 ? "See more" : "See less"}{" "}
              </p>
            </div>
          </>
        </li>
      
      </ul>
    </div>
  );
};

export default LeftSidebar;
