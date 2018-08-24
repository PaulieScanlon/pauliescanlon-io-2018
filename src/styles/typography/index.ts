import styled from "react-emotion";

import { draculaTheme } from "../theme";

interface IProps {
  fontColour?: string;
  linkColour?: string;
  fontAlign?: string;
  maxWidth?: number;
}

/* Setup */
export const font = {
  fontFamily: `Inconsolata, monospace`,
  fontWeight: 700,
  fontSize: "1rem",
  color: draculaTheme.foreground,
  textAlign: "left",
  maxWidth: "100%",
  WebkitFontSmoothing: "antialiased"
};

/* Copy & Lists */
export const P = styled.p<IProps>({
  ...(font as any),
  label: "p",
  fontWeight: 400,
  lineHeight: "1.5rem",
  marginTop: 0,
  marginBottom: "1.5rem"
});
