import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { SectionHeader } from "./";

const stories = storiesOf("SectionHeader", module);

stories.add(
  "default",
  withInfo("SectionHeader requires both leading a prop")(() => (
    <SectionHeader leading="lorem" />
  ))
);

stories.add(
  "default & trailing",
  withInfo("accepts a trailing prop")(() => (
    <SectionHeader leading="lorem" trailing="ipsum" />
  ))
);
