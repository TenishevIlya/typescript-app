import { style } from "typestyle";

const UnauthorizedLayoutStyles = {
  layoutBackground: style({
    background: "linear-gradient(213.53deg, #6879BB 7.06%, #9300BB 95.23%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "100%",
    height: "100vh",
    display: "block",
    overflowY: "hidden"
  }),
  logo: style({
    display: "block",
    margin: "4vh auto 4vh auto"
  }),
  formContainer: style({
    width: "424px",
    height: "656px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#FFFFFF",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "2px",
    paddingTop: "5.5vh"
  })
};

export default UnauthorizedLayoutStyles;
