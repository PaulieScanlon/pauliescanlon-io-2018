import styled from "react-emotion";
import { draculaTheme } from "../../styles/theme";
import { common } from "../../styles/";

export const ContactDetailsWrapper = styled.div({
  label: "contact-details-wrapper",
  display: "flex",
  flexDirection: "column"
});

export const ContactLink = styled.a({
  label: "contact-link",
  cursor: "pointer",
  fontSize: 14,
  color: draculaTheme.comment,
  transition: `all ${common.hoverTransition}s`,
  "&:hover": {
    color: draculaTheme.purple
  }
});
