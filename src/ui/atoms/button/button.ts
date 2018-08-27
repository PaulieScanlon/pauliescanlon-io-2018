import styled from "react-emotion";

import { font } from "../../../styles/typography";
import { draculaTheme } from "../../../styles/theme";

interface IProps {
  backgroundColour?: string;
}

export const Button = styled.button<IProps>(
  {
    label: "button",
    borderRadius: 2,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: draculaTheme.foreground,
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight,
    fontSize: font.fontSize,
    cursor: "pointer",
    color: draculaTheme.pre,
    padding: "5px 10px",
    textDecoration: "none",
    margin: 0,
    minWidth: 100,
    transition: "all 0.2s linear 0s",

    ":focus": {
      outline: "none"
    }
  },
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour
  })
);
