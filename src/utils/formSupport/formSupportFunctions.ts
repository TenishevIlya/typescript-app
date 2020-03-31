import { CHANGE_INITIAL_VALUE } from "../../store/actions/actions";
// export const hideWarning = (func(): any) => {
//     setError("");
// };

export const handlePasswordValidation = (e: any) => {
  CHANGE_INITIAL_VALUE(e.target.value);
};
