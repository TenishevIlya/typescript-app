import React from "react";
import Input from "../../components/InputComponent/Input";
import Button from "../../components/ButtonComponent/Button";
import InputStyles from "../../components/InputComponent/index.style";
import Header from "../../components/HeaderComponent/Header";
import { Link } from "react-router-dom";
import LinkStyles from "../LogIn/index.style";
import HeaderStyles from "../../components/HeaderComponent/index.style";
import classNames from "classnames";

interface IRegistrateProps {}

const Registrate: React.FC<IRegistrateProps> = props => {
  const { common, registrateHeader } = HeaderStyles;
  const CurrentHeaderStyle = classNames(common, registrateHeader);
  return (
    <div>
      <Header title="Регистрация" className={CurrentHeaderStyle} />
      <Input placeholder="Имя" type="text" className={InputStyles} />
      <Input placeholder="Фамилия" type="text" className={InputStyles} />
      <Input
        placeholder="Электронная почта"
        type="text"
        className={InputStyles}
      />
      <Input
        placeholder="Введите пароль"
        type="password"
        className={InputStyles}
      />
      <Input
        placeholder="Повторите пароль"
        type="password"
        className={InputStyles}
      />
      <Button title="Применить и войти" />
      <Link to="/" className={LinkStyles}>
        Уже зарегистрированны? Вход
      </Link>
    </div>
  );
};

export default Registrate;
