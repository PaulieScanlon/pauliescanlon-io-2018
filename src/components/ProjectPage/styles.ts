import styled from "react-emotion";
import { px } from "../../styles/breakpoints";
import { common } from "../../styles";
import { draculaTheme } from "../../styles/theme";

interface IProps {
  backgroundImage: string;
}

export const FeatureImageWrapper = styled.div({
  label: "feature-image-wrapper",
  position: "fixed",
  width: "100%",
  height: "100vh",
  overflow: "hidden"
});

export const FeatureImage = styled.div<IProps>(
  {
    label: "feature-image",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
  ({ backgroundImage }) => ({
    backgroundImage: `url(${backgroundImage})`
  })
);

export const ProjectBodyWrapper = styled.div({
  label: "project-wrapper",
  position: "relative",
  display: "flex",
  margin: `0 ${common.padding}px`,
  height: "100%",
  minHeight: "100vh"
});

export const ProjectBody = styled.div({
  label: "project-body",
  padding: `${common.padding}px`,
  backgroundColor: `${draculaTheme.backgroundAlpha}`,
  boxShadow: common.dropShadow,
  maxWidth: `${px.md}`,
  margin: "0 auto",
  alignSelf: "center"
});
