export default interface IInputProps {
  placeholder: string;
  className: string;
  type?: string;
  input?: Object;
  meta?: any;
  passwordHandler?(e: any): void;
  focusHandler?(): void;
}
