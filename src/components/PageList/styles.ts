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
        color: draculaTheme.comment,
        paddingLeft: common.padding,
        fontSize: 12
      }
    }
  }
});
