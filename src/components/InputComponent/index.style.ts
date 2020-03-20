import { style } from "typestyle";

// const InputStyles = style({
//   background: "#FFFFFF",
//   border: "1px solid #D6DCE9",
//   boxSizing: "border-box",
//   borderRadius: "4px",
//   height: "36px",
//   width: "328px",
//   margin: "0 48px 1.8vh 48px",
//   fontFamily: "Open Sans",
//   fontStyle: "normal",
//   fontWeight: "normal",
//   fontSize: "14px",
//   lineHeight: "19px",
//   color: "#6879BB",
//   padding: "6px 0 6px 12px"
// });

const InputStyles = {
  InputField: style({
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
  InputLabel: style({
    display: "flex"
  })
};

export default InputStyles;
