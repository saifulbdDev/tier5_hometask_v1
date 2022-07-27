import React from "react";




import { PostActionProps } from "../../../../types/global";

function Facebook({
  liked,
  commentHandler,
  proceedToComment,
}: PostActionProps) {
  return (
    <div className="flex items-center justify-around text-facebook-normal">
      <div
        className={`flex gap-x-1 items-center cursor-not-allowed ${
          liked ? `text-facebook-primary` : ``
        }`}
      >
        {liked ? <div  /> : <div  />}
        <p>Like</p>
      </div>
      <div
        className="flex gap-x-1 items-center cursor-pointer"
        onClick={() => commentHandler(!proceedToComment)}
        aria-hidden="true"
      >
        <div  className="mt-1" />
        <p>Comment</p>
      </div>
      <div className="flex gap-x-1 items-center cursor-not-allowed">
        <div  className="mt-1" />
        <p>Share</p>
      </div>
    </div>
  );
}

function Instagram({
  liked,
  commentHandler,
  proceedToComment,
}: PostActionProps) {
  return (
    <div className="flex items-center justify-between text-instagram-primary px-4">
      <div className="flex gap-x-3">
        <div style={{ marginTop: "2px" }}>
          {liked ? (
            <div
             
              className="cursor-not-allowed fill-red-600"
            />
          ) : (
            <div  className="cursor-not-allowed" />
          )}
        </div>
        {/* <BsChat
          size={20}
          className="cursor-pointer"
          onClick={() => commentHandler(!proceedToComment)}
          aria-hidden="true"
        /> */}
        {/* <FiSend size={20} className="cursor-not-allowed" /> */}
      </div>
      <div>
        {/* <BsBookmark size={20} className="cursor-not-allowed" /> */}
      </div>
    </div>
  );
}

function PostActions({
  forWhich,
  liked,
  commentHandler,
  proceedToComment,
}: PostActionProps) {
  return (
    <>
      {forWhich === "Facebook" && (
        <Facebook
          liked={liked}
          commentHandler={commentHandler}
          proceedToComment={proceedToComment}
        />
      )}
      {forWhich === "Instagram" && (
        <Instagram
          liked={liked}
          commentHandler={commentHandler}
          proceedToComment={proceedToComment}
        />
      )}
    </>
  );
}

export default PostActions;
