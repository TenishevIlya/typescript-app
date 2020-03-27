import React, { useState } from "react";
import classNames from "classnames";
import { Dispatch } from "redux";
import { initialize } from "redux-form";
import { CHANGE_INITIAL_VALUE } from "../../store/actions/actions";
import store from "../../store/index.store";

/* Components */
import InputField from "../../components/InputComponent/Input";
import Button from "../../components/ButtonComponent/Button";
import Header from "../../components/HeaderComponent/Header";
import { Link } from "react-router-dom";

/* Styles */
import InputStyles from "../../components/InputComponent/Input.style";
import LinkStyles from "../LogIn/LogIn.style";
import HeaderStyles from "../../components/HeaderComponent/Header.style";

/* Validators */
import {
  isEmailCorrect,
  registrateFormOnSubmitValidator,
  comparePasswords
} from "../../validators/validators";

/* Interfaces */
import IRegistrateProps from "./Registrate.inteface";
import { reduxForm } from "redux-form";
import { useMutation } from "@apollo/react-hooks";
import {
  SignUpMutation,
  SignUpValues,
  LogInMutation,
  User,
  LogInMutatonProps
} from "../../mutations/mutation.type";

/* Apollo  */
import signupMutation from "../../mutations/signUpMutation";
import loginMutation from "../../mutations/loginMutation";
import { connect } from "react-redux";

const Registrate = (props: any) => {
  const [isAnyErrors, setError] = useState("");
  const { common, registrateHeader } = HeaderStyles;
  const { InputFieldStyle } = InputStyles;
  const CurrentHeaderStyle = classNames(common, registrateHeader);

  const {
    handleSubmit,
    CHANGE_INITIAL_VALUE,
    initialValues,
    initialize
  } = props;

  const validatePasswords = comparePasswords(initialValues);

  const [signUp] = useMutation<SignUpMutation, SignUpValues>(signupMutation);
  const [logIn] = useMutation<LogInMutation<User>, LogInMutatonProps>(
    loginMutation
  );

  const registrateOnSubmit = (fields: any) => {
    if (registrateFormOnSubmitValidator(fields) !== null) {
      setError("Есть незаполненные поля");
      console.log("asd");
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
            // localStorage.setItem("token", `${data.data?.login.token}`);
            // history.push("/profile");
          })
          .then(() => {
            logIn({
              variables: {
                email: fields.registrateEmail,
                password: fields.registratePassword
              }
            }).then(data => {
              console.log(data);
            });
          });
        // .catch(error => {
        //   switch (`${error.message}`) {
        //     case "GraphQL error: Incorrect password":
        //       reject(setError("Неправильный пароль"));
        //       break;
        //     case "GraphQL error: No user with that email":
        //       reject(setError("Нет пользователя с этим email"));
        //       break;
        //   }
        // });
      });
    }
  };

  const handlePasswordValidation = (e: any) => {
    initialize(e.target.value);
    CHANGE_INITIAL_VALUE(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(registrateOnSubmit)}>
      <Header title="Регистрация" className={CurrentHeaderStyle} />
      <InputField
        name="registrateName"
        placeholder="Имя"
        type="text"
        className={InputFieldStyle}
        //validate={}
      />
      <InputField
        name="registrateSecondName"
        className={InputFieldStyle}
        placeholder="Фамилия"
        type="text"
        // validate=
      />
      <InputField
        className={InputFieldStyle}
        name="registrateEmail"
        placeholder="Электронная почта"
        type="text"
        validate={[isEmailCorrect]}
      />
      <InputField
        className={InputFieldStyle}
        name="registratePassword"
        placeholder="Введите пароль"
        type="password"
        passwordHandler={handlePasswordValidation}
      />
      <InputField
        className={InputFieldStyle}
        name="registratePasswordRepeat"
        placeholder="Повторите пароль"
        type="password"
        validate={[validatePasswords]}
      />
      <Button title="Применить и войти" />
      <Link to="/" className={LinkStyles}>
        Уже зарегистрированны? Вход
      </Link>
    </form>
  );
};

const connectedRegistration = reduxForm<IRegistrateProps>({
  form: "registration",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Registrate);

// const mapStateToProps = (state: any) => ({
//   // const { initialValues } = state;
//   // return initialValues;
//   initialValues: state.getValue
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   giveValue: (value: any) => {
//     dispatch(CHANGE_INITIAL_VALUE(value));
//   }
// });

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   dispatch(CHANGE_INITIAL_VALUE(`${value}`));
// };

// export default reduxForm<IRegistrateProps>({ form: "registrateForm" })(
//   Registrate
// );
export default connect(
  null,
  {
    CHANGE_INITIAL_VALUE
    // initialize: {
    //   email: "asd"
    // }
  }
  //mapDispatchToProps
)(connectedRegistration);
