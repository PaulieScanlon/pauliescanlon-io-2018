import styled from "react-emotion";
import { common } from "../../styles";
// import { draculaTheme } from "../../styles/theme";

export const UserWrapper = styled.div({
  label: "user-wrapper"
});

export const ActionsGroup = styled.div({
  label: "actions-group",
  display: "flex",
  alignItems: "center",
  marginBottom: common.marginBottom / 2
});

export const Action = styled.div({
  label: "action",
  display: "flex",
  width: 120
});

export const Message = styled.div({
  label: "message",
  marginLeft: common.padding / 2
});
