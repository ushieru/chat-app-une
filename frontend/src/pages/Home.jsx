import React from "react";
import { useLocation } from "wouter";
import { signin } from "./../lib/socketIO";

const Home = () => {
  const [user, setUser] = React.useState("");
  const [_, setLocation] = useLocation();

  const signinToChats = (e) => {
    e.preventDefault();
    signin(user)
      .then((_) => {
        setLocation("/chats");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-2xl font-bold">Welcome!</p>
      <form onSubmit={signinToChats}>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          className="rounded border border-gray-500"
        />
        <button
          type="submit"
          className="bg-blue-500 py-1 px-2 text-white rounded"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Home;
