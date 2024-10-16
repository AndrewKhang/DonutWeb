import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // This may already exist
import "./tailwind.css"; // Add this line
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
