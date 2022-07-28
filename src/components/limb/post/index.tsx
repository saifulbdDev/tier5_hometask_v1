import React, {useState} from "react";

import Reactions from "../../rc-actions";
import Comments from "./Comments";
import moment from "moment";
interface IProps {
  user: {
    name: string;
    profilePicture: string;
  };
  description: string;
  image: string;
  postedOn: number;
  shares: number;
  likes: number;
  liked: boolean;
  comments: any[];
}

const Post: React.FC<IProps> = (props) => {
  const images = [
    {
      id: "like",
      description: "Like",
      img: require("../../../icon/LwCYmcM.gif"),
    },
    {
      id: "love",
      description: "Love",
      img: require("../../../icon/k5jMsaH.gif"),
    },
    {
      id: "haha",
      description: "Haha",
      img: require("../../../icon/f93vCxM.gif"),
    },
    {
      id: "yay",
      description: "Sad",
      img: require("../../../icon/a44ke8c.gif"),
    },
  ];
  const { user, description, image, postedOn, likes, shares,  comments } =
    props;

  // const [newComments, setComments] = useState<any>(comments);
  const [newLikes, setLikes] = useState<number>(likes);

  const addLike = () => {
     
    setLikes(prevState => {
      return (prevState + 1)
   })
  }

  return (
    <div className="w-full shadow h-auto pb-4 bg-white rounded-md">
      <div className="flex items-center space-x-2 p-2.5 px-4">
        <div className="w-9 h-9 rounded-full">
          <img
            src={user.profilePicture}
            className="w-full h-full rounded-full"
            alt={user.name}
          />
        </div>
        <div className="flex-grow flex flex-col">
          <p className="font-semibold text-sm text-gray-700">{user.name}</p>
          <span className="text-xs font-thin text-gray-400">
            {moment(postedOn).fromNow()}
          </span>
        </div>
        <div className="w-8 h-8">
          <button className="w-full h-full hover:bg-gray-100 rounded-full text-gray-400 focus:outline-none">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      {description ? (
        <div className="mb-1">
          <p className="text-gray-700 font-normal max-h-10 truncate px-3 text-sm">
            {description}
          </p>
        </div>
      ) : null}
      {image ? (
        <div className="w-full h-76 max-h-80">
          <img src={image} alt="postimage" className="w-full h-76 max-h-80" />
        </div>
      ) : null}

      <div className="w-full flex flex-col space-y-2 p-2 px-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-300 text-gray-500 text-sm">
          <div className="flex items-center">
            <nav className="flex items-center">
              <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white">
                <i style={{ fontSize: 10 }} className="fas fa-heart"></i>
              </button>
              <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-facebook-primary text-white">
                <i style={{ fontSize: 10 }} className="fas fa-thumbs-up"></i>
              </button>
              <button className="focus:outline-none flex items-center justify-center w-4 h-4 rounded-full bg-yellow-500 text-white">
                <i style={{ fontSize: 10 }} className="fas fa-surprise"></i>
              </button>
              <div className="ml-1">
                <p>{newLikes}</p>
              </div>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            {comments.length > 0 ? (
              <button>{comments.length} Comments</button>
            ) : (
              ""
            )}

            <button>{shares} Shares</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-300 space-x-3 text-gray-500 text-sm font-thin">
          <Reactions items={images}  onUpdate={addLike}>
            <button className="flex-1 w-full flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
              <div>
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div>
                <p className="font-semibold">Like</p>
              </div>
            </button>
          </Reactions>
          <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
            <div>
              <i className="fas fa-comment"></i>
            </div>
            <div>
              <p className="font-semibold">Comment</p>
            </div>
          </button>
          <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
            <div>
              <i className="fas fa-share"></i>
            </div>
            <div>
              <p className="font-semibold">Share</p>
            </div>
          </button>
        </div>
      </div>
      <Comments data={comments} userProfilePiture={user.profilePicture} />
    </div>
  );
};

export default Post;
