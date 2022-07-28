import React, { useState } from "react";
// import Input from "../../../components/form/Input";
// import Button from "../../../components/ui/Button";
// import Image from "../../../components/ui/Image";

function AddComment() {
  const [comment, setComment] = useState<string>("");


   
  return (
    <div className="flex px-4 items-center justify-between border-t border-gray-300 h-10 pt-2">
      <div className="flex items-center justify-between gap-x-3">
        <img
          src="https://minimaltoolkit.com/images/randomdata/male/38.jpg"
          alt="Profile"
          className="w-8 h-8 object-cover rounded-full"
        />
        <input
          className="border-none w-full py-2 placeholder:text-instagram-secondary text-instagram-primary text-base focus:outline-none"
          type="text"
          placeholder="Add a comment..."
        
         
        />
      </div>
      <button
    
        className={`text-base font-semibold text-instagram-blue ${
          comment ? `` : `opacity-50 cursor-not-allowed`
        }`}
     
        name="Post"
        // eslint-disable-next-line no-console
       
      >Post</button>
    </div>
  );
}

export default AddComment;
