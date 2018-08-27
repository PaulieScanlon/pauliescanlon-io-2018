import styled from "react-emotion";

import { draculaTheme } from "../../../styles/theme";
import { common } from "../../../styles/common";

export const UserWrapper = styled.div({
  label: "user-wrapper",
  boxShadow: common.dropShadow,
  backgroundColor: draculaTheme.background,
  position: "relative",
  margin: `${common.padding}px 0px ${common.padding}px 0px`
});

export const UserText = styled.div({
  label: "user-text",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: `${common.padding}`,
  minHeight: 200,
  "& p": {
    flexGrow: 1
  }
});
