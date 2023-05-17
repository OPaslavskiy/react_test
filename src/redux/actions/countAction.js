export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const INCREMENT_COUNT = "INCREMENT_COUNT";

export const countMinesAction = (input) => {
  console.log(`робить`);
  return {
    type: DECREMENT_COUNT,
    payload: input,
  };
};

export const countPlusAction = (input) => {
  console.log("робить плюс");
  return {
    type: INCREMENT_COUNT,
    payload: input,
  };
};
