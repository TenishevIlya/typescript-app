import { createStore } from "redux";
import { combineReducers } from "redux";
import { getReducer } from "./index.reducer";
import { reducer as FormReaducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  //get: getReducer,
  form: FormReaducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
