import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { draculaTheme } from "../theme";

import { P, H1, H2 } from "./";

const stories = storiesOf("Typography", module);

stories.add(
  "P default",
  withInfo("Standard <P> tag")(() => <P>This is a P</P>)
);

stories.add(
  "P fontColour",
  withInfo("fontColour prop")(() => (
    <P fontColour={draculaTheme.pink}>This is a P</P>
  ))
);

stories.add("H1", withInfo("Standard <H1> tag")(() => <H1>This is a H1</H1>));

stories.add(
  "H1 fontColour",
  withInfo("fontColour prop")(() => (
    <H1 fontColour={draculaTheme.pink}>This is a H1</H1>
  ))
);

stories.add("H2", withInfo("Standard <H2> tag")(() => <H2>This is a H2</H2>));

stories.add(
  "H2 fontColour",
  withInfo("fontColour prop")(() => (
    <H2 fontColour={draculaTheme.pink}>This is a H2</H2>
  ))
);
