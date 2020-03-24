import { style } from "typestyle";

const MenuItemStyle = {
  wrapper: style({
    display: "flex",
    width: "16.4vw",
    cursor: "pointer",
    marginBottom: "40px"
  }),
  iconLogo: style({
    marginRight: "16px"
  }),
  itemTitleStyle: style({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "19px",
    display: "flex",
    alignItems: " center",
    color: "#FFFFFF"
  })
};

export default MenuItemStyle;
