import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

// import { draculaTheme } from "../theme";

import { SectionHeader } from "./section-header";

const stories = storiesOf("Atoms/SectionHeader", module);

stories.add(
  "default",
  withInfo("SectionHeader requires both leading and trailing props")(() => (
    <SectionHeader leading="Lorem-ipsum" trailing="()" />
  ))
);
