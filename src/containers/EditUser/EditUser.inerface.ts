import { InjectedFormProps } from "redux-form";

export interface IEditUserValues {
  editName: string;
  editSecondName: string;
  editEmail: string;
  editPasword: string;
  editPasswordRepeat: string;
}

export interface IEditUserProps {
  userId?: number;
  userFirstName?: string;
  userSecondName?: string;
}
