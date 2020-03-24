import React, { useState, Fragment } from "react";
import { Dispatch } from "redux";
import { MapStateToProps, MapDispatchToProps, connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";
import classNames from "classnames";

/* Components */
import InputField from "../../components/InputComponent/Input";
import Button from "../../components/ButtonComponent/Button";
import { Link } from "react-router-dom";

/* styles */
import InputStyles from "../../components/InputComponent/Input.style";
import LinkStyles from "./LogIn.style";

/* Interfaces */
import ILogInProps from "./Login.interface";
import {
  LogInMutation,
  User,
  LogInMutatonProps
} from "../../mutations/mutation.type";

/* App store */
import store from "../../store/index.store";
import { CHANGE_INPUT, CLICK_BTN } from "../../store/actions/actions";

/* Validators */
import { inputLength, isEmailCorrect } from "../../validators/validators";

/* Apollo */
import { useMutation } from "@apollo/react-hooks";
import loginMutation from "../../mutations/loginMutation";

const LogIn: React.FC<ILogInProps> = (fields, props) => {
  const { InputFieldStyle } = InputStyles;
  const validateInputLength = inputLength(7);

  const [logIn] = useMutation<LogInMutation<User>, LogInMutatonProps>(
    loginMutation
  );

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        logIn({
          variables: {
            email: "1@1.ru",
            password: "1"
          }
        }).then(data => {
          console.log(data.data?.user);
        });
      }}
    >
      <InputField
        name="loginEmail"
        placeholder="Электронная почта"
        type="text"
        className={InputFieldStyle}
        validate={[isEmailCorrect]}
      />
      <InputField
        name="loginPassword"
        placeholder="Пароль"
        type="password"
        className={InputFieldStyle}
        validate={[validateInputLength]}
      />
      <Button title="Войти в систему" />
      <Link className={LinkStyles} to="/registration">
        Зарегистрироваться
      </Link>
    </form>
  );
};

const connectedForm = reduxForm({
  form: "q"
})(LogIn);

// const mapStateToProps = (state: any) => {
//   const { form, ...rest } = state;
//   return { ...rest };
// };

const mapStateToProps = (state: any) => {
  const selector = formValueSelector("q");
  return selector(state, "loginEmail", "loginPassword");
};

const mapDispacthToProps = (dispatch: Dispatch) => {
  return {
    dispatchin() {
      dispatch({ type: "CLICK_BTN" });
    }
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(connectedForm);

//export default withMutation(loginMutation)(connectedForm(LogIn));

//export default connectedForm(LogIn);
