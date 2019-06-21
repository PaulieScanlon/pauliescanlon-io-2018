import { convertDate } from "./convertDate";

describe("converDate()", () => {
  it("onverts date to correct format", () => {
    const testDate = "2019-06-21T11:58:16.000Z";
    expect(convertDate(testDate)).toEqual("21/6/2019");
  });
});
