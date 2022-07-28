import React from "react";
import LeftSidebar from "./leftSidebar";
import NewsFeedScreen from "./newsFeed";
import RightSidebar from "./rightSidebar";
import Navbar from "../../components/Limb/Header/FacebookHeader";
const Facebook: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />

      <div
        className=" h-full grid grid-cols-7 ml-2 pr-2 "
        style={{ marginTop: "3.5rem", minHeight: "calc(100% - 4rem)" }}
      >
        <div className="col-span-2  justify-start  hidden lg:flex">
          <LeftSidebar />
        </div>
        <div className="lg:col-span-3 tablet:col-span-5 col-span-7  h-full">
          <NewsFeedScreen />
        </div>
        <div className="col-span-2 tablet:flex justify-end hidden">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Facebook;
