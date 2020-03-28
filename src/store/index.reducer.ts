export type TAction = {
  type: string;
  payload?: any;
};

// can't find a better way to set initial state at the beginning
export const getInitialValue = (state: any = "some state", action: TAction) => {
  switch (action.type) {
    default:
      return state;
    case "CHANGE_INITIAL_VALUE":
      return action.payload;
  }
};

export const setProfileLayout = (
  state: any = "SHOW_EDIT_PROFILE",
  action: TAction
) => {
  switch (action.type) {
    default:
      return state;
    case "CHANGE_PROFILE_CHILDREN":
      return action.payload;
  }
};
