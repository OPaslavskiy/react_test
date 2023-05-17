import { createStore, combineReducers, applyMiddleware } from "redux";
import th from "redux-thunk";
import lg from "redux-logger";
import { counterReducer } from "./reducers/countReducer";
import { userReducer } from "./reducers/userReducer";
import { postReducer } from "./reducers/postsReducer";

const mainReducer = combineReducers({
  counterReducer,
  userReducer,
  postReducer,
});

export const store = createStore(mainReducer, applyMiddleware(lg, th));
