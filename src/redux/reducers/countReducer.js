import { DECREMENT_COUNT, INCREMENT_COUNT } from "../actions/countAction";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_COUNT:
      return {
        count: state.count - 1,
      };
    case INCREMENT_COUNT:
      return { count: state.count + 5 };

    default:
      return state;
  }
};
