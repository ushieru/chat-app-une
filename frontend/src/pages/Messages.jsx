import React from "react";
import { Link } from "wouter";

const getUserFromID = (id) => {
  const users = localStorage.getItem("users");
  const users_json = JSON.parse(users);
  return users_json.find((user) => user._id == id);
};

const Messages = ({ id }) => {
  const [currentUser, _] = React.useState(getUserFromID(id));

  const sendMenssage = () => {
    // TODO: Send Message
  };

  return (
    <div className="w-screen h-screen p-4 flex flex-col">
      <div className="flex items-center">
        <Link to="/chats">
          <a className="bg-blue-500 py-1 px-2 text-white rounded mt-2">Back</a>
        </Link>
        <p className="ml-4">{currentUser.name}</p>
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
