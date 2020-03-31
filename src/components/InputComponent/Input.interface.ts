import { WrappedFieldProps } from "redux-form";

export default interface IInputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  input?: any;
  meta?: any;
  bntHandler?(): any;
  passwordHandler?(e: any): any;
  focusHandler?(): any;
}

interface IInputField extends Partial<WrappedFieldProps> {
  placeholder?: string;
  type?: "text" | "password";
  className?: Object;
  btnHandler?(): any;
  passwordHandler?(e: any): any;
}
