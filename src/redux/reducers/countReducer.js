import { DECREMENT_COUNT, INCREMENT_COUNT } from "../actions/countAction";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_COUNT:
      return {
        count: state.count - +action.payload,
      };
    case INCREMENT_COUNT:
      return { count: state.count + +action.payload };

    default:
      return state;
  }
};
