import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { CartContextProvider } from "./context/CartContext";
import { InventoryContextProvider } from "./context/InventoryContext";

import "./assets/dbInit";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InventoryContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </InventoryContextProvider>
  </React.StrictMode>
);
