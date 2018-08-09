import styled from "react-emotion";

// import { IPx } from '../../styles/breakpoints';
import { mq } from "../../styles/breakpoints";

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
    boxSizing: "border-box",
    border: "1px solid grey",
    width: "100%"
  },
  ({ xs, sm, md }: any) => ({
    [mq[0]]: {
      border: "1px solid red",
      width: `calc(${100 / xs}% - ${0}px)`
    },
    [mq[1]]: {
      border: "1px solid blue",
      width: `calc(${100 / sm}% - ${0}px)`
    },
    [mq[2]]: {
      border: "1px solid yellow",
      width: `calc(${100 / md}% - ${0}px)`
    }
  })
);
