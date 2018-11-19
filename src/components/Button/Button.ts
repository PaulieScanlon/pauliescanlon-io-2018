import styled, { css } from "react-emotion";

import { font } from "../../styles/typography";
import { draculaTheme } from "../../styles/theme";

interface IProps {
  disabled?: boolean;
  backgroundColour?: string;
  grow?: boolean;
}

const buttonStyle = () =>
  css({
    border: "none",
    margin: 0,
    width: "auto",
    overflow: "visible",
    background: "transparent",
    font: "inherit",
    lineHeight: "normal",

    backgroundColor: draculaTheme.foreground,
    display: "inline-block",
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight,
    fontSize: font.fontSize,
    userSelect: "none",
    color: `${draculaTheme.pre}!important`,
    padding: "10px 12px",
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
    outline: "none"
  });

export const Button = styled.button<IProps>(
  buttonStyle,
  {
    label: "button"
  },
  ({ backgroundColour, disabled, grow }: any) => ({
    cursor: disabled ? "progress" : "pointer",
    backgroundColor: backgroundColour,
    flexGrow: grow ? 1 : 0
  })
);

export const ButtonLink = styled.a<IProps>(
  buttonStyle,
  {
    label: "button-link"
  },
  ({ backgroundColour, grow }: any) => ({
    backgroundColor: backgroundColour,
    flexGrow: grow ? 1 : 0
  })
);

export const ButtonFake = styled.span<IProps>(
  buttonStyle,
  {
    label: "button-fake"
  },
  ({ backgroundColour, disabled, grow }: any) => ({
    cursor: disabled ? "progress" : "cursor",
    backgroundColor: backgroundColour,
    flexGrow: grow ? 1 : 0
  })
);
