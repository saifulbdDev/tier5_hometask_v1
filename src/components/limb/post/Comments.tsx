import React from "react";
import Card from "./CommentCard";
import facebook from '../../../database/facebook.json'

type commentsProps = {
  userProfilePiture: string;
  data: any[];
};

const Comments: React.FC<commentsProps> = (props) => {
  const { userProfilePiture, data } = props;

  return (
    <div className="flex flex-col px-4 gap-y-4">
      <div className="bg-grey-lighter flex flex-between py-3 -mx-3 p-2">
        <img
          className="w-8 h-8 rounded-full"
          src={facebook?.user?.profilePicture}
          alt={facebook?.user?.name}
        />
  
        <textarea
          name="body"
          placeholder="Write a comment..."
          className=" bg-gray-200 border-none text-instagram-primary text-sm rounded-lg block w-full pl-10 p-2 focus:outline-none"
        ></textarea>
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
