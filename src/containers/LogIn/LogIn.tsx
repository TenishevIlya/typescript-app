import React, { useState, Fragment } from "react";
import { Dispatch } from "redux";
import { MapStateToProps, MapDispatchToProps, connect } from "react-redux";
import { reduxForm } from "redux-form";

/* Components */
import InputField from "../../components/InputComponent/Input";
import Button from "../../components/ButtonComponent/Button";
import { Link } from "react-router-dom";

/* styles */
import InputStyles from "../../components/InputComponent/Input.style";
import LinkStyles from "./LogIn.style";

/* Interfaces */
import ILogInProps from "./Login.interface";

/* App store */
import store from "../../store/index.store";
import { CHANGE_INPUT, CLICK_BTN } from "../../store/actions/actions";

/* Validators */
import formLenght from "../../validators/validators";

import { withMutation } from "@apollo/react-hoc";
import loginMutation from "../../mutations/loginMutation";

const LogIn: React.FC<ILogInProps> = props => {
  return (
    <form>
      <InputField
        name="loginField"
        placeholder="Электронная почта"
        type="text"
        validate={[formLenght]}
      />
      <InputField
        name="passwordField"
        placeholder="Пароль"
        type="password"
        validate={[formLenght]}
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
  //validate: formLength
})(LogIn);

const mapStateToProps = (state: any) => {
  const { form, ...rest } = state;
  return { ...rest };
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
