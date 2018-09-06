import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { User } from "./";

import { available, booked } from "./data.mock";

const stories = storiesOf("User", module);

stories.add(
  "available usage",
  withInfo("User displays user details and call to actions")(() => (
    <User userData={available} />
  ))
);

stories.add(
  "booked usage",
  withInfo("User displays user details and call to actions")(() => (
    <User userData={booked} />
  ))
);
