/* eslint-disable react/require-default-props */
import React from "react";


import { UserCommentBoxProps } from "../../../../types/global";

function Facebook({
  actionType,
  userProfilePictureURL,
  userName,
  comment,
  commentedAt,
  boxClass,
  userProfilePitureClass,
}: UserCommentBoxProps) {
  return (
    <div className={boxClass}>
      <img
        src={userProfilePictureURL}
        alt="Profile"
        className={userProfilePitureClass}
      />
      <div
        className={
          actionType === "See" ? `w-auto` : `w-full cursor-not-allowed`
        }
      >
        <div className="bg-facebook-light h-auto rounded-3xl py-2 px-3 text-facebook-normal">
          {userName && (
            <p className="text-xs text-facebook-dark font-semibold">
              {userName}
            </p>
          )}
          <p
            className={`${
              actionType === "See"
                ? `text-sm text-facebook-dark font-light`
                : `text-sm md:text-base text-facebook-normal font-light`
            }`}
          >
            {comment}
          </p>
        </div>
        {commentedAt && (
          <p className="px-3 text-xs text-facebook-normal mt-1">
          
          </p>
        )}
      </div>
    </div>
  );
}

function Instagram({
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
        {commentedAt && (
          <p className="text-xs text-instagram-secondary">
           
          </p>
        )}
      </div>
    </div>
  );
}

function UserCommentBox({
  forWhich,
  actionType,
  userProfilePictureURL,
  userName,
  comment,
  commentedAt,
  boxClass,
  userProfilePitureClass,
}: UserCommentBoxProps) {
  return (
    <>
      {forWhich === "Facebook" && (
        <Facebook
          actionType={actionType}
          userName={userName}
          userProfilePictureURL={userProfilePictureURL}
          comment={comment}
          commentedAt={commentedAt}
          boxClass={boxClass}
          userProfilePitureClass={userProfilePitureClass}
        />
      )}
      {forWhich === "Instagram" && (
        <Instagram
          userName={userName}
          userProfilePictureURL={userProfilePictureURL}
          comment={comment}
          commentedAt={commentedAt}
          boxClass={boxClass}
          userProfilePitureClass={userProfilePitureClass}
        />
      )}
    </>
  );
}

export default UserCommentBox;
