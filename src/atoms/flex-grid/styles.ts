import styled from "react-emotion";

// import { IPx } from '../../styles/breakpoints';
import { mq } from "../../styles/breakpoints";
import { common } from "../../styles/common";

interface IFlexItem {
  xs: number;
  sm: number;
  md?: number;
}

export const FlexContainer = styled.div({
  label: "flex-container",
  display: "flex",
  flexWrap: "wrap"
});

export const FlexItem = styled.div<IFlexItem>(
  {
    label: "flex-item",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexGrow: 1,
    boxSizing: "border-box",
    padding: `0 ${common.padding / 2}px 0 ${common.padding / 2}px`,
    width: "100%"
  },
  ({ xs, sm, md }: any) => ({
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
