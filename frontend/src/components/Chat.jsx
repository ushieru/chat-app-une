import React from "react";

const Chat = ({ onClick, name, photo, lastMessage = "" }) => (
  <>
    <div className="flex w-full justify-between mb-3" onClick={onClick}>
      <div>
        <img src={photo} alt="Profile" className="h-12 rounded-full" />
      </div>
      <div className="flex-grow ml-2">
        <p className="text-lg">{name}</p>
        <p className="text-blue-800 font-bold text-sm">{lastMessage}</p>
      </div>
      <div className="text-center">
        <p>{new Date().getHours() + ":" + new Date().getMinutes()}</p>
        <p className="bg-blue-500 rounded-full text-white h-6 w-6">2</p>
      </div>
    </div>
  </>
);

export default Chat;
