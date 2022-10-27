import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./store";
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 3000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

/*
    <Auth0Provider
      domain="dev-len59enj.us.auth0.com"
      clientId="UyATdXpnjat2soEVgoJLvmf4DsjhA9T4"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App/>
    </AlertProvider>
  </Provider>
);
