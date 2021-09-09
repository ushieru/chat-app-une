import React from "react";
import { Link } from "wouter";

const Messages = () => {
  return (
    <div className="w-screen h-screen p-4 flex flex-col">
      <div className="flex items-center">
        <Link to="/chats">
          <a className="bg-blue-500 py-1 px-2 text-white rounded mt-2">Back</a>
        </Link>
        <p className='ml-4'>Patrik Star</p>
      </div>
      <div className="flex flex-col flex-grow"></div>
      <div className="flex">
        <input type="text" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Messages;
