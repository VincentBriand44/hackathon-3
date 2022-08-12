import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { InventoryContextProvider } from "./context/InventoryContext";

import "./assets/dbInit";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InventoryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InventoryContextProvider>
  </React.StrictMode>
);
