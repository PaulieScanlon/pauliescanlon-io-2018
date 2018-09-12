import styled from "react-emotion";
import { font } from "../../styles/typography";
import { common } from "../../styles";
import { draculaTheme } from "../../styles/theme";

export const ListWrapper = styled.div({
  label: "list-wrapper",
  ul: {
    label: "bullet-list",
    li: {
      label: "bullet",
      lineHeight: `${font.lineHeight}`,
      ":before": {
        paddingRight: `${common.padding / 2}px`,
        content: `"•"`,
        color: draculaTheme.cyan
      },
      small: {
        label: "small",
        display: "inline-block",
        color: draculaTheme.comment,
        padding: `0px 0px ${common.padding / 2}px ${common.padding}px`,
        fontSize: 12
      }
    }
  }
});
