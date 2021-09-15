import React from "react";

const Messages = ({ user, onBackCallback }) => {
  const sendMenssage = () => {
    // TODO: Send Message
  };

  if (!user)
    return (
      <div className="h-screen p-4 bg-gray-300 flex flex-col items-center justify-center">
        <p>No has seleccionado ningun chat</p>
      </div>
    );

  return (
    <div className="h-screen p-4 flex flex-col">
      <div className="flex items-center">
        <button
          onClick={onBackCallback}
          className="bg-blue-500 py-1 px-2 text-white rounded mt-2"
        >
          Back
        </button>
        <p className="ml-4">{user.name}</p>
      </div>
      <div className="flex flex-col flex-grow">
        {/* TODO: Mensajes recibidos */}
        {/* TODO: Mensajes enviados */}
      </div>
      <div className="flex">
        <input type="text" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Messages;
