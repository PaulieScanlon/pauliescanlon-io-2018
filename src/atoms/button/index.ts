import styled from "react-emotion";
import { lighten } from "polished";
import { font } from "../../styles/typography";

interface IButton {
  buttonColour: string;
  fontColour: string;
}

export const Button = styled.button<IButton>(
  {
    label: "button",
    borderRadius: "28px",
    fontFamily: font.fontFamily,
    fontSize: "20px",
    cursor: "pointer",
    padding: "10px 20px 10px 20px",
    textDecoration: "none",
    border: "none",
    margin: 0,
    minWidth: 100,
    transition: "all 0.2s linear 0s"
  },
  ({ buttonColour, fontColour }) => ({
    backgroundColor: buttonColour,
    color: fontColour,
    "&:hover": {
      background: lighten(0.1, `${buttonColour}`),
      textDecoration: "none"
    }
  })
);
