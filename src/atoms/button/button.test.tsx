import * as React from "react";
import { shallow } from "enzyme";

import { Button } from "./";

describe("<Button />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Button>Hooray</Button>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
