import { style } from "typestyle";

const MenuStyles = {
  common: style({
    display: "flex",
    alignItems: "center",
    marginLeft: "1.75%",
    cursor: "pointer"
  }),
  icon: style({
    marginRight: "1.17vw"
  }),
  sidebarMenuHeader: style({
    display: "flex",
    alignItems: "center",
    paddingLeft: "1.75vw",
    background: "#535374",
    boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.2)",
    height: "54px"
  })
};

export default MenuStyles;
