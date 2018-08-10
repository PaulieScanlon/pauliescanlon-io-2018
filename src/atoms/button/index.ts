import styled from "react-emotion";
import { lighten, darken } from "polished";
import { font } from "../../styles/typography";
import { theme } from "../../styles/theme";

interface IButton {
  buttonColour?: string;
  fontColour?: string;
}

export const Button = styled.button<IButton>(
  {
    label: "button",
    borderRadius: 2,
    borderStyle: "solid",
    borderWidth: 1,
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight,
    fontSize: font.fontSize,
    cursor: "pointer",
    padding: "5px 10px",
    textDecoration: "none",
    margin: 0,
    minWidth: 100,
    transition: "all 0.2s linear 0s"
  },
  ({ buttonColour, fontColour }) => ({
    backgroundColor: buttonColour ? buttonColour : theme.pink,
    borderColor: darken(0.05, buttonColour ? `${buttonColour}` : theme.pink),
    color: fontColour ? fontColour : theme.white,
    "&:hover": {
      backgroundColor: lighten(
        0.1,
        buttonColour ? `${buttonColour}` : theme.pink
      ),
      textDecoration: "none"
    }
  })
);
