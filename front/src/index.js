import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-len59enj.us.auth0.com"
      clientId="UyATdXpnjat2soEVgoJLvmf4DsjhA9T4"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
