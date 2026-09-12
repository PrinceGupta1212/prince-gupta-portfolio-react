// =========================================================
// MAIN.jsx — React app ka entry point.
// Ye <App /> ko index.html ke #root div mein mount karta hai.
// =========================================================
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
