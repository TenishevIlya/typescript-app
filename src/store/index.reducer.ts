export type TAction = {
  type: string;
  payload?: any;
};

export const getReducer = (state: string = "", action: TAction) => {
  switch (action.type) {
    default:
      return state;
    case "GET_TOKEN":
      return action.payload;
  }
};
