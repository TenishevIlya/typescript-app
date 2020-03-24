import React, { useState, Fragment } from "react";
import { Field } from "redux-form";
import { BaseFieldProps, WrappedFieldProps } from "redux-form";

/* Img */
import InVisibleEye from "../../img/invisible.svg";
import VisibleEye from "../../img/visible.svg";

/* Styles */
import InputStyles from "./Input.style";
import HideOrShowStyles from "../../components/HideOrShowComponent/HideOrShow";

/* Interface */
import IInputProps from "./Input.interface";
import classNames from "classnames";

const Input: React.FC<IInputProps> = props => {
  const [visibility, setVisibility] = useState(false);

  const {
    InputPasswordLabel,
    InputErrorField,
    InputErrorMessage,
    InputTextLabel
  } = InputStyles;

  const {
    input,
    meta: { error, invalid, touched },
    className
  } = props;

  const ErrorInputStyle = classNames(className, InputErrorField); // in order to have string values
  const InputStyle = classNames(className); // in order to have string values

  const currentClass = touched & invalid ? ErrorInputStyle : InputStyle;

  if (props.type === "password") {
    return (
      <label className={InputTextLabel}>
        <div className={InputPasswordLabel}>
          <input
            type={visibility ? "text" : "password"}
            placeholder={props.placeholder}
            {...input}
            className={`${currentClass}`}
          />
          <img // think about component
            src={visibility ? VisibleEye : InVisibleEye}
            className={HideOrShowStyles}
            onClick={() => setVisibility(!visibility)}
          />
        </div>
        {touched & invalid ? (
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
        className={`${currentClass}`}
      />
      {touched & invalid ? (
        <span className={InputErrorMessage}>{error}</span>
      ) : null}
    </label>
  );
};

interface IInputField extends Partial<WrappedFieldProps> {
  placeholder?: string;
  type?: "text" | "password";
  className?: Object;
}

const InputField: React.FC<IInputField & BaseFieldProps> = props => {
  return <Field name={props.name} component={Input} {...props} />;
};

export default InputField;
