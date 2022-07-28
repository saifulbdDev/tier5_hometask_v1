import React from "react";
import { Love, Share,Save,  Comment} from "../../../icon";




import { PostActionProps } from "../../../types/global";


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
      
          {liked ? (
             <Love
             width={24}
             height={24}
             className="cursor-pointer"
            
            
           /> 
          ) : (
            <Love
            width={24}
            height={24}
            className="cursor-pointer"
           
           
          /> 
          )}
           <Comment
          width={24}
          height={24}
          className="cursor-pointer"
         
         
        /> 
       <Share
          width={24}
          height={24}
          className="cursor-pointer"
         
         
        /> 
       
        
      </div>
      <div>
      <Save
          width={24}
          height={24}
          className="cursor-pointer"
         
         
        /> 
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
