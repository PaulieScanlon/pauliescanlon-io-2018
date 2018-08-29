import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import SectionHeader from "./";

const stories = storiesOf("Atoms/SectionHeader", module);

stories.add(
  "default",
  withInfo("SectionHeader requires both leading and trailing props")(() => (
    <SectionHeader leading="Lorem-ipsum" trailing="()" />
  ))
);
