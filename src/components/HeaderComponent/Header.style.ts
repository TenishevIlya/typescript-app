import { style } from "typestyle";

const HeaderStyles = {
  common: style({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#404064"
  }),
  registrateHeader: style({
    display: "flex",
    fontSize: "18px",
    lineHeight: "25px",
    marginLeft: "48px",
    marginBottom: "3vh"
  }),
  editUserHeader: style({
    fontSize: "26px",
    lineHeight: "35px"
  }),
  processListItemHeader: style({
    fontSize: "22px",
    lineHeight: "30px",
    color: "#6879BB",
    margin: "12px 0 12px 24px"
  }),
  processMapLink: style({
    fontSize: "12px",
    lineHeight: "16px",
    color: "#6879BB",
    textDecoration: "none",
    marginRight: "12px"
  })
};

export default HeaderStyles;
