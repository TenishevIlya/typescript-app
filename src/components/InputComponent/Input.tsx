import React, { useState } from "react";
import { Field } from "redux-form";
import { BaseFieldProps } from "redux-form";

/* Img */
import InVisibleEye from "../../img/invisible.svg";
import VisibleEye from "../../img/visible.svg";

/* Styles */
import InputStyles from "./Input.style";
import HideOrShowStyles from "../../components/HideOrShowComponent/HideOrShow";

/* Interface */
import IInputProps from "./Input.interface";
import classNames from "classnames";
import IInputField from "./Input.interface";

const Input: React.FC<IInputProps> = props => {
  const [visibility, setVisibility] = useState(false);

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  const {
    InputPasswordLabel,
    InputErrorField,
    InputErrorMessage,
    InputTextLabel
  } = InputStyles;

  const {
    input,
    meta: { error, invalid, touched, active },
    className
  } = props;

  const ErrorInputStyle = classNames(className, InputErrorField); // in order to have string values
  const InputStyle = classNames(className); // in order to have string values

  const currentPasswordClass = active & invalid ? ErrorInputStyle : InputStyle;
  const currentInputClass = touched & invalid ? ErrorInputStyle : InputStyle;

  if (props.type === "password") {
    return (
      <label className={InputTextLabel}>
        <div className={InputPasswordLabel}>
          <input
            type={visibility ? "text" : "password"}
            placeholder={props.placeholder}
            {...input}
            className={`${currentPasswordClass}`}
            onBlur={props.passwordHandler}
            onClick={props.focusHandler}
          />
          <img
            src={visibility ? VisibleEye : InVisibleEye}
            className={HideOrShowStyles}
            onClick={changeVisibility}
            alt="Hide eye"
          />
        </div>
        {active & invalid ? (
          <span className={InputErrorMessage}>{error}</span>
        ) : null}
      </label>
    );
  }

  return (
    <label className={InputTextLabel}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        {...input}
        className={`${currentInputClass}`}
        onFocus={props.focusHandler}
      />
      {touched & invalid ? (
        <span className={InputErrorMessage}>{error}</span>
      ) : null}
    </label>
  );
};

const InputField: React.FC<IInputField & BaseFieldProps> = props => {
  return <Field name={props.name} component={Input} {...props} />;
};

export default InputField;
