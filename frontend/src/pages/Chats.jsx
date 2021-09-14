import React from "react";
import Chat from "./../components/Chat";
import { newOnlineUser } from "./../lib/socketIO";
import { useLocation } from "wouter";

const Chats = () => {
  const [users, setUsers] = React.useState([]);
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

  return (
    <div className="h-screen w-screen flex flex-col items-center p-6">
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
          key={user._id}
          _id={user._id}
          photo={user.photo}
          name={user.name}
        />
      ))}
    </div>
  );
};

export default Chats;
