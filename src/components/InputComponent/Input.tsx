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
  const [value, setValue] = useState("");

  const {
    InputField,
    InputPasswordLabel,
    InputErrorField,
    InputErrorMessage,
    InputTextLabel
  } = InputStyles;

  const ErrorInputStyle = classNames(InputField, InputErrorField); // in order to have string values
  const InputStyle = classNames(InputField); // in order to have string values

  const {
    input,
    meta: { error, invalid }
  } = props;

  const currentClass = invalid ? ErrorInputStyle : InputStyle;

  if (props.type === "password") {
    if (visibility) {
      return (
        <label className={InputPasswordLabel}>
          <input
            type="text"
            placeholder={props.placeholder}
            className={InputField}
            {...input}
          />
          <img
            src={VisibleEye}
            className={HideOrShowStyles}
            onClick={() => setVisibility(!visibility)}
          />
        </label>
      );
    } else {
      return (
        <label className={InputPasswordLabel}>
          <input
            type="password"
            placeholder={props.placeholder}
            className={InputField}
            {...input}
          />
          <img
            src={InVisibleEye}
            className={HideOrShowStyles}
            onClick={() => setVisibility(!visibility)}
          />
        </label>
      );
    }
  }

  return (
    <label className={InputTextLabel}>
      <input
        onChange={() => console.log(input.value)}
        type={props.type}
        placeholder={props.placeholder}
        {...input}
        className={`${currentClass}`}
      />
      {invalid ? <span className={InputErrorMessage}>{error}</span> : null}
    </label>
  );
};

interface IInputField extends Partial<WrappedFieldProps> {
  placeholder?: string;
  type?: "text" | "password";
  className?: Object;
}

const InputField: React.FC<IInputField & BaseFieldProps> = props => {
  return <Field name="field" component={Input} {...props} />;
};

export default InputField;
