import * as React from "react";
import { shallow, mount } from "enzyme";

import { DescriptionList } from "./";
import { DL, DT, DD } from "./styles";

import { defaultList } from "./data.mock";

const props = {
  data: defaultList
};

const shallowDefault = () => {
  return shallow(<DescriptionList {...props} />);
};

const mountDefault = () => {
  return mount(<DescriptionList {...props} />);
};

describe("<DescriptionList />", () => {
  it("renders correctly", () => {
    const wrapper = shallowDefault();
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it("has required props", () => {
    const wrapper = mountDefault();
    expect(wrapper.props()).toEqual({ ...props });
  });
  it("has a DL", () => {
    const wrapper = shallowDefault();
    const dl = wrapper.find(DL);
    expect(dl).toHaveLength(1);
  });
  it("has correct amount of DT", () => {
    const wrapper = mountDefault();
    const dt = wrapper.find(DT);
    expect(dt.length).toEqual(5);
  });
  it("has correct amount of DD", () => {
    const wrapper = mountDefault();
    const dd = wrapper.find(DD);
    expect(dd.length).toEqual(5);
  });
});
