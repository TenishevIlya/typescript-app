import { style } from "typestyle";

// const ErrorMessageStyle = style({
//   width: "424px",
//   height: "96px",
//   background: "#FFE9DB"
// });

const ErrorMessageStyle = {
  common: style({
    width: "424px",
    height: "96px",
    background: "#FFE9DB",
    marginTop: "24px",
    display: "flex"
  }),
  message: style({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    color: "#333333",
    padding: "36px 0 36px 0"
  }),
  logo: style({
    background: "rgba(255, 255, 255, 0.01)",
    paddingLeft: "48px"
  })
};

export default ErrorMessageStyle;
