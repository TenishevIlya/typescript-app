export default interface IButton {
  title: string;
  type?: any;
  className: string;
  disable?: boolean;
  form?: string;
  action?(): void;
}
