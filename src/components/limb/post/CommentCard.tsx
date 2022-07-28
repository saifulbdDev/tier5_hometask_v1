/* eslint-disable react/require-default-props */
import React from "react";
import moment from "moment";
type UserCommentCardProps = {
  actionType: "Write" | "See";
  userProfilePictureURL: string;
  userName?: string;
  comment: string;
  commentedAt?: number;
  cardClass: string;
  userProfilePitureClass: string;
};

function CommentCard({
  actionType,
  userProfilePictureURL,
  userName,
  comment,
  commentedAt,
  cardClass,
  userProfilePitureClass,
}: UserCommentCardProps) {
  return (
    <div className={cardClass}>
      <img
        src={userProfilePictureURL}
        alt={comment}
        className={userProfilePitureClass}
      />
      <div
        className={
          actionType === "See" ? `w-auto` : `w-full cursor-not-allowed`
        }
      >
        <div className="bg-facebook-light h-auto rounded-3xl py-2 px-3 text-facebook-normal">
          {userName && (
            <p className="text-base text-facebook-dark font-normal">
              {userName}
            </p>
          )}
          <p
            className={`${
              actionType === "See"
                ? `text-sm text-facebook-dark font-light`
                : `text-base text-facebook-normal font-light`
            }`}
          >
            {comment}
          </p>
        </div>
        {commentedAt && (
          <p className="px-3 text-xs text-facebook-normal">
            {moment(commentedAt).fromNow()}
         
          </p>
        )}
      </div>
    </div>
  );
}

export default CommentCard;
