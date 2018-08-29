import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { draculaTheme } from "../theme";

import { P, H1 } from "./";

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

stories.add("H1", withInfo("Standard <P> tag")(() => <H1>This is a H1</H1>));

stories.add(
  "H1 fontColour",
  withInfo("fontColour prop")(() => (
    <H1 fontColour={draculaTheme.pink}>This is a H1</H1>
  ))
);
