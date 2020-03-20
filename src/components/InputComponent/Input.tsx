import React, { useState, Fragment } from "react";
import InputStyles from "../../components/InputComponent/index.style";
import InVisibleEye from "../../img/invisible.svg";
import VisibleEye from "../../img/visible.svg";
import HideOrShowStyles from "../../components/HideOrShowComponent/HideOrShow";

interface IInputProps {
  placeholder: string;
  className: Object;
  type: string;
}

const Input: React.FC<IInputProps> = props => {
  const [value, setValue] = useState(" ");
  const [visibility, setVisibility] = useState(false);

  const { InputField, InputLabel } = InputStyles;

  if (props.type === "password") {
    if (visibility) {
      return (
        <label className={InputLabel}>
          <input
            type="text"
            placeholder={props.placeholder}
            className={InputField}
            onChange={event => setValue(event.target.value)}
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
        <label className={InputLabel}>
          <input
            type="password"
            placeholder={props.placeholder}
            className={InputField}
            onChange={event => setValue(event.target.value)}
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
    <label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={InputField}
        onChange={event => setValue(event.target.value)}
      />
    </label>
  );
};

export default Input;
