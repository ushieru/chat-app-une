import React from "react";
import { Link } from "wouter";

const Home = () => (
  <div className="w-screen h-screen flex flex-col items-center justify-center">
    <p className="text-2xl font-bold">Welcome!</p>
    <Link to="/chats">
      <a className="bg-blue-500 py-1 px-2 text-white rounded mt-2">Chats</a>
    </Link>
  </div>
);

export default Home;
