import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { GitHubActivity } from ".";

import { activity } from "./data.mock";

const stories = storiesOf("GitHubActivity", module);

stories.add(
  "default usage",
  withInfo(
    "GitHub Activity displays a list of 5 recent GitHub events. The event type is mapped to a className to give it the correct colour"
  )(() => (
    <GitHubActivity
      leading={activity.leading}
      trailing={activity.trailing}
      activity={activity.details}
    />
  ))
);
