import React from "react";
import LeftSidebar from "./LeftSidebar";
import NewsFeedScreen from "./NewsFeed";
import RightSidebar from "./RightSidebar";
import Navbar from "../../components/limb/Header/FacebookHeader";
const FacebookPage: React.FC = () => {
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
        <div className="lg:col-span-3 col-span-5  h-full">
          <NewsFeedScreen />
        </div>
        <div className="col-span-2 flex justify-end   ">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default FacebookPage;
