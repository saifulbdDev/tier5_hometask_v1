import React from "react";
import { PostCommentsProps } from "../../../../types/global";

import UserCommentBox from "./UserCommentBox";



function PostComments({ isLoading, data }: PostCommentsProps) {
  return (
    <div className="flex flex-col px-4 gap-y-4 max-h-52 no-scrollbar overflow-y-auto border-t border-gray-300 pt-4">
     
        <div className="flex flex-col gap-y-5 mb-2">
          {data?.map((comment) => {
            const { user, text, createdAt } = comment;
            return (
              <UserCommentBox
                key={Math.floor(Math.random() * 100)}
                forWhich="Instagram"
                userProfilePictureURL={
                  user.profilePicture ||
                  "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
                }
                userName={user.username}
                comment={text}
                commentedAt={createdAt}
                boxClass="flex gap-x-2 items-start"
                userProfilePitureClass="rounded-full w-8 h-8 object-cover"
              />
            );
          })}
        </div>
     
    </div>
  );
}



export default PostComments;
