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
    border: "none",
    cursor: "pointer",
    outline: "none",

    $nest: {
      "&:hover": {
        background: " #FFD73B",
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.12)"
      },
      "&:active": {
        background: "#FFC40C",
        boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.12)"
      }
      // "&:focus": {
      //   background: "#FFCE0C",
      //   border: "1px solid #FFFBEA",
      //   boxSizing: "border-box",
      //   boxShadow: "0px 1px 10px #FFD73B",
      //   borderRadius: "4px"
      // }
    }
  }),
  bigBtn: style({
    height: "36px",
    width: "328px",
    margin: "1.8vh 48px 0 48px"
  }),
  smallBtn: style({
    height: "36px",
    width: "116px",
    marginRight: "0px",
    marginLeft: "auto",

    $nest: {
      "&:hover": {
        background: "#FFCE0C",
        boxShadow: "0px 0px 0px"
      }
    }
  }),
  pressedBtn: style({
    background: "#FFC40C",
    boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.12)"
  }),
  disabledBtn: style({
    background: "#FFCE0C",
    borderRadius: "4px",
    opacity: "0.5",
    cursor: "default",

    $nest: {
      "&:hover": {
        background: "#FFCE0C",
        boxShadow: "0px 0px 0px"
      }
    }
  })
};

export default ButtonStyles;
