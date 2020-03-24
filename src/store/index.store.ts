import { createStore } from "redux";
import { combineReducers } from "redux";
import { reducer as FormReaducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  form: FormReaducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
