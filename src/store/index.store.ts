import { createStore } from "redux";
import { combineReducers } from "redux";
import { getInitialValue, setProfileLayout } from "./index.reducer";
import { reducer as FormReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  setEditLayout: setProfileLayout,
  getValue: getInitialValue,
  form: FormReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
