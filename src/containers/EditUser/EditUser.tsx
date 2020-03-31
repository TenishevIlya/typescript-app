import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxForm, InjectedFormProps, getFormSyncErrors } from "redux-form";
import classNames from "classnames";

/* Components */
import InputField from "../../components/InputComponent/Input";
import InputLabel from "../../components/InputLabel/InputLabel";
import Header from "../../components/HeaderComponent/Header";
import Button from "../../components/ButtonComponent/Button";
import ErrorMessage from "../../components/ErrorMessageComponent/ErrorMessageComponent";

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
} from "../../utils/validators/validators";

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

/* Store */
import { CHANGE_INITIAL_VALUE } from "../../store/actions/actions";
import { checkError } from "../../utils/formSupport/formSupportFunctions";

const EditUser: React.FC<InjectedFormProps<IEditUserValues> &
  IEditUserProps> = (props: any) => {
  const [isAnyErrors, setError] = useState("");

  const { handleSubmit, CHANGE_INITIAL_VALUE, synchronousError, reset } = props;

  const { formStyles, formItem, headerPart } = EditFormStyles;
  const { InputFieldStyle } = InputStyles;
  const { common, editUserHeader } = HeaderStyles;
  const { commonStyles, smallBtn } = ButtonStyles;

  const EditHeaderStyles = classNames(common, editUserHeader);
  const EditFieldStyle = classNames(InputFieldStyle);
  const EditBtnStyle = classNames(commonStyles, smallBtn);

  const { data } = useQuery<ICurrentUser>(currentUserQuery, {
    fetchPolicy: "network-only"
  });

  const [edituser] = useMutation<TEditUserData<IUser>, TEditUserValues>(
    editUserMutation
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
          reset(); // to clear form after changes in profile
        })
        .catch(error => {
          reject(checkError(error, setError));
        });
    });
  };

  const headerTitle = `${data?.currentUser.secondName} ${data?.currentUser.firstName}. Редактирование`;

  // looking for passwords to be the same
  // i don't put this function into another file
  // because if i do, it doesn't work synchronously
  const handlePasswordValidation = (e: any) => {
    CHANGE_INITIAL_VALUE(e.target.value);
  };

  return (
    <>
      <div className={headerPart}>
        <Header title={headerTitle} className={EditHeaderStyles} />
        <Button
          disable={Object.keys(synchronousError).length !== 0 ? true : false}
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
      {/* not sure that it is needed but I added it to show
      handling server errros */}
      {isAnyErrors.length > 0 ? (
        <ErrorMessage isEditError={true} message={isAnyErrors} />
      ) : null}
    </>
  );
};

const connectedEdition = reduxForm<IEditUserValues, IEditUserProps>({
  form: "editUserForm",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(EditUser);

export default connect(
  // get sync erros to validate if button disabled or not
  state => ({
    synchronousError: getFormSyncErrors("editUserForm")(state)
  }),
  { CHANGE_INITIAL_VALUE }
)(connectedEdition);
