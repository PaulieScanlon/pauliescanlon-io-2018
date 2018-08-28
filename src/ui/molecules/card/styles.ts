import styled from "react-emotion";

import { common } from "../../../styles/common";
import { draculaTheme } from "../../../styles/theme";

export const CardWrapper = styled.div({
  label: "card-wrapper",
  boxShadow: common.dropShadow,
  backgroundColor: draculaTheme.background,
  position: "relative",
  // margin: `${common.padding}px 0px`,
  marginBottom: common.padding
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
