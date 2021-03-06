import tinycolor from "tinycolor2";

const alphaBg = tinycolor("#282a36");
alphaBg.toRgbString();

export const draculaTheme = {
  background: "#282a36",
  backgroundAlpha: alphaBg.setAlpha(0.95),
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
