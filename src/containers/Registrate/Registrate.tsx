import React from "react";
import classNames from "classnames";

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
import { inputLength, isEmailCorrect } from "../../validators/validators";

/* Interfaces */
import IRegistrateProps from "./Registrate.inteface";
import { reduxForm } from "redux-form";

const Registrate: React.FC<IRegistrateProps> = props => {
  const { common, registrateHeader } = HeaderStyles;
  const { InputFieldStyle } = InputStyles;
  const CurrentHeaderStyle = classNames(common, registrateHeader);
  const validateInputLength = inputLength(7);

  return (
    <form>
      <Header title="Регистрация" className={CurrentHeaderStyle} />
      <InputField
        name="firstNameInput"
        placeholder="Имя"
        type="text"
        className={InputFieldStyle}
        validate={[validateInputLength]}
      />
      <InputField
        name="secondNameInput"
        className={InputFieldStyle}
        placeholder="Фамилия"
        type="text"
        validate={[validateInputLength]}
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
        validate={[validateInputLength]}
      />
      <InputField
        className={InputFieldStyle}
        name="registratePasswordAgain"
        placeholder="Повторите пароль"
        type="password"
        validate={[validateInputLength]}
      />
      <Button title="Применить и войти" />
      <Link to="/" className={LinkStyles}>
        Уже зарегистрированны? Вход
      </Link>
    </form>
  );
};

export default reduxForm({ form: "proof" })(Registrate);
