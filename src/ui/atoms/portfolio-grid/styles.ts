import styled from "react-emotion";

import { common } from "../../styles/common";

export const FlexContainer = styled.div({
  label: "flex-container",
  display: "flex",
  flexWrap: "wrap",
  margin: `0 -${common.padding / 2}px 0 -${common.padding / 2}px`
});
