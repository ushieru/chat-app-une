import React from "react";
import Chat from "./../components/Chat";

const Chats = () => {
  const [users, setUsers] = React.useState([]);

  const getOnline = () => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((response) => {
        const users = response.CLIENTS.map((client) => ({
          _id: Date.now() + (Math.random() * 10 + 1),
          photo: "https://thispersondoesnotexist.com/image",
          name: client,
          lastMessage: "",
        }));
        setUsers(users);
      })
      .catch((err) => console.log("Hubo un error al hacer la peticion", err));
  };

  React.useEffect(() => {
    getOnline();
  }, []);

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
