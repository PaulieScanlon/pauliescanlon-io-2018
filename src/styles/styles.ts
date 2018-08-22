import styled from "react-emotion";

import { px } from "./breakpoints";
import { common } from "./common";
import { themeObjects } from "./theme";

interface IProps {
  height?: number;
}

export const TemplateWrapper = styled.div({
  label: "template-wrapper",
  marginTop: common.header,
  backgroundColor: themeObjects.default.primary
});

export const FullWidth = styled.div({
  label: "full-width",
  width: "100%"
});

export const ContainedWidth = styled.div<IProps>(
  {
    label: "contained-width",
    margin: "0 auto",
    padding: `0px ${common.padding}px 0px ${common.padding}px`,
    maxWidth: `${px.md}`,
    minHeight: 300
  },
  ({ height }) => ({
    height: height
  })
);
