import * as React from "react";
import { shallow, mount } from "enzyme";

import { SectionHeader } from "./";
import { Header } from "./styles";
import { H1 } from "../../styles/typography";

import { draculaTheme } from "../../styles/theme";

const props = {
  leading: "Lorem-ipsum",
  trailing: "()",
  display: "inline-block"
};

const shallowDefault = () => {
  return shallow(<SectionHeader {...props} />);
};

const mountDefault = () => {
  return mount(<SectionHeader {...props} />);
};

describe("<SectionHeader />", () => {
  it("renders correctly", () => {
    const wrapper = shallowDefault();
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it("has both required props", () => {
    const wrapper = mountDefault();
    expect(wrapper.props()).toEqual({ ...props });
  });
  it("has a Header", () => {
    const wrapper = shallowDefault();
    const header = wrapper.find(Header);
    expect(header).toHaveLength(1);
  });
  it("has x3 H1", () => {
    const wrapper = shallowDefault();
    const h1 = wrapper.find(H1);
    expect(h1.length).toEqual(3);
  });
  it("has x3 H1 set to display inline-block", () => {
    const wrapper = shallowDefault();
    const h1s = wrapper.find(H1);
    h1s.map(h1 => {
      expect(h1.props().display).toEqual("inline-block");
    });
  });
  it("has green H1 first", () => {
    const wrapper = shallowDefault();
    const firstH1 = wrapper
      .find(H1)
      .at(0)
      .props();
    expect(firstH1.fontColour).toEqual(draculaTheme.green);
  });
  it("has pink H1 second", () => {
    const wrapper = shallowDefault();
    const secondH1 = wrapper
      .find(H1)
      .at(1)
      .props();
    expect(secondH1.fontColour).toEqual(draculaTheme.pink);
  });
  it("has cyan H1 third", () => {
    const wrapper = shallowDefault();
    const thirdH1 = wrapper
      .find(H1)
      .at(2)
      .props();
    expect(thirdH1.fontColour).toEqual(draculaTheme.cyan);
  });
});
