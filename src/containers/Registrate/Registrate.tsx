import React from "react";
import classNames from "classnames";

/* Components */
import Input from "../../components/InputComponent/Input";
import Button from "../../components/ButtonComponent/Button";
import Header from "../../components/HeaderComponent/Header";
import { Link } from "react-router-dom";

/* Styles */
import InputStyles from "../../components/InputComponent/Input.style";
import LinkStyles from "../LogIn/LogIn.style";
import HeaderStyles from "../../components/HeaderComponent/Header.style";

/* Validators */
import formLength from "../../validators/validators";

/* Interfaces */
import IRegistrateProps from "./Registrate.inteface";
import { reduxForm } from "redux-form";

const Registrate: React.FC<IRegistrateProps> = props => {
  const { common, registrateHeader } = HeaderStyles;
  const CurrentHeaderStyle = classNames(common, registrateHeader);
  return (
    <form>
      <Header title="Регистрация" className={CurrentHeaderStyle} />
      <Input
        name="firstNameInput"
        placeholder="Имя"
        type="text"
        validate={[formLength]}
      />
      <Input name="secondNameInput" placeholder="Фамилия" type="text" />
      <Input
        name="registrateEmail"
        placeholder="Электронная почта"
        type="text"
      />
      <Input
        name="registratePassword"
        placeholder="Введите пароль"
        type="password"
      />
      <Input
        name="registratePasswordAgain"
        placeholder="Повторите пароль"
        type="password"
      />
      <Button title="Применить и войти" />
      <Link to="/" className={LinkStyles}>
        Уже зарегистрированны? Вход
      </Link>
    </form>
  );
};

export default reduxForm({ form: "proof" })(Registrate);
