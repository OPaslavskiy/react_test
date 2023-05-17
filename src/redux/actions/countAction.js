export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const INCREMENT_COUNT = "INCREMENT_COUNT";

export const countMinesAction = () => {
  console.log(`робить`);
  return { type: DECREMENT_COUNT };
};

export const countPlusAction = () => {
  console.log("робить плюс");
  return { type: INCREMENT_COUNT };
};
