export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_AGE = "CHANGE_AGE";

export const nameAction = (input) => {
  console.log(`робить`);
  return {
    type: CHANGE_NAME,
    payload: input,
  };
};

export const ageAction = (input) => {
  console.log(`робить`);
  return {
    type: CHANGE_AGE,
    payload: input,
  };
};
