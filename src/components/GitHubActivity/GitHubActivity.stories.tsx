import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { GitHubActivity } from ".";

import { activity } from "./data.mock";

const stories = storiesOf("GitHub Activity", module);

stories.add(
  "default usage",
  withInfo("GitHub Activity displays a list of 5 recent GitHub events")(() => (
    <GitHubActivity activity={activity} />
  ))
);
