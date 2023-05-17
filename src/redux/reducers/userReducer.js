import { CHANGE_NAME, CHANGE_AGE } from "../actions/userAction";

const initialState = {
  name: "Oleg",
  age: 36,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        name: action.payload,
        age: state.age,
      };
    case CHANGE_AGE:
      return {
        name: state.name,
        age: action.payload,
      };
    default:
      return state;
  }
};
