import React, { useState } from "react";



import PostActions from "../../components/limb/post/social/PostActions";
import AddComment from "./AddComment";
import PostComments from "../../components/limb/post/social/PostComments";
import Card from "../../components/limb/Card";
import { User, PostProps } from "../../types/global";

type TopContentOfCardProps = User & {
  image: string;
};

function TopContentOfCard({
  hasStory,
  profilePicture,
  username,
  image,
}: TopContentOfCardProps) {
  return (
    <>
      <div className="flex justify-between items-center w-full h-9 px-4">
        <div className="flex justify-between gap-x-3 items-center">
          <div
            className={`relative rounded-full w-11 h-11 flex justify-center items-center ${
              hasStory ? `bg-gradient-to-r to-yellow-500 from-pink-500` : ``
            }`}
          >
            <img
              src={
                profilePicture ||
                "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
              }
              alt="Profile"
              className="rounded-full w-10 h-10 object-cover"
            />
          </div>

          <div>
            <p className="text-sm text-facebook-dark font-semibold">
              {username}
            </p>
          </div>
        </div>
        <div className="text-instagram-tertiary h-4 w-4 md:h-5 md:w-5 cursor-not-allowed" />
      </div>
      <div>
        {image && (
          <img
            src={image}
            alt="Post"
            className="max-w-full h-auto"
          />
        )}
      </div>
    </>
  );
}

type BottomContentOfCardProps = {
  description: string;
  postedOn: string;
  likes: number;
  liked: boolean;
  comments: any[];
};

function BottomContentOfCard({
  description,
  postedOn,
  likes,
  liked,
  comments,
}: BottomContentOfCardProps) {
  const [showComments, setShowComments] = useState<boolean>(false);

  return (
    <>
      <PostActions
        forWhich="Instagram"
        liked={liked}
        commentHandler={setShowComments}
        proceedToComment={showComments}
      />
      <div className="px-4 flex flex-col gap-y-1">
        {likes > 0 && (
          <p className="text-base text-instagram-primary font-semibold">{`${likes} ${
            likes > 1 ? `likes` : `like`
          }`}</p>
        )}
        {description && (
          <p className="text-base text-facebook-dark font-light">
            {description}
          </p>
        )}
        {comments?.length > 0 && (
          <p
            className="text-sm text-instagram-secondary font-semibold cursor-pointer"
            onClick={() => setShowComments(!showComments)}
            aria-hidden="true"
          >{`${showComments ? `Hide` : `View`} all ${comments.length} ${
            comments?.length > 1 ? `comments` : `comments`
          }`}</p>
        )}
        <p className="text-xs text-instagram-secondary font-normal uppercase">
          {/* {helpers.getTimeAgo(postedOn)} */}
        </p>
      </div>
      {showComments && <PostComments forWhich="Instagram" data={comments} />}
      <AddComment />
    </>
  );
}

function CardContent({
  user,
  description,
  image,
  postedOn,
  likes,
  liked,
  comments,
}: PostProps) {
  const { name, username, profilePicture } = user;
  return (
    <>
      <TopContentOfCard
        name={name}
        profilePicture={profilePicture}
        image={image}
        username={username}
      />
      <BottomContentOfCard
        description={description}
        postedOn={postedOn}
        likes={likes}
        liked={liked}
        comments={comments}
      />
    </>
  );
}

function Post({
  id,
  user,
  description,
  image,
  postedOn,
  likes,
  liked,
  comments,
}: PostProps) {
  return (
    <Card
      id={id}
      className="bg-white w-full h-auto md:border border-gray-300 md:rounded-lg py-3 flex flex-col gap-y-3 shadow-sm md:shadow-none"
      key={id}
      content={
        <CardContent
          id={id}
          user={user}
          description={description}
          image={image}
          postedOn={postedOn}
          likes={likes}
          liked={liked}
          comments={comments}
        />
      }
    />
  );
}

export default Post;
