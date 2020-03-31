import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

/* Components */
import InputField from "../../components/InputComponent/Input";
import Button from "../../components/ButtonComponent/Button";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessageComponent/ErrorMessageComponent";

/* styles */
import InputStyles from "../../components/InputComponent/Input.style";
import LinkStyles from "./LogIn.style";
import ButtonStyles from "../../components/ButtonComponent/Button.style";

/* Interfaces */
import ILogInValues from "./Login.interface";
import {
  ILogInMutation,
  IUser,
  ILogInMutatonProps
} from "../../mutations/mutation.type";

/* Validators */
import {
  isEmailCorrect,
  loginFormOnSubmitValidator
} from "../../utils/validators/validators";

/* Apollo */
import { useMutation } from "@apollo/react-hooks";
import loginMutation from "../../mutations/loginMutation";

/* Support Functions */
import { checkError } from "../../utils/formSupport/formSupportFunctions";

const LogIn: React.FC<InjectedFormProps<ILogInValues>> = (props: any) => {
  const [isAnyErrors, setError] = useState("");

  const history = useHistory();
  const { InputFieldStyle } = InputStyles;

  const { handleSubmit } = props;

  const { commonStyles, bigBtn } = ButtonStyles;
  const btnStyles = classNames(commonStyles, bigBtn);

  // to hide errors when validation fails
  // don't put this func into another file
  // beacuse then i can't add it to form field correctly
  const hideWarning = () => {
    setError("");
  };

  const logInOnSubmit = (fields: any) => {
    if (loginFormOnSubmitValidator(fields) !== null) {
      setError("Есть незаполненные поля");
      console.log(isAnyErrors);
    } else {
      console.log(fields);
      setError("");
      return new Promise((resolve, reject) => {
        logIn({
          variables: {
            email: fields.loginEmail,
            password: fields.loginPassword
          }
        })
          .then(res => {
            resolve(res);
            localStorage.setItem("token", `${res.data?.login.token}`);
            history.push("/profile");
          })
          .catch(error => {
            console.log(error.message);
            reject(checkError(error, setError));
          });
      });
    }
  };

  const [logIn] = useMutation<ILogInMutation<IUser>, ILogInMutatonProps>(
    loginMutation
  );

  return (
    <>
      <form onSubmit={handleSubmit(logInOnSubmit)}>
        <InputField
          name="loginEmail"
          placeholder="Электронная почта"
          type="text"
          className={InputFieldStyle}
          validate={[isEmailCorrect]}
          focusHandler={hideWarning}
        />
        <InputField
          name="loginPassword"
          placeholder="Пароль"
          type="password"
          className={InputFieldStyle}
          focusHandler={hideWarning}
        />
        <Button
          title="Войти в систему"
          className={btnStyles}
          disable={
            isAnyErrors && isAnyErrors !== "Ошибка подключения к серверу"
              ? true
              : false
          }
        />
        <Link className={LinkStyles} to="/registration">
          Зарегистрироваться
        </Link>
      </form>
      {isAnyErrors.length > 0 ? <ErrorMessage message={isAnyErrors} /> : null}
    </>
  );
};

const connectedForm = reduxForm<ILogInValues>({
  form: "loginForm"
})(LogIn);

const mapStateToProps = (state: any) => {
  const { form } = state;
  return form;
};

export default connect(mapStateToProps)(connectedForm);
