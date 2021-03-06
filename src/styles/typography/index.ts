import styled from "react-emotion";

import { draculaTheme } from "../theme";

interface IProps {
  /**
   * css color prop
   *
   * @default draculaTheme.foreground
   **/
  fontColour?: string;
  /**
   * css display prop
   *
   * @default "block"
   **/
  display?: string;
}

/* Setup */
export const font = {
  color: draculaTheme.foreground,
  display: "block",
  fontFamily: `Inconsolata, monospace`,
  fontWeight: 400,
  fontSize: 16,
  textAlign: "left",
  lineHeight: "18px",
  marginTop: 0,
  marginBottom: 20,
  maxWidth: "100%"
};

export const P = styled.p<IProps>(
  {
    ...(font as any),
    label: "p"
  },
  ({ fontColour }) => ({
    color: fontColour
  })
);

export const H1 = styled.h1<IProps>(
  {
    ...(font as any),
    label: "h1",
    fontWeight: 700
  },
  ({ fontColour, display }) => ({
    color: fontColour,
    display: display
  })
);

export const H2 = styled.h2<IProps>(
  {
    ...(font as any),
    label: "h2",
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "24px"
  },
  ({ fontColour, display }) => ({
    color: fontColour,
    display: display
  })
);

export const Small = styled.small<IProps>(
  {
    ...(font as any),
    label: "small",
    marginBottom: "4px;",
    fontSize: "12px"
  },
  ({ fontColour }) => ({
    color: fontColour
  })
);
