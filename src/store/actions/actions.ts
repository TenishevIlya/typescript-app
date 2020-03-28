export const CHANGE_INITIAL_VALUE = (value: string) => {
  return {
    type: "CHANGE_INITIAL_VALUE",
    payload: value
  };
};

export const CHANGE_PROFILE_CHILDREN = (value: string) => {
  return { type: "CHANGE_PROFILE_CHILDREN", payload: value };
};

// export const SHOW_PROCESS_LIST = (value: string) => {
//   return { type: "SHOW_PROCESS_LIST", payload: value };
// };
