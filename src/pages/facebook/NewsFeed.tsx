import React from "react";
import CreatePostBox from "../../components/limb/post/CreatePostBox";
import PostContainer from "../../components/container/PostContainer";
import Story from "../../components/limb/story";
import facebook from "../../database/facebook.json";

const NewsFeed: React.FC = () => {
  return (
    <div className="mt-6 w-full h-full pb-5">
      {/* Story Section */}
      <div className="w-full h-50 flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
        <div
          className="w-28 h-48 relative rounded-xl shadow bg-center hover:opacity-15 bg-cover"
          style={{ backgroundImage: `url(${facebook.user.profilePicture})` }}
        >
          <div
            className="w-full absolute flex justify-center"
            style={{ bottom: "13%" }}
          >
            <button className="focus:outline-none z-40 w-10 h-10 bg-facebook-primary rounded-full border-4 border-white">
              <i className="text-white fas fa-plus"></i>
            </button>
          </div>
          <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg ">
            <p className="text-gray-900 text-xs font-bold">Create Story</p>
          </div>
        </div>

        {facebook?.posts?.map((post, key) => {
          const {
            user,

            image,
          } = post;
          return (
            <Story
            key={`story-${key}`}
              user={{
                name: user.name,
                profilePicture: user.profilePicture,
              }}
              image={image}
            />
          );
        })}
      </div>
      {/* Create Post       */}
      <div className="w-[500px] max-w-full mx-auto">
      <CreatePostBox name={facebook.user.name} profilePicture={facebook.user.profilePicture} />
      {/* All posts */}
      <PostContainer />
      </div>
    </div>
  );
};

export default NewsFeed;
