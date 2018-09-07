import styled from "react-emotion";
import { draculaTheme } from "../../styles/theme";
import { common } from "../../styles/";

export const GitHubActivityWrapper = styled.div({
  label: "git-hub-activity-wrapper",
  display: "flex",
  flexDirection: "column",
  ".default-event": {
    color: draculaTheme.pink
  },
  ".watch-event": {
    color: draculaTheme.purple
  },
  ".push-event": {
    color: draculaTheme.yellow
  },
  ".create-event": {
    color: draculaTheme.green
  },
  ".issue-event": {
    color: draculaTheme.orange
  },
  ".delete-event": {
    color: draculaTheme.red
  }
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
