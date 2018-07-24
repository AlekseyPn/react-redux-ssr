import { createStore } from "redux";
import { composeWithDevTools as clientWithDevTools } from "redux-devtools-extension";
import { composeWithDevTools as serverWithDevTools } from "remote-redux-devtools";
import { rootReducer } from "./reducers";

export default function configureStore(preloadedState, isRemote) {
  const composeEnhancers = isRemote
    ? serverWithDevTools({
        realtime: true,
        port: 8001,
      })
    : clientWithDevTools({});

  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers()
  );
}
