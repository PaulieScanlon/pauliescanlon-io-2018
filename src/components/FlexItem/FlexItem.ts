import styled from "react-emotion";

import { mq } from "../../styles/breakpoints";
import { common } from "../../styles/";

interface IFlexItem {
  xs: number;
  sm: number;
  md?: number;
  marginBottom?: number;
}

export const FlexItem = styled.div<IFlexItem>(
  {
    label: "flex-item",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    boxSizing: "border-box",
    width: "100%"
  },
  ({ xs, sm, md, marginBottom }: any) => ({
    marginBottom: marginBottom ? marginBottom : common.marginBottom,
    [mq[0]]: {
      // border: "1px solid red",
      //width: `calc(${100 / xs}% - ${0}px)`,
      maxWidth: `calc(${100 / xs}% - ${0}px)`
    },
    [mq[1]]: {
      // border: "1px solid blue",
      //width: `calc(${100 / sm}% - ${0}px)`,
      maxWidth: `calc(${100 / sm}% - ${0}px)`
    },
    [mq[2]]: {
      // border: "1px solid yellow",
      //width: `calc(${100 / md}% - ${0}px)`,
      maxWidth: `calc(${100 / md}% - ${0}px)`
    }
  })
);
