import React from "react";
import Card from "./CommentCard";
import facebook from "../../../database/facebook.json";

type commentsProps = {
  userProfilePiture: string;
  data: any[];
};

const Comments: React.FC<commentsProps> = (props) => {
  const {  data } = props;

  return (
    <div className="flex flex-col px-4 gap-y-4  no-scrollbar overflow-y-auto">
      <div className="bg-grey-lighter flex  gap-x-2">
        <img
          className="w-9 h-9 rounded-full"
          src={facebook?.user?.profilePicture}
          alt={facebook?.user?.name}
        />

        <div className="w-full cursor-not-allowed">
          <div className="bg-facebook-light h-auto rounded-3xl py-2 px-3 text-facebook-normal">
            <p className="text-sm md:text-base text-facebook-normal font-light">
              Write a comment...
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        {data?.map((comment, key) => {
          const { user, text, createdAt } = comment;
          return (
            <Card
              key={key}
              actionType="See"
              userProfilePictureURL={
                user.profilePicture ||
                "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
              }
              userName={user.name}
              comment={text}
              commentedAt={createdAt}
              cardClass="bg-transparent flex gap-x-2"
              userProfilePitureClass="rounded-full w-9 h-9 object-cover"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
