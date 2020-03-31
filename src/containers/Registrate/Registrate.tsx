import React, { useState } from "react";
import classNames from "classnames";
import { CHANGE_INITIAL_VALUE } from "../../store/actions/actions";
import { reduxForm, getFormSyncErrors, InjectedFormProps } from "redux-form";

/* Components */
import InputField from "../../components/InputComponent/Input";
import Button from "../../components/ButtonComponent/Button";
import Header from "../../components/HeaderComponent/Header";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessageComponent/ErrorMessageComponent";

/* Styles */
import InputStyles from "../../components/InputComponent/Input.style";
import LinkStyles from "../LogIn/LogIn.style";
import HeaderStyles from "../../components/HeaderComponent/Header.style";
import ButtonStyles from "../../components/ButtonComponent/Button.style";

/* Validators */
import {
  isEmailCorrect,
  registrateFormOnSubmitValidator,
  comparePasswords,
  startsWithUpperCase
} from "../../utils/validators/validators";

/* Interfaces */
import IRegistrateProps from "./Registrate.inteface";
import { useMutation } from "@apollo/react-hooks";
import {
  ISignUpMutation,
  ISignUpValues,
  ILogInMutation,
  IUser,
  ILogInMutatonProps
} from "../../mutations/mutation.type";

/* Apollo  */
import signupMutation from "../../mutations/signUpMutation";
import loginMutation from "../../mutations/loginMutation";
import { connect } from "react-redux";

/* Support functions */
import { checkError } from "../../utils/formSupport/formSupportFunctions";

const Registrate: React.FC<InjectedFormProps<IRegistrateProps>> = (
  props: any
) => {
  const { handleSubmit, CHANGE_INITIAL_VALUE, synchronousError } = props;

  const [isAnyErrors, setError] = useState("");
  const history = useHistory();

  const { common, registrateHeader } = HeaderStyles;
  const { InputFieldStyle } = InputStyles;
  const CurrentHeaderStyle = classNames(common, registrateHeader);

  const { commonStyles, bigBtn } = ButtonStyles;
  const btnStyles = classNames(commonStyles, bigBtn);

  const [signUp] = useMutation<ISignUpMutation, ISignUpValues>(signupMutation);
  const [logIn] = useMutation<ILogInMutation<IUser>, ILogInMutatonProps>(
    loginMutation
  );

  const registrateOnSubmit = (fields: any) => {
    if (registrateFormOnSubmitValidator(fields) !== null) {
      setError("Есть незаполненные поля");
    } else {
      setError("");
      return new Promise((resolve, reject) => {
        signUp({
          variables: {
            firstName: fields.registrateName,
            secondName: fields.registrateSecondName,
            email: fields.registrateEmail,
            password: fields.registratePassword
          }
        })
          .then(data => {
            resolve(data);
            console.log(data);
          })
          .then(() => {
            logIn({
              variables: {
                email: fields.registrateEmail,
                password: fields.registratePassword
              }
            }).then(data => {
              console.log(data);
              localStorage.setItem("token", `${data.data?.login.token}`);
              history.push("/profile");
            });
          })
          .catch(error => {
            console.log(error.message);
            reject(checkError(error, setError));
          });
      });
    }
  };

  // looking for passwords to be the same
  // i don't put this function into another file
  // because if i do, it doesn't work synchronously
  const handlePasswordValidation = (e: any) => {
    CHANGE_INITIAL_VALUE(e.target.value);
  };

  // to hide errors when validation fails
  // don't put this func into another file
  // beacuse then i can't add it to form field correctly
  const hideWarning = () => {
    setError("");
  };

  return (
    <form onSubmit={handleSubmit(registrateOnSubmit)}>
      <Header title="Регистрация" className={CurrentHeaderStyle} />
      <InputField
        name="registrateName"
        placeholder="Имя"
        type="text"
        className={InputFieldStyle}
        validate={startsWithUpperCase}
        focusHandler={hideWarning}
      />
      <InputField
        name="registrateSecondName"
        className={InputFieldStyle}
        placeholder="Фамилия"
        type="text"
        validate={startsWithUpperCase}
        focusHandler={hideWarning}
      />
      <InputField
        name="registrateEmail"
        className={InputFieldStyle}
        placeholder="Электронная почта"
        type="text"
        validate={[isEmailCorrect]}
        focusHandler={hideWarning}
      />
      <InputField
        name="registratePassword"
        className={InputFieldStyle}
        placeholder="Введите пароль"
        type="password"
        passwordHandler={handlePasswordValidation}
        focusHandler={hideWarning}
      />
      <InputField
        name="registratePasswordRepeat"
        className={InputFieldStyle}
        placeholder="Повторите пароль"
        type="password"
        validate={[comparePasswords]}
        focusHandler={hideWarning}
      />
      <Button
        disable={
          Object.keys(synchronousError).length !== 0 ||
          isAnyErrors === "Пользователь с таким email уже существует"
            ? true
            : false
        }
        title="Применить и войти"
        className={btnStyles}
      />
      <Link to="/" className={LinkStyles}>
        Уже зарегистрированны? Вход
      </Link>
      {isAnyErrors.length > 0 ? <ErrorMessage message={isAnyErrors} /> : null}
    </form>
  );
};

const connectedRegistration = reduxForm<IRegistrateProps>({
  form: "registration",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Registrate);

export default connect(
  state => ({
    synchronousError: getFormSyncErrors("registration")(state)
  }),
  {
    CHANGE_INITIAL_VALUE
  }
)(connectedRegistration);
