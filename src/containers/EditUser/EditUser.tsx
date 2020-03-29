import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";
import classNames from "classnames";
import { CHANGE_INITIAL_VALUE } from "../../store/actions/actions";

/* Components */
import InputField from "../../components/InputComponent/Input";
import InputLabel from "../../components/InputLabel/InputLabel";
import Header from "../../components/HeaderComponent/Header";
import Button from "../../components/ButtonComponent/Button";

/* Styles */
import EditFormStyles from "./EditUser.style";
import InputStyles from "../../components/InputComponent/Input.style";
import HeaderStyles from "../../components/HeaderComponent/Header.style";
import ButtonStyles from "../../components/ButtonComponent/Button.style";

/* Interfaces */
import { IEditUserProps, IEditUserValues } from "./EditUser.inerface";

/* Validators */
import {
  isEmailCorrect,
  comparePasswords,
  startsWithUpperCase
} from "../../validators/validators";

/* Mutations */
import editUserMutation from "../../mutations/editUserMutation";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  TEditUserData,
  TEditUserValues,
  IUser,
  ICurrentUser
} from "../../mutations/mutation.type";
import currentUserQuery from "../../mutations/currentUserQuery";

const EditUser: React.FC<InjectedFormProps<IEditUserValues> &
  IEditUserProps> = (props: any) => {
  const { handleSubmit, CHANGE_INITIAL_VALUE } = props;

  const { formStyles, formItem, headerPart } = EditFormStyles;
  const { InputFieldStyle, InputFieldEdit } = InputStyles;
  const { common, editUserHeader } = HeaderStyles;
  const { commonStyles, smallBtn } = ButtonStyles;

  const { data } = useQuery<ICurrentUser>(currentUserQuery, {
    fetchPolicy: "network-only"
  });

  const [edituser] = useMutation<TEditUserData<IUser>, TEditUserValues>(
    editUserMutation,
    {
      fetchPolicy: "network-only"
    }
  );

  const editOnSubmit = (fields: any) => {
    return new Promise((resolve, reject) => {
      edituser({
        variables: {
          id: data?.currentUser.id,
          email: fields.editEmail,
          firstName: fields.editName,
          secondName: fields.editSecondName,
          password: fields.editPasword
        }
      })
        .then(data => {
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  };

  const EditHeaderStyles = classNames(common, editUserHeader);
  const EditFieldStyle = classNames(InputFieldStyle, InputFieldEdit);
  const EditBtnStyle = classNames(commonStyles, smallBtn);

  const headerTitle = `${data?.currentUser.secondName} ${data?.currentUser.firstName}. Редактирование`;

  const handlePasswordValidation = (e: any) => {
    CHANGE_INITIAL_VALUE(e.target.value);
  };

  return (
    <>
      <div className={headerPart}>
        <Header title={headerTitle} className={EditHeaderStyles} />
        <Button
          title="Сохранить"
          type="submit"
          form="data"
          className={EditBtnStyle}
        />
      </div>
      <form
        id="data"
        className={formStyles}
        onSubmit={handleSubmit(editOnSubmit)}
      >
        <div className={formItem}>
          <InputLabel title="Имя" />
          <InputField
            name="editName"
            placeholder="Имя"
            type="text"
            className={EditFieldStyle}
            validate={startsWithUpperCase}
          ></InputField>
        </div>
        <div className={formItem}>
          <InputLabel title="Фамилия" />
          <InputField
            name="editSecondName"
            placeholder="Фамилия"
            type="text"
            className={EditFieldStyle}
            validate={startsWithUpperCase}
          ></InputField>
        </div>
        <div className={formItem}>
          <InputLabel title="Электронная почта" />
          <InputField
            name="editEmail"
            placeholder="Электронная почта"
            type="text"
            className={EditFieldStyle}
            validate={isEmailCorrect}
          ></InputField>
        </div>
        <div className={formItem}>
          <InputLabel title="Пароль" />
          <InputField
            name="editPasword"
            placeholder="Пароль"
            type="password"
            className={EditFieldStyle}
            passwordHandler={handlePasswordValidation}
          ></InputField>
        </div>
        <div className={formItem}>
          <InputLabel title="Повторите пароль" />
          <InputField
            name="editPasswordRepeat"
            placeholder="Повторите пароль"
            type="password"
            className={EditFieldStyle}
            validate={comparePasswords}
          ></InputField>
        </div>
      </form>
    </>
  );
};

const connectedEdition = reduxForm<IEditUserValues, IEditUserProps>({
  form: "editUserForm",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(EditUser);

export default connect(null, { CHANGE_INITIAL_VALUE })(connectedEdition);
