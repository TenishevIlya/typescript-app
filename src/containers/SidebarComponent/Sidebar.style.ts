import { style } from "typestyle";

const SidebarStyles = {
  common: style({
    position: "absolute",
    zIndex: 5,
    width: "100%",
    height: "100%",
    display: "flex",
    transition: "2s ease-in-out .5s"
  }),
  unUsePart: style({
    background: "#20262B",
    opacity: "0.5",
    height: "100%",
    width: "83.6vw"
  }),
  menuPart: style({
    width: "16.4vw",
    height: "100%"
  })
};

export default SidebarStyles;
