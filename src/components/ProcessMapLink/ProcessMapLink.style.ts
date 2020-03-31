import { style } from "typestyle";

const ProcessMapLinkStyle = {
  commonLink: style({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 0,
    cursor: "pointer",

    $nest: {
      "&:hover": {
        textDecoration: "underline",
        textDecorationColor: "#6879BB"
      }
    }
  })
};

export default ProcessMapLinkStyle;
