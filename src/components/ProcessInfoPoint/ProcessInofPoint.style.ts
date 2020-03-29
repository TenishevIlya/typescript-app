import { style } from "typestyle";

const ProcessInfoPointStyle = {
  commonPoint: style({
    display: "flex",
    flexDirection: "column",
    marginRight: "4.5vw"
  }),
  captionStyle: style({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#999999",
    marginLeft: "36.5px"
  }),
  logoAndHeader: style({
    display: "flex",
    alignItems: "center"
  }),
  logoStyle: style({
    width: "24px",
    height: "24px"
  }),
  topItemBlock: style({
    marginBottom: "24px"
  })
};

export default ProcessInfoPointStyle;
