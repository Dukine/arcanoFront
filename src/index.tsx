import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { UserProvider } from "./contexts/userContext";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
