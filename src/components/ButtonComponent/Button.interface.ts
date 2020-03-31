export default interface IButton {
  title: string;
  disable?: boolean;
  type?: any;
  className?: string;
  form?: string;
  action?(): void;
}
