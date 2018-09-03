import styled from "react-emotion";
import { draculaTheme } from "../../styles/theme";
import { common } from "../../styles/";

export const GitHubActivityWrapper = styled.div({
  label: "git-hub-activity-wrapper",
  display: "flex",
  flexDirection: "column"
});

export const RepoLink = styled.a({
  label: "repo-link",
  cursor: "pointer",
  fontSize: 14,
  color: draculaTheme.comment,
  transition: `all ${common.hoverTransition}s`,
  "&:hover": {
    color: draculaTheme.purple
  }
});
