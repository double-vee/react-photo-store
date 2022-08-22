import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StoreContextProvider } from "./contexts/StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <Router>
        <App />
      </Router>
    </StoreContextProvider>
  </React.StrictMode>
);
