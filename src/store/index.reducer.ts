export type TAction = {
  type: string;
  payload?: any;
};

export const getReducer = (state: Object = {}, action: TAction) => {
  switch (action.type) {
    default:
      return state;
    case "CHANGE_INPUT":
      return action.payload;
    case "CLICK_BTN":
      return { state: "props" };
  }
};
