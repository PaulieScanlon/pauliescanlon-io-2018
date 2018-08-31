import styled from "react-emotion";

import { common } from "../../styles/common";
import { draculaTheme } from "../../styles/theme";

export const CardWrapper = styled.div({
  label: "card-wrapper",
  boxShadow: common.dropShadow,
  backgroundColor: draculaTheme.background,
  position: "relative",
  margin: `2px ${common.padding / 2}px 2px ${common.padding / 2}px`
});

export const CardText = styled.div({
  label: "card-text",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: `${common.padding}`,
  minHeight: 200,
  "& p": {
    flexGrow: 1
  }
});
