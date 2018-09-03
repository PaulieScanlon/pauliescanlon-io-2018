import tinygradient from "tinygradient";
import tinycolor from "tinycolor2";

export const getColourRange = (steps: number, colour: string[] | string) => {
  // tinygradient needs more than 2 steps in order to create a range.
  if (typeof colour === "string" || steps < 2) {
    const singleHex = new Array(steps).fill(colour);
    return singleHex;
  } else {
    const range = tinygradient(colour);
    const variantsRGB = range.rgb(steps);

    const variantsHex = variantsRGB.map((colourRGB: string) =>
      tinycolor(colourRGB).toHexString()
    );
    return variantsHex;
  }
};
