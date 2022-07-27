import React from 'react';
import { IPost } from '../../../types/post';

interface IProps {
  image:string,
  user:{
    name:string,
    profilePicture:string,

  }
}

const Story: React.FC<IProps> = (props) => {
  const { user, image } = props;
 
  return (
    <div
      className="w-28 h-48 relative rounded-xl p-3 to-pink-500 shadow cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute">
        <img
          src={user.profilePicture}
          className="w-10 h-10 rounded-full border-4 border-white"
          alt="story"
        />
      </div>
      <div className="absolute text-center" style={{ bottom: '5%' }}>
        <p className="text-white font-semibold">{user.name}</p>
      </div>
    </div>
  );
};

export default Story;
