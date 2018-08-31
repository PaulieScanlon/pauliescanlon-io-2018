import styled from "react-emotion";

import { px } from "./breakpoints";
import { common } from "./common";
import { draculaTheme } from "./theme";

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
  display: "flex"
});
