import styled from "react-emotion";

import { px } from "./styles/breakpoints";
import { common } from "./styles/common";

export const AppWrapper = styled.div({
  label: "app"
});

export const FullWidth = styled.div({
  label: "full-width",
  width: "100%"
});

export const ContainedWidth = styled.div({
  label: "contained-width",
  margin: "0 auto",
  padding: `0px ${common.padding}px 0px ${common.padding}px`,
  maxWidth: `${px.lg}`
});
