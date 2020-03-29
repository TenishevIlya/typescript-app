import { style } from "typestyle";

const ProcessListItemStyle = {
  commonItem: style({
    height: "252px",
    width: "97vw",
    background: "#FFFFFF",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "2px",
    marginBottom: "12px"
  }),
  header: style({
    height: "60px",
    width: "95vw",
    borderBottom: "1px solid #D6DCE9",
    display: "flex",
    alignItems: "center"
  }),
  mainPart: style({
    display: "flex",
    alignItems: "center"
  })
};

export default ProcessListItemStyle;
