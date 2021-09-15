import React from "react";
import { useLocation } from "wouter";

import { newOnlineUser } from "./../lib/socketIO";

import Messages from "./Messages";
import Chat from "./../components/Chat";

const Chats = () => {
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState();
  const [_, setLocation] = useLocation();

  const closeSession = () => {
    localStorage.clear();
    setLocation("/");
  };

  const newOnlineUserCallback = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const getOnline = () => {
    fetch("http://localhost:5000/online")
      .then((response) => response.json())
      .then((response) => {
        const myID = JSON.parse(localStorage.getItem("session"))._id;
        const users = response.CLIENTS.filter((user) => user._id != myID);
        setUsers(users);
      })
      .catch((err) => console.log("Hubo un error al hacer la peticion", err));
  };

  React.useEffect(() => {
    getOnline();
    newOnlineUser(newOnlineUserCallback);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // if (currentUser)
  //   return (
  //     <Messages
  //       onBackCallback={() => setCurrentUser(undefined)}
  //       user={currentUser}
  //     />
  //   );

  return (
    <div className="md:flex">
      {/* CHAT */}
      <div className="h-screen w-screen md:w-3/12 flex flex-col items-center p-6">
        <div className="flex items-center justify-between w-full">
          <div />
          <p className="font-bold text-xl mb-4">Messages</p>
          <button
            onClick={closeSession}
            className="bg-blue-500 py-1 px-2 text-white rounded"
          >
            Close
          </button>
        </div>
        {users.map((user) => (
          <Chat
            onClick={() => setCurrentUser(user)}
            key={user._id}
            photo={user.photo}
            name={user.name}
          />
        ))}
      </div>
      {/* MESSAGES */}
      <div className="hidden md:block md:w-9/12">
        <Messages
          onBackCallback={() => setCurrentUser(undefined)}
          user={currentUser}
        />
      </div>
    </div>
  );
};

export default Chats;
