import { darken, lighten } from "polished";
import { common } from "../../styles/common";

// // https://cimdalli.github.io/mui-theme-generator/
// export const theme = {
//   primary1Colour: "#ff4081",
//   primary2Colour: "#0097a7",
//   primary3Colour: "#757575",
//   accent1Colour: "#0097a7 ",
//   accent2Colour: "#f50057",
//   accent3Colour: "#ff80ab",
//   textColour: "rgba(255, 255, 255, 1)",
//   secondaryTextColour: "rgba(255, 255, 255, 0.7)",
//   alternateTextColour: "#303030",
//   canvasColour: "#303030",
//   borderColour: "rgba(255, 255, 255, 0.3)",
//   disabledColour: "rgba(43, 43, 43, 0.3)",
//   // disabledColour: "rgba(255, 255, 255, 0.3)",
//   pickerHeaderColour: "rgba(255, 255, 255, 0.12)",
//   clockCircleColour: "rgba(255, 255, 255, 0.12)",
//   shadowColour: "rgba(0, 0, 0, 1)"
// };

// https://github.com/dracula/dracula-theme
export const draculatheme = {
  background: "#282a36",
  selection: "#44475a",
  foreground: "#f8f8f2",
  comment: "#6272a4",
  cyan: "#8be9fd",
  green: "#50fa7b",
  orange: "#ffb86c",
  pink: "#ff79c6",
  purple: "#bd93f9",
  red: "#ff5555",
  yellow: "#f1fa8c",
  pre: "#252525",
  transparent: "rgba(0,0,0,0)"
};

export const themeObjects = {
  default: {
    primary: draculatheme.background,
    secondary: draculatheme.foreground,
    lowlight: darken(common.darkenAmt, draculatheme.foreground),
    hilight: lighten(common.lightenAmt, draculatheme.foreground),
    outline: draculatheme.background
  },
  inverted: {
    primary: draculatheme.foreground,
    secondary: draculatheme.background,
    lowlight: darken(common.darkenAmt, draculatheme.foreground),
    hilight: lighten(common.lightenAmt, draculatheme.foreground),
    outline: draculatheme.foreground
  },
  ghost: {
    primary: draculatheme.background,
    secondary: draculatheme.pink,
    lowlight: darken(common.darkenAmt, draculatheme.background),
    hilight: lighten(common.lightenAmt, draculatheme.background),
    outline: draculatheme.pink
  },
  cyan: {
    primary: draculatheme.cyan,
    secondary: draculatheme.selection,
    lowlight: darken(common.darkenAmt, draculatheme.cyan),
    hilight: lighten(common.lightenAmt, draculatheme.cyan),
    outline: draculatheme.cyan
  },
  green: {
    primary: draculatheme.green,
    secondary: draculatheme.selection,
    lowlight: darken(common.darkenAmt, draculatheme.green),
    hilight: lighten(common.lightenAmt, draculatheme.green),
    outline: draculatheme.green
  },
  orange: {
    primary: draculatheme.orange,
    secondary: draculatheme.selection,
    lowlight: darken(common.darkenAmt, draculatheme.orange),
    hilight: lighten(common.lightenAmt, draculatheme.orange),
    outline: draculatheme.orange
  },
  pink: {
    primary: draculatheme.pink,
    secondary: draculatheme.selection,
    lowlight: darken(common.darkenAmt, draculatheme.pink),
    hilight: lighten(common.lightenAmt, draculatheme.pink),
    outline: draculatheme.pink
  },
  purple: {
    primary: draculatheme.purple,
    secondary: draculatheme.selection,
    lowlight: darken(common.darkenAmt, draculatheme.purple),
    hilight: lighten(common.darkenAmt, draculatheme.purple),
    outline: draculatheme.purple
  },
  red: {
    primary: draculatheme.red,
    secondary: draculatheme.pre,
    lowlight: darken(common.darkenAmt, draculatheme.red),
    hilight: lighten(common.darkenAmt, draculatheme.red),
    outline: draculatheme.red
  },
  yellow: {
    primary: draculatheme.yellow,
    secondary: draculatheme.pre,
    lowlight: darken(common.darkenAmt, draculatheme.yellow),
    hilight: darken(common.darkenAmt, draculatheme.yellow),
    outline: draculatheme.yellow
  },
  pre: {
    primary: draculatheme.pre,
    secondary: draculatheme.foreground,
    lowlight: darken(common.darkenAmt, draculatheme.pre),
    hilight: darken(common.darkenAmt, draculatheme.pre),
    outline: draculatheme.pre
  }
};
