import React from "react";
import { Switch, Route } from "wouter";

import Chats from "./pages/Chats";
import Home from "./pages/Home";
import Messages from "./pages/Messages";

const App = () => {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/chats" component={Chats} />
    <Route path="/messages" component={Messages} />
    <Route>
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="font-bold text-3xl">404! Estas perdido?</p>
      </div>
    </Route>
  </Switch>
}

export default App;
