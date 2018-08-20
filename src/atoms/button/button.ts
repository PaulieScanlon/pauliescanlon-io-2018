import styled from "react-emotion";

import { font } from "../../styles/typography";
import { themeObjects } from "../../styles/theme";

import { ITheme } from "../../types/theme-objects";

export const Button = styled.button<ITheme>(
  {
    label: "button",
    borderRadius: 2,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: themeObjects.default.outline,
    backgroundColor: themeObjects.default.secondary,
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight,
    fontSize: font.fontSize,
    cursor: "pointer",
    color: themeObjects.default.primary,
    padding: "5px 10px",
    textDecoration: "none",
    margin: 0,
    minWidth: 100,
    transition: "all 0.2s linear 0s",
    ":hover": {
      backgroundColor: themeObjects.default.hilight
    },
    ":focus": {
      outline: "none"
    }
  },
  ({ theme }) => ({
    borderColor: theme.outline,
    backgroundColor: theme.primary,
    color: theme.secondary,
    "&:hover": {
      backgroundColor: theme.hilight
    }
  })
);
