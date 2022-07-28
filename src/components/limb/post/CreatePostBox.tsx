import React from 'react';
import {Video, Feeling, FilesUpload} from '../../../icon'
interface IProps {
 
    name: string;
    profilePicture: string;

}
const CreatePostBox: React.FC<IProps> = (props) => {
  const { profilePicture, name,  } =
    props;

  return (
    <div className="rounded-lg  bg-white flex flex-col p-3 px-4 shadow">
      <div className="flex items-center space-x-2 border-b pb-3 mb-2">
        <div className="w-10 h-10">
          <img
            src={profilePicture}
            className="w-full h-full rounded-full"
            alt={name}
          />
        </div>
        <button className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left rounded-full h-10 pl-5">
          What&apos;s on your mind, Saiful?
        </button>
      </div>
      <div className="flex space-x-3 font-thin text-sm text-gray-600 -mb-1">
        <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <Video  className=" text-red-400" width={24} height={24}/>
          
          </div>
          <div>
            <p className="font-semibold">Live Video</p>
          </div>
        </button>
        <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
          <FilesUpload  className="text-green-500" width={24} height={24}/>

          </div>
          <div>
            <p className="font-semibold">Photos/Video</p>
          </div>
        </button>
        <button className="flex-1 hidden mobile:flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
          
          <Feeling  className=" text-yellow-500" width={24} height={24}/>
           
          </div>
          <div>
            <p className="font-semibold">Feeling/Activity</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CreatePostBox;
