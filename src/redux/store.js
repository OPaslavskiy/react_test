import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/countReducer";
import { userReducer } from "./reducers/userReducer";

const mainReducer = combineReducers({
  counterReducer,
  userReducer,
});

export const store = createStore(mainReducer);
