import styled from "react-emotion";
import { common } from "../../styles";

export const TagsBlockWrapper = styled.div({
  label: "tags-block",
  display: "flex",
  flexWrap: "wrap",
  marginBottom: `${common.marginBottom}`,
  "span:not(:last-child)": {
    marginRight: 5
  }
});
