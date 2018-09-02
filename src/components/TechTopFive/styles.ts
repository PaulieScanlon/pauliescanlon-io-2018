import styled from "react-emotion";
import { draculaTheme } from "../../styles/theme";

interface IProps {
  width: number;
}

export const TechTopFiveWrapper = styled.div({
  label: "tech-top-five-wrapper",
  display: "flex",
  flexDirection: "column"
});

export const BarWrapper = styled.div({
  label: "bar-wrapper",
  display: "flex",
  alignItems: "center"
});

export const SimpleBar = styled.div<IProps>(
  {
    label: "simple-bar",
    height: 2,
    backgroundColor: `${draculaTheme.comment}`
  },
  ({ width }) => ({
    width: `${width}%`
  })
);
