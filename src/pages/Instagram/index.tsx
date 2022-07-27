import React, { useEffect, useState } from "react";
import InstagramHeader from "../../components/limb/Header/InstagramHeader";
import Stories from "./Stories";
import * as data from "../../database/instagram.json";
import AccountSwitch from "./AccountSwitch";
import Suggestions from "./Suggestions";
import Posts from "./Posts";
import Loader from "../../components/limb/Loader";

const Instagram: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user, stories, suggestions, posts } = data;

  useEffect(() => {
    if (isLoading) window.setTimeout(() => setIsLoading(!isLoading), 1000);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <Loader placeAt="page" forWhich="Instagram" />
      ) : (
        <div
          className={`bg-instagram-body ${
            posts?.length === 0 ? `h-screen main-content-wrapper` : `h-auto`
          }`}
        >
          <InstagramHeader profilePicture={user.profilePicture} />
          <div className="md:py-8 mt-14 md:mt-16">
            <div className="flex justify-center">
              <div className="flex w-full h-auto md:w-10/12 lg:w-7/12 md:gap-x-5 lg:gap-x-10">
                <div className="w-full md:w-7/12">
                  <Stories
                    currUserAvatar={user.profilePicture}
                    data={stories}
                  />
                  <Posts data={posts} />
                </div>
                <div className="hidden md:flex flex-col w-5/12 gap-y-5">
                  <AccountSwitch currUser={user} />
                  {suggestions?.length > 0 && (
                    <Suggestions data={suggestions} />
                  )}
                  <hr />
                  <p className="text-xs text-instagram-secondary font-light">
                    © 2022 INSTAGRAM FROM META
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Instagram;
