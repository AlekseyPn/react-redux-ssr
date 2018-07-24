import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./app";

const state = window.__STATE__;

delete window.__STATE__;

const store = configureStore(state);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
