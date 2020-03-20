import React, { useState } from "react";
import Input from "../../components/InputComponent/Input";
import InputStyles from "../../components/InputComponent/index.style";
import { Link } from "react-router-dom";
import Button from "../../components/ButtonComponent/Button";
import LinkStyles from "./index.style";

interface ILogIn {}

const LogIn: React.FC<ILogIn> = props => {
  return (
    <div>
      <Input
        placeholder="Электронная почта"
        type="text"
        className={InputStyles}
      />
      <Input placeholder="Пароль" type="password" className={InputStyles} />
      <Button title="Войти в систему" />
      <Link className={LinkStyles} to="/registration">
        Зарегистрироваться
      </Link>
    </div>
  );
};

export default LogIn;
