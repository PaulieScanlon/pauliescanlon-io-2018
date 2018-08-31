import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { TechTopFive } from "./";

import { tags } from "./data.mock";

const stories = storiesOf("Tech Top Five", module);

stories.add(
  "default usage",
  withInfo("Displays a list of 5 most used tags")(() => (
    <TechTopFive tags={tags} />
  ))
);
