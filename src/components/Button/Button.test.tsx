import * as React from "react";
import { shallow, mount } from "enzyme";

import { Button } from "./";
import { draculaTheme } from "../../styles/theme";

describe("<Button />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Button>Lorem Ipsum</Button>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders children", () => {
    const wrapper = mount(<Button>Lorem Ipsum</Button>);
    expect(wrapper.props().children).toEqual("Lorem Ipsum");
  });
  it("has correct background colour", () => {
    const wrapper = mount(
      <Button backgroundColour={draculaTheme.green}>Lorem Ipsum</Button>
    );
    expect(wrapper.props().backgroundColour).toEqual(draculaTheme.green);
  });
});
