import styled from "react-emotion";
import { injectGlobal } from "react-emotion";
import { px } from "./breakpoints";
import { draculaTheme } from "./theme";

import { font } from "./typography/";

injectGlobal`
  html, body {
    width: 100%;
    min-width: 320px;
    height: 100%;
    padding: 0;
    margin: 0; 
    color: ${font.color};
    font-family: ${font.fontFamily};
    background: ${draculaTheme.background};
  }
  `;

export const common = {
  padding: 20,
  header: 70,
  dropShadow:
    "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px",
  darkenAmt: 0.01,
  lightenAmt: 0.05,
  marginBottom: 20
};

export const MainWrapper = styled.main({
  label: "main-wrapper",
  marginTop: common.header,
  backgroundColor: draculaTheme.background
});

export const FullWidth = styled.div({
  label: "full-width",
  width: "100%"
});

export const ContainedWidth = styled.div({
  label: "contained-width",
  margin: "0 auto",
  padding: `0px ${common.padding}px 0px ${common.padding}px`,
  maxWidth: `${px.md}`,
  minHeight: 300
});

export const Section = styled.section({
  label: "section",
  display: "flex",
  flexWrap: "wrap"
});
