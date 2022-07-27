import React from 'react';
import data from '../../database/facebook.json'
const RightSidebar: React.FC = () => {
  return (
    <div className="  pr-2  side-bar py-3 fixed h-full  overflow-x-hidden ">
      <div className="w-full  border-b-2 pb-2 mb-2 border-gray-300">
         <h3 className="text-lg text-gray-600 font-semibold mb-2">Sponsored</h3>
     
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-600">
          <div>
          <h3 className="text-lg text-gray-600 font-semibold">Contacts</h3>
           
          </div>
          <div className="flex items-center space-x-3 text-gray-500">
            <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
              <i className="fab fa-youtube"></i>
            </button>
            <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
              <i className="fas fa-search"></i>
            </button>
            <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
        <div className="-ml-2">
          <ul className="w-full text-gray-600">
          {data?.friends?.online.length ? (
          data?.friends?.online?.map((post, key) => {
            const {
             name, profilePicture
            } = post;
            return (
              <li className="h-12  flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200" key={key}>
              <div className='w-7 h-7 relative  rounded-full'>
                <img
                  className="w-full h-full rounded-full"
                  src={profilePicture}
                  alt={name}
                />
                 <div className="absolute right-0 bottom-1 w-1.5 h-1.5 rounded-full bg-green-500"></div>
              </div>
              <div>
                <p className="font-medium text-sm text-gray-900">{name}</p>
              </div>
            </li>
            );
          })
        ) : (
         ""
        )}
         
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
