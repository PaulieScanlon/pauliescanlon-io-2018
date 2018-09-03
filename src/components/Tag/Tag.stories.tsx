import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { draculaTheme } from "../../styles/theme";

import { Tag } from "./";

const stories = storiesOf("Tag", module);

stories.add(
  "default",
  withInfo("Tag ...")(() => (
    <Tag
      tag="Lorem"
      fontColour={draculaTheme.pink}
      borderColour={draculaTheme.pink}
    />
  ))
);
