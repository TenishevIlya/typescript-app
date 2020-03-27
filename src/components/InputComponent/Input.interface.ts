export default interface IInputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  input?: any;
  meta?: any;
  bntHandler?(): any;
  passwordHandler?(e: any): any;
}
