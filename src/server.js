import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";

import { SET_FIRST_COUNTER, SET_SECOND_COUNTER } from "./store/actions";
import configureStore from "./store";

import App from "./app";

module.exports = function render(initialState) {
  const store = configureStore(initialState, true);

  store.dispatch({ type: SET_FIRST_COUNTER, payload: 10 });
  store.dispatch({ type: SET_SECOND_COUNTER, payload: 5 });

  let content = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const preloadedState = store.getState();

  return { content, preloadedState };
};
