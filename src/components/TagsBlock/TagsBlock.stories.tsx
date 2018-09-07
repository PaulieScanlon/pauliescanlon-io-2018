import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { data } from "./data.mock";
import { TagsBlock } from "./TagsBlock";

const stories = storiesOf("TagsBlock", module);

stories.add(
  "default usage",
  withInfo("Accepts an array of strings to display in a Tag")(() => (
    <TagsBlock tags={data} />
  ))
);
