import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { TechTopFive } from "./tech-top-five";

import { tags } from "./data.mock";

const stories = storiesOf("Organisms/Tech Top Five", module);

stories.add(
  "default usage",
  withInfo("...")(() => <TechTopFive tags={tags} />)
);
