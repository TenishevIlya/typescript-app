import { style } from "typestyle";

const InputStyles = {
  InputFieldStyle: style({
    background: "#FFFFFF",
    border: "1px solid #D6DCE9",
    boxSizing: "border-box",
    borderRadius: "4px",
    height: "36px",
    width: "328px",
    margin: "0 48px 1.8vh 48px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#6879BB",
    padding: "6px 0 6px 12px"
  }),
  InputPasswordLabel: style({
    display: "flex"
  }),
  InputErrorMessage: style({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    color: "#EE4141",
    marginLeft: "48px",
    marginTop: "-1.8vh"
  }),
  InputErrorField: style({
    background: "#FFFFFF",
    border: "1px solid #EE4141",
    boxSizing: "border-box",
    borderRadius: "4px",
    outline: "none"
  }),
  InputTextLabel: style({
    display: "block",
    height: "52px"
  })
};

export default InputStyles;
