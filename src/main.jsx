import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
