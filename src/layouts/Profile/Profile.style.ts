import { style } from "typestyle";

const ProfileLyaoutStyles = {
  header: style({
    width: "100%",
    height: "8vh",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 1px 10px rgba(104, 121, 187, 0.1)"
  }),
  main: style({
    background: "#EBF2FB",
    height: "92vh",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "1.75%",
    paddingRight: "1.61%"
  }),
  headerMenuTitle: style({
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "19px",
    alignItems: "center",
    color: "#6879BB"
  }),
  headerSideMenuTitle: style({
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "19px",
    alignItems: "center",
    color: "white"
  })
};

export default ProfileLyaoutStyles;
