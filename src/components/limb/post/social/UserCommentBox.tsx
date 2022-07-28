/* eslint-disable react/require-default-props */
import React from "react";

import { UserCommentBoxProps } from "../../../../types/global";

function UserCommentBox({
  userProfilePictureURL,
  userName,
  comment,
  commentedAt,
  userProfilePitureClass,
}: UserCommentBoxProps) {
  return (
    <div className="flex gap-x-2 items-start">
      <img
        src={userProfilePictureURL}
        alt="Profile"
        className={userProfilePitureClass}
      />
      <div className="flex flex-col gap-y-3">
        <p className="text-sm text-instagram-primary font-normal">
          <span className="font-semibold">{userName}</span>&nbsp;{comment}
        </p>
        {commentedAt && <p className="text-xs text-instagram-secondary"></p>}
      </div>
    </div>
  );
}

export default UserCommentBox;
