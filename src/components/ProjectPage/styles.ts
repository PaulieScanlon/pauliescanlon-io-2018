import styled from "react-emotion";
import { px } from "../../styles/breakpoints";
import { common } from "../../styles";
import { draculaTheme } from "../../styles/theme";

interface IProps {
  backgroundImage: string;
}

export const FeatureImageWrapper = styled.div({
  label: "feature-image-wrapper",
  position: "absolute",
  width: "100%",
  height: "50vh",
  overflow: "hidden"
});

export const FeatureImage = styled.div<IProps>(
  {
    label: "feature-image",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat"
  },
  ({ backgroundImage }) => ({
    backgroundImage: `url(${backgroundImage})`
  })
);

export const ProjectBodyWrapper = styled.div({
  label: "project-wrapper",
  position: "absolute",
  marginTop: 200,
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%"
});

export const ProjectBody = styled.div({
  label: "project-body",
  padding: `${common.padding}px`,
  backgroundColor: draculaTheme.background,
  boxShadow: common.dropShadow,
  maxWidth: `${px.md}`,
  margin: "0 auto"
});
