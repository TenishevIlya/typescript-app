import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
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
import ILogInProps from "./Login.interface";
import {
  ILogInMutation,
  IUser,
  ILogInMutatonProps,
  TProcessListData
} from "../../mutations/mutation.type";

/* App store */
import store from "../../store/index.store";

/* Validators */
import {
  isEmailCorrect,
  loginFormOnSubmitValidator
} from "../../validators/validators";

/* Apollo */
import { useMutation, useQuery } from "@apollo/react-hooks";
import loginMutation from "../../mutations/loginMutation";
import currentUserQuery from "../../mutations/currentUserQuery";

const LogIn = (props: any) => {
  const [isAnyErrors, setError] = useState("");
  const [isBtnDisabled, setDisable] = useState(false);

  const history = useHistory();
  const { InputFieldStyle } = InputStyles;

  const { handleSubmit } = props;

  const { commonStyles, bigBtn } = ButtonStyles;
  const btnStyles = classNames(commonStyles, bigBtn);

  // const handleBtnDisable = () => {
  //   if (props?.loginForm?.syncErrors !== undefined) {
  //     console.log("disbled");
  //     setDisable(true);
  //   } else {
  //     console.log("not disabled");
  //     setDisable(false);
  //   }
  // };

  //console.log(store.getState().form.loginForm);

  const logInOnSubmit = (fields: any) => {
    if (loginFormOnSubmitValidator(fields) !== null) {
      setError("Есть незаполненные поля");
    } else {
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
            switch (`${error.message}`) {
              case "GraphQL error: Incorrect password":
                reject(setError("Неправильный пароль"));
                break;
              case "GraphQL error: No user with that email":
                reject(setError("Нет пользователя с этим email"));
                break;
            }
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
          //validate={handleBtnDisable}
          validate={[isEmailCorrect]}
          // btnHandler={handleBtnDisable}
        />
        <InputField
          name="loginPassword"
          placeholder="Пароль"
          type="password"
          className={InputFieldStyle}
        />
        <Button
          title="Войти в систему"
          className={btnStyles}
          disable={isBtnDisabled}
        />
        <Link className={LinkStyles} to="/registration">
          Зарегистрироваться
        </Link>
      </form>
      {isAnyErrors.length > 0 ? <ErrorMessage message={isAnyErrors} /> : null}
    </>
  );
};

const connectedForm = reduxForm<ILogInProps>({
  form: "loginForm"
})(LogIn);

const mapStateToProps = (state: any) => {
  const { form } = state;
  return form;
};

export default connect(mapStateToProps)(connectedForm);
