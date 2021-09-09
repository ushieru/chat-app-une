import React from "react";
import Chat from "./../components/Chat";

const users = [
  {
    _id: "123456897",
    photo: "https://thispersondoesnotexist.com/image",
    name: "Patrik Star",
    lastMessage: "Como estas?",
  },
  {
    _id: "123978234",
    photo: "https://thispersondoesnotexist.com/image",
    name: "SpongeBob SquarePants",
    lastMessage: "Vamos con Calamardo",
  },
];

const Chats = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center p-6">
      <p className="font-bold text-xl mb-4">Messages</p>
      {users.map((user) => (
        <Chat
          key={user._id}
          photo={user.photo}
          name={user.name}
          lastMessage={user.lastMessage}
        />
      ))}
    </div>
  );
};

export default Chats;
