import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import App from "./App";
import { init } from './lib/socketIO'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

init();
