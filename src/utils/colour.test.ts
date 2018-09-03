import { getColourRange } from "./colour";

import { draculaTheme } from "../styles/theme";

const defaultUsage = {
  amt: 5,
  colour: draculaTheme.pink
};

const rangeUsage = {
  amt: 10,
  colours: [draculaTheme.pink, draculaTheme.cyan]
};

const singleValueRangeUsage = {
  amt: 1,
  colours: [draculaTheme.pink]
};

describe("getColourRange()", () => {
  it("returns array of correct length", () => {
    const colours = getColourRange(defaultUsage.amt, defaultUsage.colour);
    expect(colours.length).toEqual(defaultUsage.amt);
  });
  it("returns filled array of correct length with only provided colour", () => {
    const colours = getColourRange(defaultUsage.amt, defaultUsage.colour);
    expect(colours.length).toEqual(defaultUsage.amt);
    expect(colours.every((value, index, array) => value === array[0])).toBe(
      true
    );
  });
  it("returns range array of correct length with colours between two given colours", () => {
    const colours = getColourRange(rangeUsage.amt, rangeUsage.colours);
    expect(colours.length).toEqual(rangeUsage.amt);
    expect(colours[0]).toEqual(rangeUsage.colours[0]);
    expect(colours[9]).toEqual(rangeUsage.colours[1]);
  });
  it("handles step array if array is of length 1", () => {
    const colours = getColourRange(
      singleValueRangeUsage.amt,
      singleValueRangeUsage.colours
    );
    expect(colours[0]).toEqual(singleValueRangeUsage.colours[0]);
  });
});
