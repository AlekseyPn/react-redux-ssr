import { combineReducers } from "redux";

import {
  FIRST_INCREMENT,
  SET_FIRST_COUNTER,
  SECOND_INCREMENT,
  SET_SECOND_COUNTER,
} from "./actions";

const firstCounterReducer = function(state = 0, action) {
  switch (action.type) {
    case SET_FIRST_COUNTER: {
      return action.payload;
    }
    case FIRST_INCREMENT: {
      return ++state;
    }
  }

  return state;
};

const secondCounterReducer = function(state = 0, action) {
  switch (action.type) {
    case SET_SECOND_COUNTER: {
      return action.payload;
    }
    case SECOND_INCREMENT: {
      return ++state;
    }
  }

  return state;
};

export const rootReducer = combineReducers({
  firstCounter: firstCounterReducer,
  secondCounter: secondCounterReducer,
});
