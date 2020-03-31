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
    display: "flex",
    alignItems: "center"
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
    marginLeft: "48px",
    marginRight: "24px"
  }),
  triangle: style({
    width: 0,
    height: 0,
    borderLeft: "50px solid transparent",
    borderRight: "50px solid transparent",
    borderBottom: "100px solid red",
    position: "relative",

    $nest: {
      "&::after": {
        content: ``,
        position: "absolute",
        top: "5px",
        left: "-45px",
        width: 0,
        height: 0,
        borderLeft: "45px solid transparent",
        borderRight: "45px solid transparent",
        borderBottom: "92px solid white"
      }
    }
  }),
  oval: style({
    background: "#EE4141",
    borderRadius: "20px",
    width: "4px",
    height: "17px"
  }),
  circle: style({
    width: "4px",
    height: "4px",
    background: "#EE4141",
    marginTop: "2px",
    borderRadius: "50%"
  })
};

export default ErrorMessageStyle;
