import styled from "react-emotion";
import { draculaTheme } from "../../styles/theme";

export const DL = styled.dl({
  label: "descriptions-list"
});

export const DT = styled.dt({
  label: "descriptions-term",
  color: draculaTheme.cyan
});

export const DD = styled.dd({
  label: "descriptions-description",
  margin: "0px 0px 10px 0px",
  color: draculaTheme.comment,
  a: {
    color: `${draculaTheme.comment}!important`
  }
});
