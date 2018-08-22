import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import SkillsChart from "./";

import { data } from "./data.mock";

const stories = storiesOf("Organisms/Skills Chart", module);

stories.add(
  "default usage",
  withInfo("...")(() => <SkillsChart tags={data} />)
);
