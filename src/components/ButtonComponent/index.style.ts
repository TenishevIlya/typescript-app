import { style } from "typestyle";

const ButtonStyles = {
  commonStyles: style({
    background: "#FFCE0C",
    borderRadius: "4px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center",
    color: "#333333",
    border: "none"
  }),
  bigBtn: style({
    height: "36px",
    width: "328px",
    margin: "1.8vh 48px 0 48px"
  })
};

export default ButtonStyles;
