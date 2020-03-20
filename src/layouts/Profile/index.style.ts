import { style } from "typestyle";

const ProfileLyaoutStyles = {
  header: style({
    width: "100%",
    height: "8vh",
    /* height: 60px; */
    display: "flex",
    alignItems: "center"
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
  headerMenuLogo: style({
    marginLeft: "1.75%",
    marginRight: "1.17%"
  }),
  headerMenuTitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "19px",
    alignItems: "center",
    color: "#6879BB"
  }
};

export default ProfileLyaoutStyles;
