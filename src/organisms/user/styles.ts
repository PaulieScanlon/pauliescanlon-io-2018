import styled from "react-emotion";

import { themeObjects } from "../../styles/theme";
import { common } from "../../styles/common";

export const UserWrapper = styled.div({
  label: "user-wrapper",
  boxShadow: common.dropShadow,
  backgroundColor: themeObjects.default.primary,
  position: "relative",
  margin: `${common.padding}px 0px ${common.padding}px 0px`
  // marginBottom: `${common.padding * 2}px`
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

export const UserProfile = styled.img({
  label: "user-profile",
  width: 100,
  height: "auto",
  borderRadius: "50%",
  boxSizing: "border-box",
  border: `1px solid ${themeObjects.default.secondary}`
});
